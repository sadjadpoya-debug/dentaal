import './globals.css'; import Nav from '@/components/Nav'; import type { ReactNode } from 'react';
export const metadata = {
  metadataBase: new URL('https://dentaal.example'),
  title: 'Dentaal – Heldere zorg. Helder verhaal.',
  description: 'Transparante tandheelkunde in begrijpelijke taal. Maak direct een afspraak.',
  openGraph: { title: 'Dentaal', description: 'Heldere zorg. Helder verhaal.', images: ['/og-default.png'] }
};
export default function RootLayout({ children }: { children: ReactNode }){
  return (<html lang="nl"><head>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>
    <meta name="theme-color" content="#5677D5"/>
  </head><body><Nav/><main>{children}</main><footer className="mt-24 border-t">
    <div className="container py-10 text-sm text-slate-500 flex justify-between">
      <p>© {new Date().getFullYear()} Dentaal</p>
      <p><a href="/klachtenregeling">Klachtenregeling</a> · <a href="/code-of-conduct">Code of Conduct</a></p>
    </div></footer></body></html>);
}
