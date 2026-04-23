import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Experience.module.css'

const jobs = [
  {
    role: 'Software Engineer',
    company: 'DHCS',
    period: 'May 2025 — Present',
    points: [
      'Automated compliance & operations reporting with autonomous AI agents and Python ETL pipelines — improved data accuracy by 40%.',
      'Engineered backend risk-assessment workflows with self-correction logic, boosting validation reliability by 20%.',
      'Built internal dashboards that cut incident resolution time by 30%.',
    ],
  },
  {
    role: 'Software Engineering Intern — Machine Learning',
    company: 'District Hut',
    period: 'May 2024 — Jul 2025',
    points: [
      'Built multi-agent data pipelines processing 3 TB of weekly traffic on AWS.',
      'Improved inference reliability by 18% using PyTorch and real-time monitoring.',
      'Automated 75% of data validation tasks with 100% test coverage.',
    ],
  },
  {
    role: 'Student Assistant — IT Help Desk',
    company: 'CalHFA',
    period: 'Jan 2022 — May 2024',
    points: [
      'Resolved 50+ tickets per week across a 200-user environment with 95% first-contact resolution.',
    ],
  },
]

export default function Experience() {
  const ref = useScrollReveal()
  return (
    <section id="experience">
      <div className={`container reveal`} ref={ref}>
        <p className="section-label">// where I've worked</p>
        <h2 className="section-title">Experience</h2>
        <div className={styles.timeline}>
          {jobs.map((j, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.dot} />
              <div className={styles.card}>
                <div className={styles.header}>
                  <h3 className={styles.role}>{j.role}</h3>
                  <span className={styles.period}>{j.period}</span>
                </div>
                <p className={styles.company}>@ {j.company}</p>
                <ul className={styles.points}>
                  {j.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
