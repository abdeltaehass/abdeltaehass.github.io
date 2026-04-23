import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Stats.module.css'

const stats = [
  { value: '89%', label: 'NIDS accuracy on NSL-KDD (125K+ samples)' },
  { value: '3 TB', label: 'Weekly enterprise data processed' },
  { value: '40%', label: 'Data accuracy improvement via AI agents' },
  { value: '50+', label: 'Help desk tickets resolved per week' },
]

export default function Stats() {
  const ref = useScrollReveal()
  return (
    <section className={styles.section}>
      <div className={`container reveal ${styles.wrap}`} ref={ref}>
        <div className={styles.grid}>
          {stats.map(s => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.value}>{s.value}</div>
              <div className={styles.label}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
