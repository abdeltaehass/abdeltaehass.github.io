import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Skills.module.css'

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
        <p className="section-label">Skills</p>
        <h2 className="section-title">Technical stack.</h2>
        <p className="section-subtitle">
          Tools and technologies I work with across engineering, ML, and research.
        </p>
        <div className={styles.grid}>
          {skillGroups.map(group => (
            <div key={group.category} className={styles.group}>
              <h3 className={styles.category}>{group.category}</h3>
              <div className={styles.tags}>
                {group.skills.map(skill => (
                  <span key={skill} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
