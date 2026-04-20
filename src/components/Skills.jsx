import React from 'react'

const skills = [
  { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
  { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
  { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts' },
  { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
  { name: 'Express', icon: 'https://skillicons.dev/icons?i=express' },
  { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
  { name: 'PostgreSQL', icon: 'https://skillicons.dev/icons?i=postgres' },
  { name: 'Python', icon: 'https://skillicons.dev/icons?i=python' },
  { name: 'Django', icon: 'https://skillicons.dev/icons?i=django' },
  { name: 'AWS', icon: 'https://skillicons.dev/icons?i=aws' },
  { name: 'Docker', icon: 'https://skillicons.dev/icons?i=docker' },
  { name: 'Tailwind', icon: 'https://skillicons.dev/icons?i=tailwind' },
  { name: 'AI/ML', icon: 'https://skillicons.dev/icons?i=tensorflow' },
]

export default function Skills(){
  return (
    <section id="skills" className="w-full py-14 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text- font-extrabold tracking-tight text-white">
            My <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-violet-500/40 to-transparent"></div>
        </div>
      </div>

      <div className="relative w-full">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10"></div>

        <div
          className="flex gap-4 py-3 will-change-transform"
          style={{ animation: 'marquee 18s linear infinite' }}
        >
          {[...skills,...skills,...skills,...skills].map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 rounded-xl px-5 py-3 whitespace-nowrap border border-white/10 bg-white/[0.04] backdrop-blur-md hover:bg-white/10 hover:border-violet-500/30 transition shrink-0"
            >
              <img src={s.icon} alt={s.name} className="w-5 h-5" />
              <span className="text-sm font-medium text-zinc-200">{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}