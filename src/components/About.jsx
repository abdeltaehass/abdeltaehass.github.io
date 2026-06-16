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
          reliable data pipelines. By day, I'm a Software Engineer at{' '}
          <strong>DHCS</strong>; on the side, I'm an AI Research Engineer
          co-authoring medical-AI benchmarks like <em>SpineFairBench</em> (submitted
          NeurIPS 2026) and <em>MedInsider</em>.
        </p>

        <p className={styles.bio}>
          My research focuses on counterfactual evaluation of vision-language models
          in healthcare — auditing whether AI systems behave consistently across
          demographic edits and institutional pressure. On the engineering side, I
          build observability, ETL, and agent infrastructure that hold up at
          production scale.
        </p>
      </div>
    </section>
  )
}
