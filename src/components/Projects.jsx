import React, { useRef, useState } from 'react'

const projects = [
  {
    icon:'📸',
    title:'Snapgram',
    subtitle:'SOCIAL MEDIA PLATFORM',
    image:'/projects/snapgram.png',
    desc:'Instagram clone with real-time feed, stories, likes, comments & follow system.',
    fullDesc:'Built a full-stack social platform with JWT auth, image uploads via Cloudinary, real-time notifications using Socket.io, and infinite scroll feed.',
    features:['JWT Authentication & protected routes','Image upload with Cloudinary + compression','Real-time likes/comments via Socket.io','Follow/unfollow + personalized feed','Infinite scroll with pagination'],
    learned:['Socket.io scaling','MongoDB aggregation pipelines','Image optimization'],
    tech:['React','Node.js','MongoDB','Socket.io','Cloudinary','Tailwind'],
    github:'https://github.com/iamsurajx/gafo_social_media_app_new',
    live:'https://snapgramio.netlify.app/',
    gradient:'from-violet-600 to-fuchsia-600'
  },
  {
    icon:'🧠',
    title:'Disease Predictor',
    subtitle:'AI/ML MULTIPLE DISEASE PREDICTION',
    image:'/projects/disease-predictor.png',
    desc:'ML system that predicts Diabetes, Heart Disease & Parkinsons with 92%+ accuracy.',
    fullDesc:'Trained 3 separate models using Scikit-learn on medical datasets. Built Flask API for predictions and React frontend for user input.',
    features:['3 ML models (Random Forest, SVM)','92%+ accuracy on test data','Flask REST API','SHAP explanations for doctors','Dockerized deployment'],
    learned:['Model deployment','Feature engineering','Flask + React integration'],
    tech:['Python','Scikit-learn','Flask','React','Pandas','Docker'],
    github:'https://github.com/iamsurajx/multiple-disease-prediction',
    live:'https://multi-disease-prediction.netlify.app/',
    gradient:'from-cyan-500 to-blue-600'
  },
  {
    icon:'💼',
    title:'WebNitmit',
    subtitle:'TECH AGENCY WEBSITE',
    image:'/projects/webnitmit.png',
    desc:'Complete agency site with services, portfolio, blog & working contact email service.',
    fullDesc:'Designed and developed full agency website for client. Integrated Nodemailer + Gmail SMTP for lead capture.',
    features:['Next.js 14 App Router','Working contact form with Nodemailer','Admin panel for projects','95 Lighthouse SEO score','Blog with MDX'],
    learned:['Email deliverability','Next.js SEO','Client communication'],
    tech:['Next.js','Tailwind','Nodemailer','MongoDB','Vercel'],
    github:'https://github.com/iamsurajx/webnitmit',
    live:'https://webnitmit.vercel.app/',
    gradient:'from-emerald-500 to-teal-600'
  },
  {
    icon:'🛒',
    title:'PackTrack',
    subtitle:'AFFILIATE MARKETING STORE',
    image:'/projects/packtrack.png',
    desc:'Customizable affiliate store – add products from Amazon/Flipkart, earn commission.',
    fullDesc:'Built a no-code affiliate store builder. Users can customize theme, add products via URL scraper, and track clicks.',
    features:['URL scraper for Amazon/Flipkart','Custom themes & branding','Click tracking dashboard','Razorpay subscription','Redis caching'],
    learned:['Web scraping ethics','Payment integration','Analytics design'],
    tech:['React','Express','MongoDB','Redis','Razorpay','Puppeteer'],
    github:'https://github.com/arshitjain12/packtrack',
    live:'#',
    gradient:'from-orange-500 to-pink-600'
  }
]

function TiltCard({ children, onClick }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})
  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width - 0.5) * 10
    const y = -((e.clientY - r.top) / r.height - 0.5) * 10
    setStyle({ transform: `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)` })
  }
  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={()=>setStyle({})} style={style} onClick={onClick} className="h-full cursor-pointer">
      {children}
    </div>
  )
}

export default function Projects(){
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text- font-extrabold">My <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Projects</span></h2>
        <div className="h-px flex-1 bg-gradient-to-r from-violet-500/40 to-transparent"/>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p=>(
          <TiltCard key={p.title} onClick={()=>setSelected(p)}>
            <div className="group relative rounded-2xl bg-[#0e1116] border border-white/10 overflow-hidden hover:border-violet-500/30 transition h-full">
              <div className={`absolute top-0 inset-x-0 h- bg-gradient-to-r ${p.gradient}`}/>
              <div className="aspect-video overflow-hidden bg-black/50">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" onError={(e)=>e.target.src='https://placehold.co/800x450/0e1116/8b5cf6?text='+p.title}/>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{p.icon}</span>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                </div>
                <p className="text- text-violet-400 uppercase mt-1 font-semibold">{p.subtitle}</p>
                <p className="mt-3 text-sm text-zinc-400 line-clamp-2">{p.desc}</p>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* REAL CASE STUDY MODAL */}
      {selected && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto" onClick={()=>setSelected(null)}>
          <div className="relative bg-[#0b0e14] border border-white/15 rounded-2xl max-w-4xl w-full my-8" onClick={e=>e.stopPropagation()}>
            <button onClick={()=>setSelected(null)} className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur hover:bg-white/10 flex items-center justify-center">✕</button>

            <div className="aspect-video w-full overflow-hidden rounded-t-2xl bg-black">
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" onError={(e)=>e.target.src='https://placehold.co/1200x675/0e1116/8b5cf6?text='+selected.title}/>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold flex items-center gap-3">{selected.icon} {selected.title}</h3>
              <p className="text-violet-400 mt-1">{selected.subtitle}</p>
              <p className="mt-4 text-zinc-300 leading-relaxed">{selected.fullDesc}</p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selected.features.map(f=> <li key={f} className="flex gap-2 text-sm text-zinc-300"><span className="text-violet-400 mt-0.5">▹</span>{f}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">What I Learned</h4>
                  <ul className="space-y-2">
                    {selected.learned.map(l=> <li key={l} className="flex gap-2 text-sm text-zinc-300"><span className="text-cyan-400 mt-0.5">▹</span>{l}</li>)}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {selected.tech.map(t=> <span key={t} className="px-3 py-1.5 text-xs rounded-lg bg-white/5 border border-white/10">{t}</span>)}
              </div>

              <div className="flex gap-3 mt-8 pt-6 border-t border-white/10">
                <a href={selected.github} target="_blank" className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm">GitHub Code</a>
                <a href={selected.live} target="_blank" className={`px-5 py-2.5 rounded-xl text-sm font-medium ${selected.live==='#'?'bg-zinc-800 text-zinc-500 cursor-not-allowed':'bg-violet-500 hover:bg-violet-600 text-white'}`}>Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}