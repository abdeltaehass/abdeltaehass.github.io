import useScrollReveal from '../hooks/useScrollReveal'
import styles from './About.module.css'

const capabilities = [
  {
    title: 'Machine Learning',
    description: 'Building autonomous AI agents and ML pipelines for production. Focused on PyTorch, LangChain, and RAG systems with self-correction logic.',
    tags: ['NEURAL NETWORKS', 'AGENT SYSTEMS', 'RAG'],
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Cloud Systems',
    description: 'Resilient, distributed infrastructure on AWS and GCP. Skilled at orchestrating large-scale data pipelines, CI/CD automation, and cloud-native deployments.',
    tags: ['AWS / GCP', 'CI/CD', 'ETL PIPELINES'],
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 18a5 5 0 110-10 7 7 0 0113.95 1.5A4 4 0 0119 18H7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Full-Stack & Mobile',
    description: 'Production iOS apps with Flutter & Dart, modern web platforms with React, and end-to-end ownership from UI/UX design to App Store distribution.',
    tags: ['FLUTTER', 'REACT', 'XCODE CLOUD'],
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M11 18h2" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function About() {
  const ref = useScrollReveal()
  return (
    <section id="about" className={styles.about}>
      <div className={`container reveal`} ref={ref}>
        <div className={styles.layout}>
          <div className={styles.left}>
            <div className={styles.statusPill}>
              <span className={styles.dot} />
              SYSTEM ACTIVE · OPEN TO OPPORTUNITIES
            </div>
            <h2 className={styles.heading}>
              ENGINEERING<br />
              <span className={styles.accentHeading}>INTELLIGENT SYSTEMS.</span>
            </h2>
            <p className={styles.bio}>
              Software Engineer at DHCS by day, founder of Al-Manar by passion.
              I build autonomous AI agents and ETL pipelines that bridge enterprise
              systems with downstream analytics. CS grad from Sacramento State,
              MS candidate at Georgia Tech (Machine Learning concentration).
              I care about clean architecture, reliable data, and shipping things
              that work.
            </p>
            <div className={styles.metaRow}>
              <div className={styles.meta}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" strokeLinecap="round" />
                </svg>
                EST. 2022
              </div>
              <div className={styles.meta}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="10" r="3" /><path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" strokeLinejoin="round" />
                </svg>
                SACRAMENTO, CA
              </div>
            </div>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeBtn}
            >
              Download Full Resume ↗
            </a>
          </div>
          <div className={styles.photoWrap}>
            <div className={styles.photoFrame}>
              <img
                src={`${import.meta.env.BASE_URL}HeadShot.PNG`}
                alt="Abdel Rahman Taeha"
                className={styles.photo}
              />
            </div>
          </div>
        </div>

        <div className={styles.capSection}>
          <p className={styles.capLabel}>CORE CAPABILITIES</p>
          <div className={styles.capGrid}>
            {capabilities.map(c => (
              <div key={c.title} className={styles.capCard}>
                <div className={styles.capIcon}>{c.icon}</div>
                <h3 className={styles.capTitle}>{c.title}</h3>
                <p className={styles.capDesc}>{c.description}</p>
                <div className={styles.capTags}>
                  {c.tags.map(t => (
                    <span key={t} className={styles.capTag}>
                      <span className={styles.capTagDot}>•</span> {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
