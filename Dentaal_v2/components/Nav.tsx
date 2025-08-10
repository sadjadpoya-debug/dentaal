'use client'; import Link from 'next/link'; import {useEffect,useState} from 'react'; import clsx from 'clsx';
export default function Nav(){
  const [s,set]=useState(false);
  useEffect(()=>{ const on=()=>set(window.scrollY>16); on(); addEventListener('scroll',on); return ()=>removeEventListener('scroll',on); },[]);
  const links=[['/behandelingen','Behandelingen'],['/kennisbank','Kennisbank'],['/team','Team'],['/reviews','Reviews'],['/contact-locaties','Contact']];
  return (<header className={clsx('fixed top-0 inset-x-0 z-50 transition-shadow', s?'bg-white/95 shadow-soft backdrop-blur':'bg-transparent')}>
    <div className="container h-16 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3"><img src="/logo/Dentaal_logo_primary.svg" className="h-7" alt="Dentaal"/></Link>
      <nav className="hidden md:flex items-center gap-6">
        {links.map(([href,label])=><Link key={href} href={href} className="hover:underline">{label}</Link>)}
        <Link href="/afspraak-maken" className="btn-primary text-white no-underline">Afspraak maken</Link>
      </nav>
    </div></header>);
}
