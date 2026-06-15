import styles from './About.module.css'

const quickLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdel-rahman-taeha-9113b320b/' },
  { label: 'GitHub', href: 'https://github.com/abdeltaehass' },
  { label: 'Email', href: 'mailto:abdeltaehass@gmail.com' },
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
              Abdelrahman Taeha
            </h1>
            <p className={styles.subheading}>
              Software Engineer · AI Research Student
            </p>
            <p className={styles.bio}>
              I work at the intersection of software engineering and machine learning,
              building <em>autonomous AI agents</em>, ML evaluation infrastructure, and
              reliable data pipelines. I'm a Software Engineer at DHCS and an AI Research
              Student contributing to medical-AI benchmarks like <em>MedInsider</em> and{' '}
              <em>SpineFairBench</em>.
            </p>
            <p className={styles.openTo}>
              📢 Open to full-time SWE &amp; ML Engineering roles — available starting May 2026.
            </p>
            <div className={styles.quickLinks}>
              {quickLinks.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={styles.quickLink}
                >
                  {l.label} ↗
                </a>
              ))}
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.quickLink}
              >
                Resume ↗
              </a>
            </div>
          </div>
          <div className={styles.photoWrap}>
            <img
              src={`${import.meta.env.BASE_URL}HeadShot.PNG`}
              alt="Headshot of Abdelrahman Taeha, Software Engineer and AI Research Student"
              className={styles.photo}
              width="260"
              height="325"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
