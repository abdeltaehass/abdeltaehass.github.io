import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Research from './components/Research'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

const TABS = ['about', 'research', 'projects', 'experience', 'contact']

function getTabFromHash() {
  const hash = window.location.hash.replace('#', '')
  return TABS.includes(hash) ? hash : 'about'
}

function App() {
  const [activeTab, setActiveTab] = useState(getTabFromHash)

  useEffect(() => {
    const onHashChange = () => {
      setActiveTab(getTabFromHash())
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar activeTab={activeTab} />
      <main id="main-content" className="tab-main" key={activeTab}>
        {activeTab === 'about' && <About />}
        {activeTab === 'research' && <Research />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'experience' && <Experience />}
        {activeTab === 'contact' && <Contact />}
      </main>
    </>
  )
}

export default App
