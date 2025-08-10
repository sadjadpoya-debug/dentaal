-- Dentaal Supabase schema (EU region recommended)
-- NOTE: run in Supabase SQL editor. Adjust retention & policies with your DPO.

create table if not exists patients (
  id uuid primary key default gen_random_uuid(),
  clinic text check (clinic in ('rotterdam','dordrecht')) not null,
  email text not null,
  last_name text not null,
  birth_date date not null,
  created_at timestamptz default now()
);

create table if not exists quotes (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid references patients(id) on delete cascade,
  title text not null,
  html text not null,              -- rendered offer (for PDF)
  total_cents integer not null,
  currency text default 'EUR',
  status text default 'sent',      -- sent | accepted | rejected | expired
  created_at timestamptz default now(),
  accepted_at timestamptz
);

create table if not exists consents (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid references patients(id) on delete cascade,
  treatment_slug text not null,    -- e.g. 'veneers'
  version text not null,           -- content version
  html text not null,              -- consent content (rendered)
  signed boolean default false,
  signed_at timestamptz,
  signer_ip inet,
  signature text,                  -- e.g. drawn SVG path or typed name
  created_at timestamptz default now()
);

create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid references patients(id) on delete cascade,
  type text not null,              -- viewed_quote | signed_consent | email_sent | callback
  meta jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

create table if not exists treatments (
  slug text primary key,           -- 'veneers', 'implantaten', ...
  title text not null,
  aftercare_mdx text               -- MDX content source for aftercare
);

-- Enable Row Level Security
alter table patients enable row level security;
alter table quotes   enable row level security;
alter table consents enable row level security;
alter table events   enable row level security;

-- Auth: use Supabase auth users table. We link by email (magic link).
-- Policies: patient can read/write only own records matched by auth.email().

create policy "patient-own-records"
on patients for select using ( email = auth.email() );

create policy "patient-update-own"
on patients for update using ( email = auth.email() );

create policy "quotes-own"
on quotes for select using (
  patient_id in (select id from patients where email = auth.email())
);

create policy "consents-own"
on consents for select using (
  patient_id in (select id from patients where email = auth.email())
);

create policy "events-own"
on events for select using (
  patient_id in (select id from patients where email = auth.email())
);

-- Service role (server) can insert/update on behalf of clinic staff via API routes
-- (do NOT expose service key to the browser).