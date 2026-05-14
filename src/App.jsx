import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stack from './components/Stack'
import Research from './components/Research'
import Projects from './components/Projects'
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <Research />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
    </>
  )
}

export default App
