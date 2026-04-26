import useScrollReveal from '../hooks/useScrollReveal'
import useCountUp from '../hooks/useCountUp'
import styles from './Stats.module.css'

const stats = [
  { target: 89, prefix: '', suffix: '%', label: 'NIDS accuracy on NSL-KDD (125K+ samples)' },
  { target: 3, prefix: '', suffix: ' TB', label: 'Weekly enterprise data processed' },
  { target: 40, prefix: '', suffix: '%', label: 'Data accuracy improvement via AI agents' },
  { target: 50, prefix: '', suffix: '+', label: 'Help desk tickets resolved per week' },
]

function StatItem({ stat }) {
  const [value, ref] = useCountUp(stat.target)
  return (
    <div className={styles.stat} ref={ref}>
      <div className={styles.value}>
        {stat.prefix}{value}{stat.suffix}
      </div>
      <div className={styles.label}>{stat.label}</div>
    </div>
  )
}

export default function Stats() {
  const ref = useScrollReveal()
  return (
    <section className={styles.section}>
      <div className={`container reveal ${styles.wrap}`} ref={ref}>
        <div className={styles.grid}>
          {stats.map(s => <StatItem key={s.label} stat={s} />)}
        </div>
      </div>
    </section>
  )
}
