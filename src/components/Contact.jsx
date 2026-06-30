import { useForm, ValidationError } from '@formspree/react'
import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Contact.module.css'

const socials = [
  {
    label: 'EMAIL',
    handle: 'apply@abdelrahmantaeha.com',
    href: 'mailto:apply@abdelrahmantaeha.com',
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
  const [state, handleSubmit] = useForm('mqevdawp')

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

          {state.succeeded ? (
            <div className={styles.form}>
              <p className={styles.successCard}>
                <strong>Thanks for reaching out!</strong> I got your message and
                will get back to you soon.
              </p>
            </div>
          ) : (
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
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className={styles.error} />
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
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.error} />
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
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className={styles.error} />
              </div>
              <button type="submit" className={styles.btn} disabled={state.submitting}>
                {state.submitting ? 'Sending…' : 'Send message →'}
              </button>
              {state.errors && Object.keys(state.errors).length > 0 && (
                <p className={styles.error}>Something went wrong. Please try again.</p>
              )}
            </form>
          )}
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
          <a href="mailto:apply@abdelrahmantaeha.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
