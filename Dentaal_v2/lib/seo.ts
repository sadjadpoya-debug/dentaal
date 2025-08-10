export function meta({title, description}:{title?:string, description?:string}={}){
  return {
    title: title ? `${title} – Dentaal` : 'Dentaal – Heldere zorg. Helder verhaal.',
    description: description || 'Transparante tandheelkunde in begrijpelijke taal. Maak direct een afspraak.',
    openGraph: { title, description, images: ['/og-default.png'] }
  };
}
