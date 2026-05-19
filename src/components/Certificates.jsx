import React, { useState } from 'react'
import { Award, ExternalLink, Calendar, X } from 'lucide-react'

const certificates = [
  {
    id: 1,
    title: 'Fundamentals Of Artificial Intelligence',
    issuer: 'NPTEL. GOV of India • IIT (Indian Institute of Technology) Guwahati',
    date: 'Issued Oct 2023',
    // Removed the project folder and 'public' from the path
    image: '/images/NPTEL_AI_1703694158587.jpg', 
    credentialId: 'ABC123XYZ',
    link: 'https://www.linkedin.com/in/surajchoudhary01/overlay/Certifications/739752045/treasury/?profileId=ACoAACUr2fIB8KAJtj4gjaB8s7JvxIttb0tuJyg',
    skills: ['Machine Learning Algorithms', 'Neural Networks', 'AI Ethics', 'Natural Language Processing', 'Computer Vision']
  },
  {
    id: 2,
    title: 'IBM - Web Development Basics',
    issuer: 'freeCodeCamp',
    date: '',
    image: '/images/IBM_1714637983755.png',
    credentialId: 'Credential ID MDL-261',
    link: 'https://www.linkedin.com/in/surajchoudhary01/overlay/Certifications/946141131/treasury/?profileId=ACoAACUr2fIB8KAJtj4gjaB8s7JvxIttb0tuJyg',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Git & GitHub', 'DOM', 'APIs','Meta Data', 'SEO Basics', 'Web Accessibility', 'Performance Optimization']
  },
  {
    id: 3,
    title: 'Backend with NodeJS',
    issuer: 'Simplilearn',
    date: 'Issued Dec 2023',
    image: '/images/Nodejs_1703652820783.jpg',
    credentialId: '4719184',
    link: 'https://www.simplilearn.com/skillup-certificate-landing?token=...', // Truncated for brevity if needed
    skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Authentication & Authorization', 'Testing with Jest', 'Deployment on Heroku']
  },
  {
    id: 4,
    title: 'Frontend Development with ReactJS & Redux',
    issuer: 'KG CODING',
    date: 'Nov 2023',
    image: '/images/React_1702780158757.jpg',
    credentialId: '1702779791442',
    link: 'https://www.knowledgegate.ai/verify-certificate?serialno=09YE6DZG?utm_source=completecoding',
    skills: ['React','Redux' ,'Hooks', 'Performance', 'Testing', 'Context API', 'React Router', 'State Management', 'Component Architecture']
  },
  {
    id: 5,
    title: 'JavaScript Development',
    issuer: 'KG CODING',
    date: 'Dec 2023',
    image: '/images/Javascript_1703508318804.jpg',
    credentialId: '1702779791442',
    link: 'https://www.linkedin.com/in/surajchoudhary01/overlay/Certifications/554048887/treasury/?profileId=ACoAACUr2fIB8KAJtj4gjaB8s7JvxIttb0tuJyg',
    skills: ['JavaScript Fundamentals', 'ES6+', 'Asynchronous Programming', 'DOM Manipulation', 'Event Handling', 'Error Handling', 'Testing with Jest', 'Best Practices']
  },
  {
    id: 6,
    title: 'Software Testing and Quality Assurance',
    issuer: 'Great Learning',
    date: 'Feb - 2024',
    image: '/images/Software_Test_1703734552641.jpg',
    credentialId: 'JRU-23-288',
    link: 'https://www.linkedin.com/in/surajchoudhary01/overlay/Certifications/779953033/treasury/?profileId=ACoAACUr2fIB8KAJtj4gjaB8s7JvxIttb0tuJyg',
    skills: ['Testing Methodologies', 'Test Case Design', 'Automation Testing with Selenium', 'Performance Testing with JMeter', 'Bug Tracking with Jira', 'Continuous Integration with Jenkins']
  },
  {
    id: 7,
    title: 'IT Inovation - Next Generation AI Technologies',
    issuer: 'JRU - Jharkhand Rai University',
    date: 'Dec 2023',
    image: '/images/IT_CONCLAVE_1708441745098.jpg',
    credentialId: 'JRU-23-288',
    link: 'https://www.linkedin.com/in/surajchoudhary01/overlay/Certifications/1192369472/treasury/?profileId=ACoAACUr2fIB8KAJtj4gjaB8s7JvxIttb0tuJyg',
    skills: ['JavaScript Fundamentals', 'ES6+', 'Asynchronous Programming', 'DOM Manipulation', 'Event Handling', 'Error Handling', 'Testing with Jest', 'Best Practices']
  },
  {
    id: 8,
    title: 'Python Programming',
    issuer: 'Simplilearn',
    date: 'Oct 2023',
    image: '/images/Python_1703653792269.jpg',
    credentialId: 'JRU-23-288',
    link: 'https://www.linkedin.com/in/surajchoudhary01/overlay/Certifications/1192369472/treasury/?profileId=ACoAACUr2fIB8KAJtj4gjaB8s7JvxIttb0tuJyg',
    skills: ['Python Basics', 'Data Structures', 'Object-Oriented Programming', 'Web Development with Django', 'Data Analysis with Pandas', 'Automation with Python']
  },
  {
    id: 9, // FIXED: Changed duplicate ID from 8 to 9
    title: 'AI & DevOps Engineering ',
    issuer: 'BSDM - Orbiqe Technologies Pvt. Ltd.',
    date: 'APR 2026',
    image: '/images/AI_DevOps_Engineer_Certificate_Suraj_Choudhary.png',
    credentialId: '',
    link: 'https://www.linkedin.com/in/surajchoudhary01/overlay/Position/2872458754/treasury/?profileId=ACoAACUr2fIB8KAJtj4gjaB8s7JvxIttb0tuJyg',
    skills: ['Python Basics', 'Data Structures', 'Object-Oriented Programming', 'Web Development with Django', 'Data Analysis with Pandas', 'Automation with Python']
  }
]

