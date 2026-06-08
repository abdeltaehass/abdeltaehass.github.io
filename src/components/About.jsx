import styles from './About.module.css'

const quickLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdel-rahman-taeha-9113b320b/' },
  { label: 'GitHub', href: 'https://github.com/abdeltaehass' },
  { label: 'Email', href: 'mailto:abdeltaehass@gmail.com' },
]

const education = [
  {
    school: 'Georgia Institute of Technology',
    degree: 'M.S. in Computer Science — Machine Learning',
    period: 'Aug 2026 — May 2028 (Expected)',
  },
  {
    school: 'Sacramento State University',
    degree: 'B.S. in Computer Science',
    period: 'Aug 2023 — Dec 2025',
  },
]

const focus = [
  'Autonomous AI agents and LLM evaluation infrastructure',
  'Counterfactual benchmarks for medical vision-language models',
  'Large-scale data and observability pipelines (3 TB/week)',
  'Production iOS apps (Flutter & Dart, Xcode Cloud CI/CD)',
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
              Abdel Rahman Taeha
            </h1>
            <p className={styles.subheading}>
              Software Engineer · AI Research Student
            </p>
            <p className={styles.bio}>
              I work at the intersection of software engineering and machine learning,
              building <em>autonomous AI agents</em>, ML evaluation infrastructure, and
              reliable data pipelines. I'm a Software Engineer at DHCS and an AI Research
              Student contributing to medical-AI benchmarks like <em>MedInsider</em> and{' '}
              <em>SpineFairBench</em>.
            </p>
            <div className={styles.quickLinks}>
              {quickLinks.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={styles.quickLink}
                >
                  {l.label} ↗
                </a>
              ))}
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.quickLink}
              >
                Resume ↗
              </a>
            </div>
          </div>
          <div className={styles.photoWrap}>
            <img
              src={`${import.meta.env.BASE_URL}HeadShot.PNG`}
              alt="Abdel Rahman Taeha"
              className={styles.photo}
            />
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.gridTwo}>
          <div>
            <h2 className={styles.h2}>What I'm focused on</h2>
            <ul className={styles.focusList}>
              {focus.map(f => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.h2}>Education</h2>
            <ul className={styles.eduList}>
              {education.map(e => (
                <li key={e.school} className={styles.eduItem}>
                  <div className={styles.eduSchool}>{e.school}</div>
                  <div className={styles.eduDegree}>{e.degree}</div>
                  <div className={styles.eduPeriod}>{e.period}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
