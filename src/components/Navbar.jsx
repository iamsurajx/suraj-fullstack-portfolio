import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['home', 'about', 'skills', 'projects', 'certificates', 'contact']

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false) // Mobile menu state

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    
    links.forEach(id => { 
      const el = document.getElementById(id)
      if (el) observer.observe(el) 
    })

    return () => { 
      window.removeEventListener('scroll', onScroll)
      observer.disconnect() 
    }
  }, [])

  return (
    // Outer container with horizontal padding (px-4) so it doesn't touch screen edges on mobile
    <div className={`fixed inset-x-0 px-4 z-50 transition-all duration-300 ${scrolled ? 'top-4' : 'top-6'}`}>
      
      {/* Navbar Container */}
      <nav 
        className={`mx-auto max-w-3xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'rounded-2xl bg-[#0e1116]/95 backdrop-blur-xl border border-white/10 shadow-2xl py-4 px-6' 
                 : `rounded-full py-3 px-6 border ${scrolled ? 'bg-black/70 backdrop-blur-xl border-white/10 shadow-2xl' : 'bg-white/5 border-white/5'}`
        }`}
      >
        
        {/* ================= DESKTOP VIEW ================= */}
        <ul className="hidden md:flex items-center justify-center gap-8 text-sm">
          {links.map(l => (
            <li key={l}>
              <a 
                href={`#${l}`} 
                className={`capitalize transition-colors ${active === l ? 'text-violet-400 font-medium' : 'text-zinc-400 hover:text-white'}`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* ================= MOBILE VIEW (HEADER) ================= */}
        <div className="flex md:hidden items-center justify-between w-full">
          {/* Shows the currently active section name on mobile */}
          <span className="text-violet-400 font-medium text-sm capitalize">
            {active === 'home' ? 'Portfolio' : active}
          </span>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* ================= MOBILE VIEW (DROPDOWN MENU) ================= */}
        <div 
          className={`md:hidden grid transition-all duration-300 ease-in-out ${
            isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <ul className="overflow-hidden flex flex-col gap-2 text-sm border-t border-white/10 pt-4">
            {links.map(l => (
              <li key={l} className="w-full">
                <a 
                  href={`#${l}`} 
                  onClick={() => setIsOpen(false)} // Close menu when a link is clicked
                  className={`block w-full py-2.5 px-4 text-center capitalize rounded-xl transition-all ${
                    active === l 
                      ? 'bg-violet-500/10 text-violet-400 font-medium' 
                      : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
      </nav>
    </div>
  )
}