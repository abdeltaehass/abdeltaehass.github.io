import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <p className="section-label">About</p>
        <h1 className="section-title">Hi, I'm Abdelrahman.</h1>

        <p className={styles.bio}>
          I'm a Software Engineer at <strong>DHCS</strong> and an{' '}
          <strong>AI Research Engineer</strong>. I work across software
          engineering, machine learning, and AI systems — building backend
          services, data pipelines, autonomous agents, and production mobile
          apps. On the side, I co-author research like <em>SpineFairBench</em>{' '}
          and <em>MedInsider</em>.
        </p>

        <p className={styles.bio}>
          I care about building reliable, well-designed software that holds
          up in production — and writing code I'd be happy to maintain a year
          later.
        </p>
      </div>
    </section>
  )
}
