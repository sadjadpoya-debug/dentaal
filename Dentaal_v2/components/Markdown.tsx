import { MDXRemote } from 'next-mdx-remote/rsc';
export default function Markdown({source}:{source:string}){
  // @ts-expect-error Async Server Component
  return <article className="prose prose-lg max-w-none prose-a:text-brand-blue"><MDXRemote source={source} /></article>;
}
