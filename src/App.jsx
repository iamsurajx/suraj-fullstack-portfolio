import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GitHubStats from './components/GitHubStats'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'

export default function App() {
  return (
    <div className="min-h-screen grid-bg">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <GitHubStats />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}