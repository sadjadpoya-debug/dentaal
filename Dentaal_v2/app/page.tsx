import Hero from '@/components/Hero'; import ValuesCross from '@/components/ValuesCross'; import Markdown from '@/components/Markdown'; import { readMdx } from '@/lib/mdx';
export default function Page(){ const { content } = readMdx('home.mdx'); return (<><Hero/><section className="py-16"><div className="container"><Markdown source={content}/></div></section><ValuesCross/></>); }
