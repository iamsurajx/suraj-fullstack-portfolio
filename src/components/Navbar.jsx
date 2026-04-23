import React, { useEffect, useState } from 'react'

const links = ['home','about','skills','projects','certificates','contact']

export default function Navbar(){
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    links.forEach(id => { 
      const el = document.getElementById(id)
      if(el) observer.observe(el) 
    })

    return () => { 
      window.removeEventListener('scroll', onScroll)
      observer.disconnect() 
    }
  }, [])

  return (
    <div className={`fixed inset-x-0 z-50 transition-all ${scrolled ? 'top-4' : 'top-6'}`}>
      <nav className={`mx-auto max-w-3xl px-6 py-3 rounded-full border transition-all ${scrolled ? 'bg-black/70 backdrop-blur-xl border-white/10 shadow-2xl' : 'bg-white/5 border-white/5'}`}>
        <ul className="flex items-center justify-center gap-8 text-sm">
          {links.map(l=>(
            <li key={l}>
              <a 
                href={`#${l}`} 
                className={`capitalize transition-colors ${active===l ? 'text-violet-400 font-medium' : 'text-zinc-400 hover:text-white'}`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}