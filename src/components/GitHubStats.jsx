import React from 'react'

export default function GitHubStats(){
  const username = 'surajchoudhary' // apna GitHub username daal

  return (
    <section id="github" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text- font-bold">GitHub <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Activity</span></h2>
        <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent"/>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-[#0e1116] border border-white/10 p-4">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0e1116&title_color=8b5cf6&icon_color=22d3ee`}
            alt="github stats"
            className="w-full"
          />
        </div>
        <div className="rounded-2xl bg-[#0e1116] border border-white/10 p-4">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0e1116&title_color=8b5cf6`}
            alt="top langs"
            className="w-full"
          />
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-[#0e1116] border border-white/10 p-4 overflow-x-auto">
        <img
          src={`https://ghchart.rshah.org/8b5cf6/${username}`}
          alt="commit graph"
          className="w-full min-w-"
        />
        <p className="text-xs text-zinc-500 mt-2 text-center">Last 12 months • real commits</p>
      </div>
    </section>
  )
}