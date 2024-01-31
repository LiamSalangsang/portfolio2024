import React from 'react'

export default function Footer({setActive}) {
  return (
   <a className="font-bold flex w-full justify-center mt-10 bg-black text-white p-4" href="#home" onClick={()=>setActive("#home")} > Back to Top </a>
  )
}
