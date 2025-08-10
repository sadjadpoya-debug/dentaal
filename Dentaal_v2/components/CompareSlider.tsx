'use client';
import { useState } from 'react';
export default function CompareSlider(){
  const [x,setX]=useState(50);
  return (<div className="relative w-full overflow-hidden rounded-xl shadow-soft bg-slate-100 aspect-video">
    <img src="/images/case-after.jpg" className="absolute inset-0 w-full h-full object-cover" alt="na"/>
    <div className="absolute inset-0 overflow-hidden" style={{width:`${x}%`}}>
      <img src="/images/case-before.jpg" className="w-full h-full object-cover" alt="voor"/>
    </div>
    <input type="range" min="0" max="100" value={x} onChange={(e)=>setX(parseInt(e.target.value))}
      className="absolute inset-x-4 bottom-4 w-[calc(100%-2rem)]"/>
  </div>);
}
