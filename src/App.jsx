import { useEffect, useState } from 'react'
import About from './components/About/About'
import Certification from './components/Certification/Certification'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <div className="app-shell">
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((mode) => !mode)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certification />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
