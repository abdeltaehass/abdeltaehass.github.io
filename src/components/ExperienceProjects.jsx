import { useState } from 'react'
import Experience from './Experience'
import Projects from './Projects'
import styles from './ExperienceProjects.module.css'

export default function ExperienceProjects() {
  const [subtab, setSubtab] = useState('experience')

  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <p className="section-label">Experience / Projects</p>
        <h2 className="section-title">What I've worked on.</h2>

        <div className={styles.subtabs} role="tablist">
          <button
            role="tab"
            aria-selected={subtab === 'experience'}
            onClick={() => setSubtab('experience')}
            className={`${styles.subtab} ${subtab === 'experience' ? styles.subtabActive : ''}`}
          >
            Experience
          </button>
          <button
            role="tab"
            aria-selected={subtab === 'projects'}
            onClick={() => setSubtab('projects')}
            className={`${styles.subtab} ${subtab === 'projects' ? styles.subtabActive : ''}`}
          >
            Projects
          </button>
        </div>

        <div className={styles.content} role="tabpanel">
          {subtab === 'experience' && <Experience embedded />}
          {subtab === 'projects' && <Projects embedded />}
        </div>
      </div>
    </section>
  )
}
