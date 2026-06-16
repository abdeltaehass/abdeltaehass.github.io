import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <p className="section-label">About</p>
        <h1 className="section-title">Hi, I'm Abdelrahman.</h1>

        <p className={styles.bio}>
          I'm a Software Engineer at <strong>DHCS</strong> and an{' '}
          <strong>AI Research Engineer</strong>. By day, I build data
          pipelines, observability systems, and AI agents that run in
          production. On the side, I co-author medical-AI research like{' '}
          <em>SpineFairBench</em> and <em>MedInsider</em>.
        </p>

        <p className={styles.bio}>
          My focus: making AI systems reliable, fair, and safe —
          especially in healthcare.
        </p>
      </div>
    </section>
  )
}
