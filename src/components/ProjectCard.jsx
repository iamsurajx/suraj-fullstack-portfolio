import React from 'react'
import { Github, ExternalLink } from 'lucide-react'
export default function ProjectCard({ project }){
  return (
    <div className="group rounded-2xl border border-white/10 p-5">
      <div className="mb-4 aspect-video rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20"/>
      <h3 className="font-semibold">{project.title}</h3>
      <p className="mt-1 text-sm text-zinc-400">{project.desc}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">{project.tech.map(t=> <span key={t} className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-">{t}</span>)}</div>
      <div className="mt-4 flex gap-3 text-zinc-400">
        <a href={project.github} className="flex items-center gap-1 text-sm hover:text-white"><Github size={16}/> Code</a>
        <a href={project.live} className="flex items-center gap-1 text-sm hover:text-white"><ExternalLink size={16}/> Live</a>
      </div>
    </div>
  )
}