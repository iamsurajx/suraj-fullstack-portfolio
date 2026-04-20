import React from 'react'

const testimonials = [
  {
    name: 'Rahul Verma',
    role: 'Senior Engineer, Zecdata',
    text: 'Suraj picked up MERN stack in 2 months and shipped production features. His Snapgram architecture with Socket.io was cleaner than most mid-level devs.',
    avatar: 'RV'
  },
  {
    name: 'Priya Sharma',
    role: 'Tech Lead, Zecdata',
    text: 'During internship, he debugged our payment webhook issue in 3 hours. Very reliable, writes clean code and documents everything.',
    avatar: 'PS'
  }
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text- font-bold mb-10">What <span className="text-violet-400">Mentors</span> Say</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map(t=>(
          <div key={t.name} className="rounded-2xl bg-[#0e1116] border border-white/10 p-6 hover:border-violet-500/30 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-300 font-bold">{t.avatar}</div>
              <div>
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-xs text-zinc-500">{t.role}</div>
              </div>
            </div>
            <p className="text-zinc-300 leading-relaxed">"{t.text}"</p>
          </div>
        ))}
      </div>
    </section>
  )
}