import { useState } from 'react'
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

const education = [
  {
    school: 'Georgia Institute of Technology',
    degree: 'M.S. Computer Science — Artificial Intelligence Concentration',
    period: 'Aug 2026 — May 2028 (Expected)',
  },
  {
    school: 'California State University, Sacramento',
    degree: 'B.S. Computer Science',
    period: 'Aug 2023 — Dec 2025',
  },
]

export default function Contact() {
  const ref = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:abdeltaehass@gmail.com?subject=${subject}&body=${body}`
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="container reveal" ref={ref}>
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's talk.</h2>
        <p className="section-subtitle">
          Open to new roles and collaborations — feel free to reach out about
          AI agents, ML pipelines, or anything in between.
        </p>

        <div className={styles.layout}>
          <div className={styles.socials}>
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

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className={styles.input}
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className={styles.input}
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="What's on your mind?"
                className={styles.textarea}
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className={styles.btn}>
              Send message →
            </button>
            {status === 'sent' && (
              <p className={styles.success}>Opening your mail client…</p>
            )}
          </form>
        </div>

        {/* Education */}
        <div className={styles.education}>
          <h3 className={styles.eduHeading}>Education</h3>
          <ul className={styles.eduList}>
            {education.map(e => (
              <li key={e.school} className={styles.eduItem}>
                <div className={styles.eduSchool}>{e.school}</div>
                <div className={styles.eduDegree}>{e.degree}</div>
                <div className={styles.eduPeriod}>{e.period}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function ContactFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <span className={styles.footerLeft}>© {new Date().getFullYear()} Abdelrahman Taeha</span>
        <div className={styles.footerLinks}>
          <a href="https://github.com/abdeltaehass" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/abdel-rahman-taeha-9113b320b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:abdeltaehass@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
