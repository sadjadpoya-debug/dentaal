import fs from 'fs'; import path from 'path'; import matter from 'gray-matter';
export function readMdx(rel:string){ const full=path.join(process.cwd(),'content',rel); const file=fs.readFileSync(full,'utf-8'); const {content,data}=matter(file); return {content,frontmatter:data}; }
export function listMdx(dirRel:string){ const dir=path.join(process.cwd(),'content',dirRel); if(!fs.existsSync(dir)) return []; return fs.readdirSync(dir).filter(f=>f.endsWith('.mdx')).map(f=>{ const full=path.join(dirRel,f); const {frontmatter}=readMdx(full); return {slug:f.replace(/\.mdx$/,''), frontmatter}; }); }
