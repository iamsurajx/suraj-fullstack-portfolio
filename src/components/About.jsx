import React from 'react'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20">
      {/* Heading - ab add kiya */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text- font-extrabold tracking-tight text-white">
          About <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-violet-500/40 to-transparent"></div>
      </div>

      {/* add after heading div */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        {[
          ['5+', 'Production Apps'],
          ['6', 'Months Internship'],
          ['500+', 'GitHub Commits'],
          ['2025', 'Certified'],
        ].map(([n, l]) => (
          <div key={l} className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">{n}</div>
            <div className="text-xs text-zinc-500 mt-1">{l}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* LEFT */}
        <div className="lg:col-span-3">
          <p className="text- leading-relaxed text-zinc-300">
            I Am MERN Stack Developer with hands-on experience in building full-stack web applications. I've completed a 6-month internship at Orbiqe Technology Pvt. Ltd. where I developed responsive UI components and RESTful APIs.
          </p>
          <p className="mt-6 text- leading-relaxed text-zinc-300">
            I'm experienced with AI-assisted tools like ChatGPT and Copilot, and I'm passionate about creating scalable solutions. I hold a Full Stack Web Developer certification from Youtube & Udemy (2025).
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {[
              ['Location', 'Delhi, India'],
              ['Email', 'surajofficemail@gmail.com'],
              ['Education', 'MCA · CSE/IT, 2024'],
              ['Phone', '+91-8093729517'],
            ].map(([l, v]) => (
              <div key={l} className="rounded-xl bg-[#0f0f17]/70 border border-white/5 p-4 hover:border-violet-500/20 transition">
                <div className="text- font-semibold tracking-wider text-violet-400 uppercase">{l}</div>
                <div className="mt-1 text-zinc-200">{v}</div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <h3 className="text-xs uppercase tracking-[0.2em] text-violet-400 font-semibold mb-6">Education Timeline</h3>
            <div className="relative">
              <div className="absolute left- top-2 bottom-2 w-px bg-white/10"></div>
              <div className="space-y-8">
                {[
                  ['2023', 'MCA Computer Science', 'Jharkhand Rai University, Ranchi.'],
                  ['2025', 'Full Stack Web Dev Certification', 'Udemy'],
                  ['2026', 'Internship @ Orbiqe Technology Pvt. Ltd.', 'Reactjs & Nodejs Developer'],
                ].map(([y, t, p]) => (
                  <div key={y} className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.6)]"></div>
                    <div className="text-violet-400 text-sm font-bold">{y}</div>
                    <div className="text-white font-semibold">{t}</div>
                    <div className="text-zinc-500 text-sm">{p}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-2">
          <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">Technical Skills</h3>
          <div className="space-y-6">
            {[
              ['Frontend', ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap', 'Material UI']],
              ['Backend', ['Node.js', 'Express.js', 'REST APIs']],
              ['Database', ['MongoDB', 'SQL']],
              ['Tools', ['Git', 'GitHub', 'ChatGPT', 'Copilot']],
            ].map(([cat, skills]) => (
              <div key={cat}>
                <div className="text-violet-400 text-sm font-semibold mb-2.5">{cat}</div>
                <div className="flex flex-wrap gap-2">
                  {skills.map(s => <span key={s} className="px-3 py-1.5 rounded-full bg-[#15151f] border border-white/10 text- text-zinc-300 hover:border-violet-500/30 transition">{s}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-4">
            <div className="rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-transparent p-4 backdrop-blur">
              <div className="flex gap-3"><div>💼</div><div><div className="font-semibold text-violet-400">Internship @ Orbiqe Technology Pvt. Ltd.</div><div className="text-sm text-zinc-400 mt-0.5">Reactjs & Nodejs Developer · 6 Months (2026)</div></div></div>
            </div>
            <div className="rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-4 backdrop-blur">
              <div className="flex gap-3"><div>🎓</div><div><div className="font-semibold text-cyan-400">Full Stack Certification</div><div className="text-sm text-zinc-400 mt-0.5">Youtube / Udemy ·2022 - 2025</div></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}