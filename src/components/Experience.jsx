import useScrollReveal from '../hooks/useScrollReveal'
import useCountUp from '../hooks/useCountUp'
import styles from './Experience.module.css'

const jobs = [
  {
    role: 'Founder',
    company: 'Al-Manar — Islamic Companion App',
    period: '2026 — PRESENT',
    location: 'Self-employed · Remote',
    points: [
      'Launched end-to-end creation of Al-Manar, a production iOS app built with Flutter & Dart — owning the full software lifecycle from UI/UX to automated App Store distribution via Xcode Cloud CI/CD.',
      'Built a custom background audio framework extending BaseAudioHandler for seamless Quran recitation with system-level media controls and optimized memory handling.',
      'Integrated Google Places API with the Haversine formula to deliver GPS-based prayer times and real-time masjid discovery — supporting a global user base in 9 languages.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'DHCS',
    period: '2025 — PRESENT',
    location: 'Full-time',
    points: [
      'Automated compliance & operations reporting with Python ETL pipelines — improved data accuracy by 40%.',
      'Engineered backend risk-assessment workflows with self-correction logic, boosting validation reliability by 20%.',
      'Built internal dashboards that cut incident resolution time by 30%.',
      'Implemented log-processing pipelines that improved real-time alerting accuracy by 20%.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'District Hut',
    period: '2024 — 2025',
    location: 'Startup · On-site',
    points: [
      'Developed data pipelines for enterprise-scale datasets, processing 3 TB of weekly traffic on AWS.',
      'Improved inference reliability by 18% using PyTorch and real-time monitoring.',
      'Automated 75% of data validation tasks with SQL and 100% test coverage.',
      'Collaborated with a team of 3 to automate model retraining, saving 6 hours/week.',
    ],
  },
  {
    role: 'Student Assistant — IT Help Desk',
    company: 'CalHFA',
    period: '2022 — 2024',
    location: 'Sacramento, CA · Hybrid',
    points: [
      'Resolved 50+ tickets/week across a 200-user environment with 95% first-contact resolution.',
      'Managed vendor and stakeholder relationships in a high-volume state IT environment.',
    ],
  },
  {
    role: 'Real Estate Agent',
    company: 'Lyon Real Estate',
    period: '2021 — 2024',
    location: 'Sacramento County · Part-time',
    points: [
      'Licensed real estate agent supporting residential sales and client acquisition.',
      'Built strong communication, organization, and client-facing skills.',
    ],
  },
  {
    role: 'Lifeguard / Pool Manager',
    company: 'Southgate',
    period: '2019 — 2022',
    location: 'Sacramento, CA · Part-time',
    points: [
      'Managed daily pool operations, staff scheduling, and safety compliance.',
      'Supervised and trained lifeguards; led safety standards adherence.',
    ],
  },
  {
    role: 'Soccer Referee',
    company: 'Davis',
    period: '2016 — 2019',
    location: 'Part-time',
    points: [
      'Officiated youth soccer matches, enforcing rules and maintaining fair play.',
      'Built early professionalism, conflict resolution, and decision-making skills.',
    ],
  },
]

const stats = [
  { target: 89, suffix: '%', label: 'NIDS accuracy', sublabel: 'NSL-KDD · 125K+ samples' },
  { target: 3, suffix: ' TB', label: 'Weekly data', sublabel: 'Enterprise pipelines on AWS' },
  { target: 40, suffix: '%', label: 'Accuracy lift', sublabel: 'Via autonomous AI agents' },
  { target: 50, suffix: '+', label: 'Tickets / week', sublabel: '95% first-contact resolution' },
]

function StatItem({ stat }) {
  const [value, ref] = useCountUp(stat.target)
  return (
    <div className={styles.statBox} ref={ref}>
      <div className={styles.statLabel}>{stat.label.toUpperCase()}</div>
      <div className={styles.statValue}>{value}{stat.suffix}</div>
      <div className={styles.statSub}>{stat.sublabel}</div>
    </div>
  )
}

export default function Experience() {
  const ref = useScrollReveal()
  return (
    <section id="experience">
      <div className={`container reveal`} ref={ref}>
        <p className="section-label">PROFESSIONAL JOURNEY</p>
        <h2 className="section-title">A track record of building.</h2>
        <p className="section-subtitle">
          From academic foundations to production AI systems and shipping iOS apps —
          a progression focused on intelligent, scalable software.
        </p>

        <div className={styles.timeline}>
          {jobs.map((j, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.dot} />
              <div className={styles.card}>
                <div className={styles.header}>
                  <h3 className={styles.role}>{j.role}</h3>
                  <span className={styles.period}>{j.period}</span>
                </div>
                <p className={styles.company}>{j.company}</p>
                {j.location && <p className={styles.location}>{j.location}</p>}
                <ul className={styles.points}>
                  {j.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.statsGrid}>
          {stats.map(s => <StatItem key={s.label} stat={s} />)}
        </div>
      </div>
    </section>
  )
}
