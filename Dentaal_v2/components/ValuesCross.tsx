export default function ValuesCross(){
  const Item=({t,d}:{t:string,d:string})=>(<div><h3 className="text-brand-blue">{t}</h3><p className="text-slate-700">{d}</p></div>);
  return (<section className="py-16 bg-slate-100"><div className="container grid md:grid-cols-4 gap-8 text-center md:text-left">
    <Item t="Heldere taal." d="Duidelijk en leuk."/>
    <Item t="Transparant." d="Eerlijk & betrouwbaar."/>
    <Item t="Persoonlijk." d="Het beste voor jou."/>
    <Item t="Ronduit de beste." d="Deze zul je moeten ervaren."/>
  </div></section>);
}
