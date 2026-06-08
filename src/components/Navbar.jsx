import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ activeTab }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 720) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#about" className={styles.logo}>
          <span className={styles.logoMark}>AR</span>
          <span className={styles.logoName}>Abdelrahman Taeha</span>
        </a>

        <ul className={styles.links}>
          {links.map(l => {
            const tabKey = l.href.replace('#', '')
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`${styles.link} ${activeTab === tabKey ? styles.linkActive : ''}`}
                >
                  {l.label}
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeBtn}
        >
          Resume
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${open ? styles.bar1Open : ''}`} />
          <span className={`${styles.bar} ${open ? styles.bar2Open : ''}`} />
          <span className={`${styles.bar} ${open ? styles.bar3Open : ''}`} />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}>
        {links.map(l => {
          const tabKey = l.href.replace('#', '')
          return (
            <a
              key={l.href}
              href={l.href}
              className={`${styles.mobileLink} ${activeTab === tabKey ? styles.mobileLinkActive : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          )
        })}
        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileLink}
          onClick={() => setOpen(false)}
        >
          Resume ↗
        </a>
      </div>
    </nav>
  )
}
