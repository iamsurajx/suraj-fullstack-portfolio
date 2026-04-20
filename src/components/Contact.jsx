import React, { useState } from 'react'
import { Mail, Phone, Github, MapPin } from 'lucide-react'

const EMAIL = 'arshitjain7@gmail.com'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New message from ${form.name}`,
          _captcha: 'false',
          _template: 'table'
        })
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setStatus('Message sent successfully!')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('Failed to send. Try again.')
      }
    } catch {
      setStatus('Error. Check internet.')
    }
  }

  const contacts = [
    { icon: <Mail size={18} />, label: 'EMAIL', value: 'surajofficemail@gmail.com' },
    { icon: <Phone size={18} />, label: 'PHONE', value: '+91-8093729517' },
    { icon: <Github size={18} />, label: 'GITHUB', value: 'github.com/iasurajx' },
    { icon: <MapPin size={18} />, label: 'LOCATION', value: 'Delhi, India' },
  ]

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
      {/* Heading */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text- font-extrabold tracking-tight text-white">
          Get In <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-violet-500/40 to-transparent"></div>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* LEFT */}
        <div className="lg:col-span-3">
          <p className="text-zinc-300 text- leading-relaxed max-w-xl">
            Let's Build Something Together I'm a MERN Stack Developer passionate about building scalable and user-friendly web applications. If you have a project, idea, or job opportunity feel free to reach out. I love to collaborate and create something amazing.
          </p>

          <div className="mt-10 space-y-4 max-w-lg">
            {contacts.map((c) => (
              <div key={c.label} className="flex items-center gap-4 p-4 rounded-xl bg-[#13151d] border border-white/5 hover:border-white/10 transition">
                <div className="w-9 h-9 rounded-lg bg-[#1a1d27] flex items-center justify-center text-zinc-400">
                  {c.icon}
                </div>
                <div>
                  <div className="text- font-semibold tracking-wider text-violet-400 uppercase">{c.label}</div>
                  <div className="text-zinc-200 text-sm mt-0.5">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - Form */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-[#13151d] border border-white/5 p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <h3 className="text-white font-semibold text-lg mb-6">Send a Message</h3>

            <form onSubmit={submit} className="space-y-5">
              <div>
                <label className="block text- uppercase tracking-wider text-zinc-500 mb-1.5">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#1b1f2a] border border-white/10 text-zinc-200 placeholder-zinc-500 outline-none focus:border-violet-500/50 transition"
                />
              </div>

              <div>
                <label className="block text- uppercase tracking-wider text-zinc-500 mb-1.5">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#1b1f2a] border border-white/10 text-zinc-200 placeholder-zinc-500 outline-none focus:border-violet-500/50 transition"
                />
              </div>

              <div>
                <label className="block text- uppercase tracking-wider text-zinc-500 mb-1.5">Message</label>
                <textarea
                  required
                  rows="4"
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  placeholder="Your message..."
                  className="w-full px-4 py-2.5 rounded-lg bg-[#1b1f2a] border border-white/10 text-zinc-200 placeholder-zinc-500 outline-none focus:border-violet-500/50 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-violet-500 hover:bg-violet-600 text-white font-medium transition shadow-[0_4px_20px_rgba(139,92,246,0.25)]"
              >
                Send Message
                <span className="text-lg">✉️</span>
              </button>

              {status && (
                <p className="text-center text-xs text-zinc-400 mt-2">{status}</p>
              )}
            </form>

            {/* Calendly Button - ADDED */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-zinc-400 mb-3 text-center">Recruiters prefer a quick call</p>
              <a
                href="https://calendly.com/surajchoudhary/15min"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1b1f2a] border border-violet-500/30 hover:border-violet-500 hover:bg-violet-500/10 text-violet-300 transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Book 15-min call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


// import React, { useState } from 'react'
// import { Mail, Phone, Github, MapPin } from 'lucide-react'

// const EMAIL = 'arshitjain7@gmail.com'

// export default function Contact(){
//   const [form, setForm] = useState({ name: '', email: '', message: '' })
//   const [status, setStatus] = useState('')

//   const submit = async (e) => {
//     e.preventDefault()
//     setStatus('Sending...')
//     try {
//       const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
//         body: JSON.stringify({
//           name: form.name,
//           email: form.email,
//           message: form.message,
//           _subject: `New message from ${form.name}`,
//           _captcha: 'false',
//           _template: 'table'
//         })
//       })
//       const data = await res.json()
//       if (data.success === 'true' || data.success === true) {
//         setStatus('Message sent successfully!')
//         setForm({ name: '', email: '', message: '' })
//       } else {
//         setStatus('Failed to send. Try again.')
//       }
//     } catch {
//       setStatus('Error. Check internet.')
//     }
//   }

//   const contacts = [
//     { icon: <Mail size={18} />, label: 'EMAIL', value: 'surajofficemail@gmail.com' },
//     { icon: <Phone size={18} />, label: 'PHONE', value: '+91-8093729517' },
//     { icon: <Github size={18} />, label: 'GITHUB', value: 'github.com/iasurajx' },
//     { icon: <MapPin size={18} />, label: 'LOCATION', value: 'Delhi, India, ' },
//   ]

//   return (
//     <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
//       {/* Heading */}
//       <div className="flex items-center gap-4 mb-12">
//         <h2 className="text- font-extrabold tracking-tight text-white">
//           Get In <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
//         </h2>
//         <div className="h-px flex-1 bg-gradient-to-r from-violet-500/40 to-transparent"></div>
//       </div>

//       <div className="grid lg:grid-cols-5 gap-12 items-start">
//         {/* LEFT */}
//         <div className="lg:col-span-3">
//           <p className="text-zinc-300 text- leading-relaxed max-w-xl">
//             Let's Build Something Together I'm a MERN Stack Developer passionate about building scalable and user-friendly web applications. If you have a project, idea, or job opportunity feel free to reach out. I love to collaborate and create something amazing.
//           </p>

//           <div className="mt-10 space-y-4 max-w-lg">
//             {contacts.map((c) => (
//               <div key={c.label} className="flex items-center gap-4 p-4 rounded-xl bg-[#13151d] border border-white/5 hover:border-white/10 transition">
//                 <div className="w-9 h-9 rounded-lg bg-[#1a1d27] flex items-center justify-center text-zinc-400">
//                   {c.icon}
//                 </div>
//                 <div>
//                   <div className="text- font-semibold tracking-wider text-violet-400 uppercase">{c.label}</div>
//                   <div className="text-zinc-200 text- mt-0.5">{c.value}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT - Form */}
//         <div className="lg:col-span-2">
//           <div className="rounded-2xl bg-[#13151d] border border-white/5 p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
//             <h3 className="text-white font-semibold text-lg mb-6">Send a Message</h3>

//             <form onSubmit={submit} className="space-y-5">
//               <div>
//                 <label className="block text- uppercase tracking-wider text-zinc-500 mb-1.5">Name</label>
//                 <input
//                   required
//                   value={form.name}
//                   onChange={e => setForm({...form, name: e.target.value})}
//                   placeholder="Your Name"
//                   className="w-full px-4 py-2.5 rounded-lg bg-[#1b1f2a] border border-white/10 text-zinc-200 placeholder-zinc-500 outline-none focus:border-violet-500/50 transition"
//                 />
//               </div>

//               <div>
//                 <label className="block text- uppercase tracking-wider text-zinc-500 mb-1.5">Email</label>
//                 <input
//                   required
//                   type="email"
//                   value={form.email}
//                   onChange={e => setForm({...form, email: e.target.value})}
//                   placeholder="your@email.com"
//                   className="w-full px-4 py-2.5 rounded-lg bg-[#1b1f2a] border border-white/10 text-zinc-200 placeholder-zinc-500 outline-none focus:border-violet-500/50 transition"
//                 />
//               </div>

//               <div>
//                 <label className="block text- uppercase tracking-wider text-zinc-500 mb-1.5">Message</label>
//                 <textarea
//                   required
//                   rows="4"
//                   value={form.message}
//                   onChange={e => setForm({...form, message: e.target.value})}
//                   placeholder="Your message..."
//                   className="w-full px-4 py-2.5 rounded-lg bg-[#1b1f2a] border border-white/10 text-zinc-200 placeholder-zinc-500 outline-none focus:border-violet-500/50 transition resize-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-violet-500 hover:bg-violet-600 text-white font-medium transition shadow-[0_4px_20px_rgba(139,92,246,0.25)]"
//               >
//                 Send Message
//                 <span className="text-lg">✉️</span>
//               </button>

//               {status && (
//                 <p className="text-center text-xs text-zinc-400 mt-2">{status}</p>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }