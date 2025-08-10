export default function Hero(){
  return (<section className="pt-28 md:pt-36 pb-16 gradient text-white">
    <div className="container grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1>Heldere zorg. Helder verhaal.</h1>
        <p className="mt-4 text-lg text-white/90">Transparant, persoonlijk en ronduit de beste ervaring – in begrijpelijke taal.</p>
        <div className="mt-8 flex gap-3">
          <a className="btn-primary" href="/afspraak-maken">Afspraak maken</a>
          <a className="btn-secondary bg-white text-brand-blue" href="/behandelingen">Onze behandelingen</a>
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden shadow-soft"><video src="/video/hero.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover"/></div>
    </div></section>);
}
