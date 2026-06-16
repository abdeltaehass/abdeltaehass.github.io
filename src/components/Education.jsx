import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Education.module.css'

const education = [
  {
    school: 'Georgia Institute of Technology',
    degree: 'M.S. Computer Science — Artificial Intelligence Concentration',
    period: 'Aug 2026 — May 2028 (Expected)',
  },
  {
    school: 'California State University, Sacramento',
    degree: 'B.S. Computer Science',
    period: 'Aug 2023 — Dec 2025',
  },
]

export default function Education() {
  const ref = useScrollReveal()
  return (
    <section id="education">
      <div className={`container reveal`} ref={ref}>
        <p className="section-label">Education</p>
        <h2 className="section-title">Education.</h2>

        <ul className={styles.list}>
          {education.map(e => (
            <li key={e.school} className={styles.item}>
              <div className={styles.left}>
                <div className={styles.school}>{e.school}</div>
                <div className={styles.degree}>{e.degree}</div>
              </div>
              <div className={styles.period}>{e.period}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
