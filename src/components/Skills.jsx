import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Skills.module.css'

const focus = [
  'Autonomous AI agents and LLM evaluation infrastructure',
  'Counterfactual benchmarks for medical vision-language models',
  'Large-scale data and observability pipelines (3 TB/week)',
  'Production iOS apps (Flutter & Dart, Xcode Cloud CI/CD)',
]

const education = [
  {
    school: 'Georgia Institute of Technology',
    degree: 'M.S. in Computer Science — Artificial Intelligence',
    period: 'Aug 2026 — May 2028 (Expected)',
  },
  {
    school: 'Sacramento State University',
    degree: 'B.S. in Computer Science',
    period: 'Aug 2023 — Dec 2025',
  },
]

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'Java', 'C/C++', 'SQL', 'JavaScript', 'Swift', 'MATLAB', 'R', 'COBOL'],
  },
  {
    category: 'Frameworks & Platforms',
    skills: ['React.js', 'Node.js', 'Spring Boot', 'Flutter', 'Flask', 'AWS', 'GCP', 'Docker', 'Git'],
  },
  {
    category: 'Data & ML',
    skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'pandas', 'NumPy', 'SAP Data Integration', 'Model Evaluation'],
  },
  {
    category: 'AI & Agents',
    skills: ['Autonomous Agents', 'LLM Orchestration', 'LangChain', 'CrewAI', 'RAG', 'Prompt Engineering', 'Claude API'],
  },
  {
    category: 'DevOps & Security',
    skills: ['GitHub Actions', 'CI/CD', 'SIEM', 'Xcode Cloud', 'Monitoring Pipelines', 'Redis'],
  },
]

export default function Skills() {
  const ref = useScrollReveal()
  return (
    <section id="skills">
      <div className="container reveal" ref={ref}>
        <p className="section-label">Profile</p>
        <h2 className="section-title">At a glance.</h2>

        {/* Focus */}
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Focus</h3>
          <ul className={styles.focusList}>
            {focus.map(f => <li key={f}>{f}</li>)}
          </ul>
        </div>

        {/* Education */}
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Education</h3>
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

        {/* Skills */}
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Skills</h3>
          <div className={styles.grid}>
            {skillGroups.map(group => (
              <div key={group.category} className={styles.group}>
                <h4 className={styles.category}>{group.category}</h4>
                <div className={styles.tags}>
                  {group.skills.map(skill => (
                    <span key={skill} className={styles.tag}>{skill}</span>
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
