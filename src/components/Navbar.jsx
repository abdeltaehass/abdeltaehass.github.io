import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? Math.min(1, window.scrollY / docHeight) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 720) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const ids = links.map(l => l.href.replace('#', ''))
    const els = ids.map(id => document.getElementById(id)).filter(Boolean)
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive('#' + visible[0].target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.progress} style={{ transform: `scaleX(${progress})` }} />
      <div className={styles.inner}>
        <a href="#home" className={styles.logo}>
          <span className={styles.logoBracket}>[</span>
          <span className={styles.logoText}>ABDEL_R</span>
          <span className={styles.logoBracket}>]</span>
        </a>

        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`${styles.link} ${active === l.href ? styles.linkActive : ''}`}
              >
                {l.label}
              </a>
            </li>
          ))}
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
        {links.map(l => (
          <a key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
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
