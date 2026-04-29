import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <div className={styles.statusPill}>
            <span className={styles.dot} />
            STATUS: AVAILABLE FOR OPPORTUNITIES
          </div>
          <h1 className={styles.heading}>
            Hi, I'm <span className={styles.accent}>Abdel Rahman</span>.
            <br />
            I build intelligent systems.
          </h1>
          <p className={styles.sub}>
            Software Engineer specializing in autonomous AI agents,
            ML pipelines, and high-performance backend systems. CS grad
            from Sacramento State, MS candidate at Georgia Tech.
          </p>
          <div className={styles.actions}>
            <a href="#projects" className={styles.primary}>View Projects</a>
            <a href="#contact" className={styles.secondary}>Initiate Contact</a>
          </div>
        </div>
        <div className={styles.terminal}>
          <div className={styles.termBar}>
            <span className={styles.termDots}>
              <span /><span /><span />
            </span>
            <span className={styles.termTitle}>terminal — bash — 80x24</span>
          </div>
          <pre className={styles.code}>
<span className={styles.prompt}>→</span> <span className={styles.dim}>~</span> whoami
{'\n'}<span className={styles.user}>abdel_rahman</span> <span className={styles.dim}>//</span> <span className={styles.role}>software_engineer</span>
{'\n\n'}<span className={styles.prompt}>→</span> <span className={styles.dim}>~</span> ls skills/core
{'\n'}<span className={styles.bullet}>•</span> <span className={styles.skill}>autonomous_agents</span>     <span className={styles.bullet}>•</span> <span className={styles.skill}>ml_pipelines</span>
{'\n'}<span className={styles.bullet}>•</span> <span className={styles.skill}>distributed_systems</span>   <span className={styles.bullet}>•</span> <span className={styles.skill}>cloud_native</span>
{'\n\n'}<span className={styles.prompt}>→</span> <span className={styles.dim}>~</span> <span className={styles.cursor}>▌</span>
          </pre>
        </div>
      </div>
    </section>
  )
}
