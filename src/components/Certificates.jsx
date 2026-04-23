import React, { useState } from 'react'
import { Award, ExternalLink, Calendar, X } from 'lucide-react'

const certificates = [
  {
    id: 1,
    title: 'Fundamentals Of Artificial Intelligence',
    issuer: 'NPTEL. GOV of India • IIT (Indian Institute of Technology) Guwahati',
    date: 'Issued Oct 2023',
    image: 'https://media.licdn.com/dms/image/v2/D562DAQFuRltb5opkww/profile-treasury-image-shrink_480_480/profile-treasury-image-shrink_480_480/0/1703694158587?e=1777543200&v=beta&t=pupu7M4l60SLCerMx09kWyNqVG5hqZq6i20nAjNvajA', 
    credentialId: 'ABC123XYZ',
    link: 'https://www.linkedin.com/in/surajchoudhary01/overlay/Certifications/739752045/treasury/?profileId=ACoAACUr2fIB8KAJtj4gjaB8s7JvxIttb0tuJyg',
    skills: ['Machine Learning Algorithms', 'Neural Networks', 'AI Ethics', 'Natural Language Processing', 'Computer Vision']
  },
  {
    id: 2,
    title: 'IBM - Web Development Basics',
    issuer: 'freeCodeCamp',
    date: '',
    image: 'https://media.licdn.com/dms/image/v2/D562DAQHmh1E_U87hUg/profile-treasury-document-cover-images_1280/profile-treasury-document-cover-images_1280/0/1714637983755?e=1777543200&v=beta&t=Tg1tGoJNQYiYqiJh5AULjJHAFr_4LILzLOzL9bZ1398', // direct link
    credentialId: 'Credential ID MDL-261',
    link: 'https://www.linkedin.com/in/surajchoudhary01/overlay/Certifications/946141131/treasury/?profileId=ACoAACUr2fIB8KAJtj4gjaB8s7JvxIttb0tuJyg',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Git & GitHub', 'DOM', 'APIs','Meta Data', 'SEO Basics', 'Web Accessibility', 'Performance Optimization']
  },
  {
    id: 3,
    title: 'Backend with NodeJS',
    issuer: 'Simplilearn',
    date: 'Issued Dec 2023',
    image: 'https://media.licdn.com/dms/image/v2/D562DAQHS52CA60m01A/profile-treasury-document-images_800/profile-treasury-document-images_800/1/1703652820448?e=1778112000&v=beta&t=L7bMTcUp7A_JW_OLQp6VpkuXlzZ8zm158Opz9NfyLOc', // direct link
    credentialId: '4719184',
    link: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzQ2IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDcxOTE4NF8xNzAyNjMxODA2LnBuZyIsInVzZXJuYW1lIjoiU1VSQUogQ0hPVURIQVJZIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4236%2FGetting-started-with-NodeJS%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1503031477525073547&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVDw0MDnIyKCkPckuyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAKqUhm1BAAAA',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Authentication & Authorization', 'Testing with Jest', 'Deployment on Heroku']
  },
  {
    id: 4,
    title: 'Frontend Development with ReactJS & Redux',
    issuer: 'KG CODING',
    date: 'Nov 2023',
    image: 'https://media.licdn.com/dms/image/v2/D562DAQGDeaxAGqXbjw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1702780158757?e=1777546800&v=beta&t=nsLMLazk2Iapoq10a4-93KccEfYhuR6DTGRyf_tdX3k',
    credentialId: '1702779791442',
    link: 'https://www.knowledgegate.ai/verify-certificate?serialno=09YE6DZG?utm_source=completecoding',
    skills: ['React','Redux' ,'Hooks', 'Performance', 'Testing', 'Context API', 'React Router', 'State Management', 'Component Architecture']
  },
  {
    id: 5,
    title: 'JavaScript Development',
    issuer: 'KG CODING',
    date: 'Dec 2023',
    image: 'https://media.licdn.com/dms/image/v2/D562DAQHIQJDvN1U-tQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1703508318804?e=1777546800&v=beta&t=vbWLK-vNYyw9xSf67OUOlKzQWCTfnWenpZacEA9-_aU',
    credentialId: '1702779791442',
    link: 'https://www.linkedin.com/in/surajchoudhary01/overlay/Certifications/554048887/treasury/?profileId=ACoAACUr2fIB8KAJtj4gjaB8s7JvxIttb0tuJyg',
    skills: ['JavaScript Fundamentals', 'ES6+', 'Asynchronous Programming', 'DOM Manipulation', 'Event Handling', 'Error Handling', 'Testing with Jest', 'Best Practices']
  },
  {
    id: 6,
    title: 'Software Testing and Quality Assurance',
    issuer: 'Great Learning',
    date: 'Feb - 2024',
    image: 'https://media.licdn.com/dms/image/v2/D562DAQGYP39LfdKYqQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1703734552641?e=1777546800&v=beta&t=BD2meOpp00HGBHK3FpsqjSvfLQLIYC_MeAJCEC_ukfw',
    credentialId: 'JRU-23-288',
    link: 'https://www.linkedin.com/in/surajchoudhary01/overlay/Certifications/779953033/treasury/?profileId=ACoAACUr2fIB8KAJtj4gjaB8s7JvxIttb0tuJyg',
    skills: ['Testing Methodologies', 'Test Case Design', 'Automation Testing with Selenium', 'Performance Testing with JMeter', 'Bug Tracking with Jira', 'Continuous Integration with Jenkins']
  },{
    id: 7,
    title: 'IT Inovation - Next Generation AI Technologies',
    issuer: 'JRU - Jharkhand Rai University',
    date: 'Dec 2023',
    image: 'https://media.licdn.com/dms/image/v2/D562DAQFv8hUzbMV1xQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1708441745098?e=1777546800&v=beta&t=60bItCvjK40SwenYu5t9SimT2XJpUZKYySK4XJ6cu0A',
    credentialId: 'JRU-23-288',
    link: 'https://www.linkedin.com/in/surajchoudhary01/overlay/Certifications/1192369472/treasury/?profileId=ACoAACUr2fIB8KAJtj4gjaB8s7JvxIttb0tuJyg',
    skills: ['JavaScript Fundamentals', 'ES6+', 'Asynchronous Programming', 'DOM Manipulation', 'Event Handling', 'Error Handling', 'Testing with Jest', 'Best Practices']
  },
  {
    id: 8,
    title: 'Python Programming',
    issuer: 'Simplilearn',
    date: 'Oct 2023',
    image: 'https://media.licdn.com/dms/image/v2/D562DAQGQVBj9aPjZ1g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1703653792269?e=1777546800&v=beta&t=HSpys5qeAMgjW2Ihwub6M3ovw8LF8fFGmrooGNL7388',
    credentialId: 'JRU-23-288',
    link: 'https://www.linkedin.com/in/surajchoudhary01/overlay/Certifications/1192369472/treasury/?profileId=ACoAACUr2fIB8KAJtj4gjaB8s7JvxIttb0tuJyg',
    skills: ['Python Basics', 'Data Structures', 'Object-Oriented Programming', 'Web Development with Django', 'Data Analysis with Pandas', 'Automation with Python']
  },
{
    id: 8,
    title: 'AI & DevOps Engineering ',
    issuer: 'BSDM - Orbiqe Technologies Pvt. Ltd.',
    date: 'APR 2026',
    image: '',
    credentialId: '',
    link: '',
    skills: ['Python Basics', 'Data Structures', 'Object-Oriented Programming', 'Web Development with Django', 'Data Analysis with Pandas', 'Automation with Python']
  }

]

export default function Certificates() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificates" className="mx-auto max-w-6xl px-4 py-20">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text- font-extrabold tracking-tight text-white">Certifications</h2>
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
              />
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 shrink-0 mt-0.5">
                <Award size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold leading-snug group-hover:text-violet-400 transition">{cert.title}</h3>
                <p className="text-sm text-zinc-400 mt-1">{cert.issuer}</p>
                <div className="flex items-center gap-2 mt-2 text- text-zinc-500">
                  <Calendar size={12} />
                  {cert.date} • ID: {cert.credentialId}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {cert.skills.map(s => (
                <span key={s} className="px-2 py-1 text- rounded-md bg-white/5 text-zinc-400 border border-white/5">{s}</span>
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
            <img src={selected.image} alt={selected.title} className="w-full rounded-xl border border-white/10 mb-6" />
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