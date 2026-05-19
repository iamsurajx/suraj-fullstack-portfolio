import React from 'react'
import { Github, GitCommit, GitPullRequest, Star, BookOpen, Activity, Terminal } from 'lucide-react'

// Professional Dummy Data
const githubStats = {
  totalCommits: "1,432",
  repositories: "34",
  pullRequests: "156",
  starsEarned: "89",
  longestStreak: "42 days",
  topLanguages: [
    { name: "JavaScript / Node.js", percentage: 45, color: "bg-yellow-400" },
    { name: "React / Next.js", percentage: 30, color: "bg-cyan-400" },
    { name: "Python", percentage: 15, color: "bg-blue-500" },
    { name: "Docker / DevOps", percentage: 10, color: "bg-violet-500" },
  ]
}

export default function GitHubStats() {
  return (
    <section id="github" className="mx-auto max-w-6xl px-4 py-20">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 border border-violet-500/20">
          <Github size={24} />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Code <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Metrics</span>
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-violet-500/40 to-transparent" />
      </div>
      
      <p className="text-zinc-400 max-w-2xl mb-12">
        A snapshot of my software engineering journey, showcasing continuous development, open-source contributions, and technical consistency.
      </p>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Commits", value: githubStats.totalCommits, icon: GitCommit, color: "text-emerald-400", bg: "bg-emerald-400/10" },
          { label: "Repositories", value: githubStats.repositories, icon: BookOpen, color: "text-cyan-400", bg: "bg-cyan-400/10" },
          { label: "Pull Requests", value: githubStats.pullRequests, icon: GitPullRequest, color: "text-violet-400", bg: "bg-violet-400/10" },
          { label: "Stars Earned", value: githubStats.starsEarned, icon: Star, color: "text-amber-400", bg: "bg-amber-400/10" }
        ].map((stat, index) => (
          <div key={index} className="rounded-2xl bg-[#13151d] border border-white/5 hover:border-white/10 p-5 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg ${stat.bg}`}>
                <stat.icon size={18} className={stat.color} />
              </div>
              <span className="text-sm font-medium text-zinc-400">{stat.label}</span>
            </div>
            <div className="text-3xl font-bold text-white">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Top Languages Card */}
        <div className="lg:col-span-1 rounded-2xl bg-[#13151d] border border-white/5 p-6 hover:border-white/10 transition-colors duration-300">
          <div className="flex items-center gap-2 mb-6">
            <Terminal size={18} className="text-violet-400" />
            <h3 className="text-white font-semibold">Top Tech Stack</h3>
          </div>
          
          <div className="space-y-5">
            {githubStats.topLanguages.map((lang, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-zinc-300 font-medium">{lang.name}</span>
                  <span className="text-zinc-500">{lang.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${lang.color} rounded-full transition-all duration-1000`} 
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contribution Graph Section (Using a Professional Static Image) */}
        <div className="lg:col-span-2 rounded-2xl bg-[#13151d] border border-white/5 p-6 hover:border-white/10 transition-colors duration-300 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Activity size={18} className="text-emerald-400" />
              <h3 className="text-white font-semibold">Contribution Heatmap</h3>
            </div>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Longest Streak: {githubStats.longestStreak}
            </span>
          </div>
          
          <div className="flex-1 bg-[#0e1116] rounded-xl border border-white/5 p-4 flex flex-col justify-center overflow-hidden relative group">
            {/* Using a static placeholder image for the GitHub graph */}
            <div className="w-full overflow-x-auto scrollbar-hide">
              <img 
                src="/images/contributions.png" 
                alt="GitHub Contribution Graph" 
                className="w-full min-w-[600px] object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                // Fallback realistic heatmap image in case the above fails
                onError={(e) => { e.target.src = "https://i.ibb.co/3W0Ptz7/github-contribution-graph-dummy.png" }}
              />
            </div>
            <p className="text-xs text-zinc-500 text-center mt-4 pt-4 border-t border-white/5">
              Consistent active development over the last year
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}