export default function Certificates() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificates" className="mx-auto max-w-6xl px-4 py-20">
      <div className="flex items-center gap-4 mb-12">
        {/* FIXED: Removed incomplete 'text-' and added 'text-3xl' */}
        <h2 className="text-3xl font-extrabold tracking-tight text-white">Certifications</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-violet-500/40 to-transparent"></div>
      </div>

      <p className="text-zinc-400 max-w-2xl -mt-6 mb-10">
        Verified credentials showcasing my continuous learning in web development and cloud technologies.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelected(cert)}
            className="group relative rounded-2xl bg-[#13151d] border border-white/5 hover:border-violet-500/30 p-5 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(139,92,246,0.15)]"
          >
            <div className="aspect-[16/10] rounded-xl bg-[#1a1d27] overflow-hidden mb-4 border border-white/5">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                // Added a fallback in case image still fails to load
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x250?text=Certificate' }} 
              />
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 shrink-0 mt-0.5">
                <Award size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold leading-snug group-hover:text-violet-400 transition">{cert.title}</h3>
                <p className="text-sm text-zinc-400 mt-1">{cert.issuer}</p>
                {/* FIXED: Removed incomplete 'text-' and added 'text-xs' */}
                <div className="flex items-center gap-2 mt-2 text-xs text-zinc-500">
                  <Calendar size={12} />
                  {cert.date} {cert.credentialId && `• ID: ${cert.credentialId}`}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {cert.skills.map(s => (
                // FIXED: Removed incomplete 'text-' and added 'text-xs'
                <span key={s} className="px-2 py-1 text-xs rounded-md bg-white/5 text-zinc-400 border border-white/5">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="relative max-w-3xl w-full bg-[#0e1116] rounded-2xl border border-white/10 p-6" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400">
              <X size={18} />
            </button>
            <img 
              src={selected.image} 
              alt={selected.title} 
              className="w-full rounded-xl border border-white/10 mb-6"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/800x500?text=Certificate' }}
            />
            <h3 className="text-2xl font-bold text-white">{selected.title}</h3>
            <p className="text-zinc-400 mt-1">{selected.issuer} • {selected.date}</p>
            <div className="flex gap-3 mt-6">
              <a href={selected.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-500 hover:bg-violet-600 text-white font-medium transition">
                Verify Credential <ExternalLink size={16} />
              </a>
              <button onClick={() => setSelected(null)} className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300">Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}