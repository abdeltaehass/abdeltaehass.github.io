import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <p className="section-label">About</p>
        <h1 className="section-title">Hi, I'm Abdelrahman.</h1>

        <p className={styles.bio}>
          I work at the intersection of software engineering and machine learning,
          building <em>autonomous AI agents</em>, ML evaluation infrastructure, and
          reliable data pipelines. I'm a Software Engineer at <strong>DHCS</strong> and
          an AI Research Student contributing to medical-AI benchmarks like{' '}
          <em>MedInsider</em> and <em>SpineFairBench</em>.
        </p>

        <div className={styles.openTo}>
          <span className={styles.openToIcon}>📢</span>
          <span>
            <strong>Open to full-time SWE &amp; ML Engineering roles</strong> — available
            starting May 2026.
          </span>
        </div>
      </div>
    </section>
  )
}
