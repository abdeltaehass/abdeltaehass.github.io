import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Research from './components/Research'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

const TABS = ['about', 'work']

// Map legacy hashes to the new 2-tab structure
function getTabFromHash() {
  const hash = window.location.hash.replace('#', '')
  if (hash === 'research' || hash === 'projects' || hash === 'work') return 'work'
  if (hash === 'about' || hash === 'experience' || hash === 'contact' || hash === 'home') return 'about'
  return 'about'
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
        {activeTab === 'about' && (
          <>
            <About />
            <Experience />
            <Contact />
          </>
        )}
        {activeTab === 'work' && (
          <>
            <Research />
            <Projects />
          </>
        )}
      </main>
    </>
  )
}

export default App
