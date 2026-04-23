import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Experience.module.css'

const jobs = [
  {
    role: 'Founder',
    company: 'Al-Manar (Islamic Companion App) · Self-employed',
    period: 'Mar 2026 — Present',
    location: 'Remote',
    points: [
      'Launched end-to-end creation of Al-Manar, a production iOS app built with Flutter & Dart — owning the full software lifecycle from UI/UX to automated App Store distribution via Xcode Cloud CI/CD.',
      'Built a custom background audio framework extending BaseAudioHandler for seamless Quran recitation with system-level media controls, persistent playback state, and optimized memory handling.',
      'Integrated Google Places API with the Haversine formula to deliver high-precision, GPS-based prayer times and real-time masjid discovery — supporting a global user base in 9 languages.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'DHCS · Full-time',
    period: 'May 2025 — Present',
    points: [
      'Automated compliance & operations reporting with Python ETL pipelines, bridging enterprise systems (SAP-adjacent) and downstream analytics — improved data accuracy by 40%.',
      'Engineered scalable backend data-processing services for enterprise risk-assessment workflows, standardizing seven cross-system checks and boosting validation reliability by 20%.',
      'Built internal dashboards and reporting applications that cut incident resolution time by 30%.',
      'Implemented log-processing pipelines and monitoring integrations that improved real-time alerting accuracy by 20%.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'District Hut (Startup) · Full-time',
    period: 'May 2024 — Jul 2025',
    location: 'On-site',
    points: [
      'Developed data pipelines for enterprise-scale datasets, processing 3 TB of weekly traffic on AWS with repeatable cleaning for AI/ML training.',
      'Optimized feature-prep and model integration, improving inference reliability by 18% using PyTorch.',
      'Revamped data integrity checks with SQL — prevented five critical production issues and automated 75% of data validation tasks with 100% test coverage.',
      'Collaborated with a team of 3 engineers to automate model retraining, reducing collective manual effort by 6 hours/week.',
    ],
  },
  {
    role: 'Student Assistant — IT Help Desk',
    company: 'CalHFA · Full-time',
    period: 'Jun 2022 — May 2024',
    location: 'Sacramento, CA · Hybrid',
    points: [
      'Resolved 50+ tickets/week across a 200-user environment with 95% first-contact resolution (hardware, OS, apps, access, connectivity).',
      'Managed vendor and stakeholder relationships for hardware and OS issues in a high-volume state IT environment.',
    ],
  },
  {
    role: 'Real Estate Agent',
    company: 'Lyon Real Estate · Part-time',
    period: 'Aug 2021 — Mar 2024',
    location: 'Sacramento County, CA · Hybrid',
    points: [
      'Licensed real estate agent supporting residential sales and client acquisition.',
      'Conducted client outreach, property showings, and transaction coordination.',
      'Built strong communication, organization, and client-facing skills.',
    ],
  },
  {
    role: 'Lifeguard / Senior Guard / Pool Manager',
    company: 'Southgate · Part-time',
    period: 'May 2019 — Aug 2022',
    location: 'Sacramento, CA · On-site',
    points: [
      'Managed daily pool operations, staff scheduling, and safety compliance.',
      'Supervised and trained lifeguards; ensured adherence to operational and safety standards.',
      'Developed leadership and responsibility in a fast-paced environment.',
    ],
  },
  {
    role: 'Soccer Referee',
    company: 'Davis · Part-time',
    period: 'Jul 2016 — Jul 2019',
    points: [
      'Officiated youth soccer matches, enforcing rules and maintaining fair play.',
      'Built early professionalism, conflict resolution, and decision-making skills.',
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
      </div>
    </section>
  )
}
