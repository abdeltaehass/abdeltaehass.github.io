import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.statusPill}>
          <span className={styles.dot} />
          Available for new opportunities
        </div>
        <h1 className={styles.heading}>
          Building <em className={styles.italic}>intelligent</em> systems<br />
          and shipping production software.
        </h1>
        <p className={styles.sub}>
          I'm Abdel Rahman — a Software Engineer at DHCS and AI Research Student
          working on agent evaluation benchmarks (MedInsider, SpineFairBench).
          CS grad from Sacramento State, MS candidate at Georgia Tech (Machine Learning).
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primary}>View my work</a>
          <a href="#contact" className={styles.secondary}>Get in touch →</a>
        </div>
      </div>
    </section>
  )
}
