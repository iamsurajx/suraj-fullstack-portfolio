import React, { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  const [code, setCode] = useState('')
  const fullCode = `const developer = {
  name: 'Suraj Choudhary',
  role: 'Full Stack Developer',
  stack: ['React', 'Next.js', 'Node', 'AI/ML'],
  build: () => 'production-ready apps',
  location: 'India'
};`

  useEffect(() => {
    let i = 0
    const type = () => {
      setCode(fullCode.slice(0, i))
      i++
      if (i <= fullCode.length) {
        setTimeout(type, 25)
      } else {
        setTimeout(() => {
          setCode('')
          i = 0
          type()
        }, 2500)
      }
    }
    type()
  }, [])

  return (
    <>
      <section id="home" className="relative mx-auto max-w-6xl px-4 pt-28 pb-20 scroll-mt-24">
        <header className="mx-auto max-w-6xl px-4 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - Tumhara original content - NO CHANGE */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs mb-6">
                <Sparkles className="size-3.5 text-violet-400" /> Welcome to my portfolio!
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                Suraj Choudhary <br />
                <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Full Stack Developer</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-zinc-400">I build production-ready web apps with modern stack. AI integration for enhanced user experience. </p>
              {/* replace the two buttons div */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="px-6 py-3 rounded-xl bg-violet-500 hover:bg-violet-600 text-white font-medium shadow-[0_8px_30px_rgba(139,92,246,0.3)] transition">View Projects</a>
                <a href="#contact" className="px-6 py-3 rounded-xl border border-white/15 hover:border-violet-500/50 backdrop-blur transition">Hire Me</a>
                <a href="/public/Suraj_Chaudhary_MERN_Dev.pdf" download className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm flex items-center gap-2 transition">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                  Download CV
                </a>
              </div>
            </div>

            {/* RIGHT - 3D Auto-Typing IDE */}
            <div className="relative hidden lg:block">
              {/* glow */}
              <div className="absolute -inset-10 bg-gradient-to-r from-violet-600/20 to-cyan-500/20 blur-3xl rounded-full"></div>

              <div
                className="relative"
                style={{
                  transform: 'perspective(1500px) rotateY(-20deg) rotateX(10deg)',
                  transformStyle: 'preserve-3d',
                  animation: 'float 6s ease-in-out infinite'
                }}
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#050507]/90 backdrop-blur-2xl shadow-2xl">
                  {/* IDE Top Bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text- text-zinc-500 font-mono">suraj.dev / hero.js</div>
                    <div className="w-12"></div>
                  </div>

                  {/* Code Window */}
                  <div className="p-6 h- font-mono text- leading-6">
                    <pre className="text-zinc-300 whitespace-pre-wrap">
                      <span className="text-zinc-600">1</span> <span className="text-violet-400">{code}</span>
                      <span className="inline-block w-2 h-4 bg-violet-400 animate-pulse ml-0.5 translate-y-0.5"></span>
                    </pre>

                    {/* fake terminal output */}
                    <div className="mt-6 pt-4 border-t border-white/5 text- text-zinc-500">
                      <span className="text-green-400">✓</span> Compiled successfully
                    </div>
                  </div>

                  {/* 3D depth layers */}
                  <div className="absolute inset-0 rounded-2xl border border-violet-500/20 pointer-events-none" style={{ transform: 'translateZ(20px)' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* float animation */}
          <style>{`
        @keyframes float {
          0%, 100% { transform: perspective(1500px) rotateY(-20deg) rotateX(10deg) translateY(0px); }
          50% { transform: perspective(1500px) rotateY(-20deg) rotateX(10deg) translateY(-15px); }
        }
      `}</style>
        </header>
      </section>
    </>

  )
}