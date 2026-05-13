import useScrollReveal from '../hooks/useScrollReveal'
import styles from './About.module.css'

const capabilities = [
  {
    title: 'Machine Learning',
    description: 'Building autonomous AI agents and ML pipelines for production. Focused on PyTorch, LangChain, and RAG systems with self-correction logic.',
    tags: ['Neural Networks', 'Agent Systems', 'RAG'],
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Cloud & Infra',
    description: 'Resilient, distributed infrastructure on AWS and GCP. Skilled at large-scale data pipelines, CI/CD automation, and cloud-native deployments.',
    tags: ['AWS / GCP', 'CI/CD', 'ETL Pipelines'],
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 18a5 5 0 110-10 7 7 0 0113.95 1.5A4 4 0 0119 18H7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Full-Stack & Mobile',
    description: 'Production iOS apps with Flutter & Dart, modern web platforms with React, and end-to-end ownership from UI/UX to App Store distribution.',
    tags: ['Flutter', 'React', 'Xcode Cloud'],
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
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
        <p className="section-label">About</p>
        <h2 className="section-title">A little about me.</h2>

        <div className={styles.layout}>
          <div className={styles.left}>
            <p className={styles.bio}>
              I'm a Software Engineer at DHCS and an AI Research Student contributing
              to benchmarks like MedInsider and SpineFairBench. My work focuses on
              autonomous AI agents, ML evaluation infrastructure, and reliable data
              pipelines — making intelligent systems easier to audit and trust.
            </p>
            <p className={styles.bio}>
              I hold a BS in Computer Science from Sacramento State and I'm pursuing an
              MS in Computer Science (Machine Learning concentration) at Georgia Tech.
              Outside of work, I also ship iOS apps and study for CCNA, CompTIA Security+,
              Network+, and A+.
            </p>
            <div className={styles.metaRow}>
              <div className={styles.meta}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" strokeLinecap="round" />
                </svg>
                Based in Sacramento, CA
              </div>
              <div className={styles.meta}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" strokeLinecap="round" />
                </svg>
                Open to opportunities
              </div>
            </div>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeBtn}
            >
              Download Resume →
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
          <p className={styles.capLabel}>Core Capabilities</p>
          <div className={styles.capGrid}>
            {capabilities.map(c => (
              <div key={c.title} className={styles.capCard}>
                <div className={styles.capIcon}>{c.icon}</div>
                <h3 className={styles.capTitle}>{c.title}</h3>
                <p className={styles.capDesc}>{c.description}</p>
                <div className={styles.capTags}>
                  {c.tags.map(t => (
                    <span key={t} className={styles.capTag}>{t}</span>
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
