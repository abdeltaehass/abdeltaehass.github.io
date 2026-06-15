import useScrollReveal from '../hooks/useScrollReveal'
import useCountUp from '../hooks/useCountUp'
import styles from './Experience.module.css'

const jobs = [
  {
    role: 'Founder',
    company: 'Al-Manar — Islamic Companion App',
    period: 'Mar 2026 — Present',
    location: 'Self-employed · Remote',
    points: [
      'Launched end-to-end creation of Al-Manar, a production iOS app built with Flutter & Dart — owning the full software lifecycle from UI/UX to automated App Store distribution via Xcode Cloud CI/CD.',
      'Built a custom background audio framework extending BaseAudioHandler for seamless Quran recitation with system-level media controls, persistent playback state, and optimized memory handling.',
      'Integrated Google Places API with the Haversine formula to deliver GPS-based prayer times and real-time masjid discovery — supporting a global user base in 9 languages.',
    ],
  },
  {
    role: 'AI Research Student',
    company: 'Independent Research',
    period: 'Aug 2025 — Present',
    location: 'Remote',
    points: [
      'Evaluated medical LLM agent integrity across 840 paired-twin scenarios for the MedInsider FHIR-style benchmark under institutional pressure.',
      'Built evaluation and logging infrastructure — including deterministic action tracking and auditing workflows — for 9 distinct medical vision-language models across full-pipeline and baseline sub-panels.',
      'Trained a neutral baseline model and developed data collection pipelines for 2 major open-access clinical repositories used to analyze demographic bias in spinal radiology VLM outputs.',
      'Co-authored SpineFairBench, a counterfactual benchmark evaluating 7,996 paired spinal radiographs to audit demographic sensitivity in VLM-based report generation.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'DHCS',
    period: 'May 2025 — Present',
    location: 'Sacramento, CA',
    points: [
      'Automated monitoring and reporting pipelines across enterprise systems, reducing manual observability overhead by 40% and cutting mean time to detection (MTTD) for production incidents in half.',
      'Engineered backend integrations and validation workflows that surfaced system behavior anomalies early, accelerating root-cause analysis by 35% and streamlining stakeholder communication.',
      'Established internal dashboards and reporting applications to visualize agent-driven operational metrics — reducing incident resolution time by 30%.',
      'Implemented log-processing pipelines and monitoring integrations that improved real-time alerting accuracy by 20%.',
    ],
  },
  {
    role: 'Software Engineering Intern — Machine Learning',
    company: 'District Hut',
    period: 'May 2024 — Jul 2025',
    location: 'Sacramento, CA',
    points: [
      'Developed large-scale data pipelines processing 3 TB/week across distributed cloud infrastructure, improving throughput and system reliability in a high-volume production environment.',
      'Optimized data workflows and query performance, identifying and resolving bottlenecks that cut average pipeline latency and improved system stability under load.',
      'Revamped data integrity checks with SQL — prevented five critical production issues and automated 75% of data validation tasks with 100% test coverage.',
      'Collaborated with a team of 3 to automate model retraining agents, reducing manual effort by 6 hours/week via autonomous performance metrics.',
    ],
  },
  {
    role: 'Student Assistant — IT Help Desk',
    company: 'CalHFA',
    period: 'Jun 2022 — May 2024',
    location: 'Sacramento, CA · Hybrid',
    points: [
      'Resolved 50+ tickets/week across a 200-user environment with 95% first-contact resolution (hardware, OS, apps, access, connectivity).',
      'Managed vendor and stakeholder relationships for hardware and OS issues in a high-volume state IT environment.',
    ],
  },
  {
    role: 'Real Estate Agent',
    company: 'Lyon Real Estate',
    period: 'Aug 2021 — Mar 2024',
    location: 'Sacramento County, CA · Part-time',
    points: [
      'Licensed real estate agent supporting residential sales and client acquisition.',
      'Conducted client outreach, property showings, and transaction coordination.',
      'Built strong communication, organization, and client-facing skills.',
    ],
  },
  {
    role: 'Lifeguard / Senior Guard / Pool Manager',
    company: 'Southgate',
    period: 'May 2019 — Aug 2022',
    location: 'Sacramento, CA · Part-time',
    points: [
      'Managed daily pool operations, staff scheduling, and safety compliance.',
      'Supervised and trained lifeguards; ensured adherence to operational and safety standards.',
      'Developed leadership and responsibility in a fast-paced environment.',
    ],
  },
  {
    role: 'Soccer Referee',
    company: 'Davis',
    period: 'Jul 2016 — Jul 2019',
    location: 'Part-time',
    points: [
      'Officiated youth soccer matches, enforcing rules and maintaining fair play.',
      'Built early professionalism, conflict resolution, and decision-making skills.',
    ],
  },
]

const stats = [
  { target: 89, suffix: '%', label: 'NIDS accuracy', sublabel: 'NSL-KDD · 125K+ samples' },
  { target: 3, suffix: ' TB', label: 'Weekly data', sublabel: 'Distributed cloud pipelines' },
  { target: 75, suffix: '%', label: 'Automation', sublabel: 'Data validation @ 100% test coverage' },
  { target: 50, suffix: '%', label: 'MTTD reduction', sublabel: 'Mean time to detection @ DHCS' },
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
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I've worked.</h2>
        <p className="section-subtitle">
          A progression from production engineering to AI research — focused on
          autonomous agents, ML pipelines, and shipping reliable software.
        </p>

        <div className={styles.cards}>
          {jobs.map((j, i) => (
            <div key={i} className={styles.card}>
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
          ))}
        </div>

        <div className={styles.statsGrid}>
          {stats.map(s => <StatItem key={s.label} stat={s} />)}
        </div>
      </div>
    </section>
  )
}
