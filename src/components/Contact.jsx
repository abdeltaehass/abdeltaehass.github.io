import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Contact.module.css'

const socials = [
  {
    label: 'EMAIL',
    handle: 'abdeltaehass@gmail.com',
    href: 'mailto:abdeltaehass@gmail.com',
  },
  {
    label: 'GITHUB',
    handle: 'github.com/abdeltaehass',
    href: 'https://github.com/abdeltaehass',
  },
  {
    label: 'LINKEDIN',
    handle: 'linkedin.com/in/abdel-rahman-taeha',
    href: 'https://www.linkedin.com/in/abdel-rahman-taeha-9113b320b/',
  },
]

export default function Contact() {
  const ref = useScrollReveal()
  return (
    <>
      <section id="contact" className={styles.section}>
        <div className="container reveal" ref={ref}>
          <p className="section-label">INITIATE CONTACT</p>
          <h2 className="section-title">
            Let's build something <span className="accent-text">together</span>.
          </h2>
          <p className="section-subtitle">
            Open to new roles, collaborations, and conversations about
            AI agents, ML pipelines, or shipping iOS apps. My inbox is open.
          </p>
          <div className={styles.links}>
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={styles.socialCard}
              >
                <span className={styles.socialLabel}>{s.label}</span>
                <span className={styles.socialHandle}>{s.handle} ↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <span className={styles.footerLogo}>[ABDEL_R] · v2.0</span>
          <span className={styles.footerCenter}>© 2026 Abdel Rahman Taeha. All rights reserved.</span>
          <div className={styles.footerLinks}>
            <a href="https://github.com/abdeltaehass" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/abdel-rahman-taeha-9113b320b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:abdeltaehass@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </>
  )
}
