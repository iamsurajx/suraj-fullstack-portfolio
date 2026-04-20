import React, { useState } from 'react'

export default function Blog(){
  const [open, setOpen] = useState(false)

  return (
    <>
      <section id="blog" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-transparent p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-violet-400 font-semibold mb-2">Latest Article</div>
              <h3 className="text-2xl font-bold text-white">How I Built Snapgram — Real-time Social App in 30 Days</h3>
              <p className="text-zinc-400 mt-2 max-w-xl">Socket.io scaling, Cloudinary optimization, and why I chose MongoDB aggregations over populate.</p>
            </div>
            <button onClick={()=>setOpen(true)} className="px-5 py-2.5 rounded-xl bg-violet-500 hover:bg-violet-600 text-white font-medium whitespace-nowrap">Read Article →</button>
          </div>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl overflow-y-auto" onClick={()=>setOpen(false)}>
          <article className="max-w-3xl mx-auto my-12 bg-[#0b0e14] border border-white/10 rounded-2xl p-8 md:p-12" onClick={e=>e.stopPropagation()}>
            <button onClick={()=>setOpen(false)} className="float-right -mt-2 -mr-2 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10">✕</button>

            <h1 className="text-3xl font-bold mb-4">How I Built Snapgram</h1>
            <div className="text-sm text-zinc-500 mb-8">By Suraj Choudhary • 5 min read</div>

            <div className="prose prose-invert max-w-none space-y-4 text-zinc-300 leading-relaxed">
              <p><strong>Day 1-5:</strong> Started with MERN boilerplate. Biggest mistake — used Mongoose populate for feed, it was 800ms. Switched to aggregation pipeline, dropped to 180ms.</p>
              <p><strong>Real-time:</strong> Socket.io rooms per post for likes/comments. Used Redis adapter later for scaling.</p>
              <p><strong>Images:</strong> Cloudinary with eager transformations (300x300, 800x800). Saved 60% bandwidth.</p>
              <p><strong>Learning:</strong> Never trust client timestamps — always use server time for feed ordering. Built custom infinite scroll with IntersectionObserver.</p>
              <p className="mt-6 p-4 rounded-xl bg-violet-500/10 border border-violet-500/20">Code is open source on GitHub. Star the repo if this helped!</p>
            </div>
          </article>
        </div>
      )}
    </>
  )
}