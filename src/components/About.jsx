import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <p className="section-label">About</p>
        <h1 className="section-title">Hi, I'm Abdelrahman.</h1>

        <p className={styles.bio}>
          By day, I'm a Software Engineer at <strong>DHCS</strong> —
          automating observability pipelines and cutting incident detection
          time in half. By night, I'm an <strong>AI Research Engineer</strong>{' '}
          co-authoring benchmarks that ask whether medical AI gives the same
          advice to identical patients of different ages or sexes.{' '}
          <em>(Spoiler: it doesn't.)</em>
        </p>

        <p className={styles.bio}>
          I work at the intersection of software engineering and machine
          learning. I care about systems that are fast in production and
          rigorous when it matters — and code I'd happily maintain a year
          later.
        </p>
      </div>
    </section>
  )
}
