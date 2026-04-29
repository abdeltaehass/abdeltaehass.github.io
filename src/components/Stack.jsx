import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Stack.module.css'

const cards = [
  {
    num: '01',
    label: 'AI / BACKEND',
    title: 'Autonomous Agents',
    description: 'Building production AI agents and ETL pipelines that bridge enterprise systems and downstream analytics — with self-correction logic and reliable observability.',
    tags: ['Python', 'LangChain', 'PyTorch', 'CrewAI'],
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 9l3 3-3 3M13 15h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '02',
    label: 'CLOUD / DEVOPS',
    title: 'Scalable Infrastructure',
    description: 'AWS, GCP, Docker, and CI/CD pipelines for processing 3 TB of weekly traffic with schema consistency and repeatable cleaning for AI/ML training.',
    tags: ['AWS', 'GCP', 'Docker', 'CI/CD'],
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 18a5 5 0 110-10 7 7 0 0113.95 1.5A4 4 0 0119 18H7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '03',
    label: 'FULL-STACK / MOBILE',
    title: 'Modern Interfaces',
    description: 'React, Flutter, and Dart for production iOS apps and web platforms — owning the full lifecycle from UI/UX design to App Store distribution via Xcode Cloud.',
    tags: ['React', 'Flutter', 'Dart', 'Swift'],
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M11 18h2" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Stack() {
  const ref = useScrollReveal()
  return (
    <section className={styles.section}>
      <div className={`container reveal`} ref={ref}>
        <h2 className={styles.title}>
          The Stack
          <span className={styles.underline} />
        </h2>
        <div className={styles.grid}>
          {cards.map(c => (
            <div key={c.num} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.num}>{c.num}</span>
                <span className={styles.slash}>/</span>
                <span className={styles.label}>{c.label}</span>
                <span className={styles.iconBox}>{c.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.description}</p>
              <div className={styles.tags}>
                {c.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
