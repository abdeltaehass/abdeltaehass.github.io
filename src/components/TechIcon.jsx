import styles from './TechIcon.module.css'

// Maps display labels to simple-icons slugs.
// Where there's no clean brand icon, we fall back to a text pill.
const slugMap = {
  'Python': 'python',
  'JavaScript': 'javascript',
  'TypeScript': 'typescript',
  'React': 'react',
  'HTML': 'html5',
  'CSS': 'css',
  'Flutter': 'flutter',
  'Dart': 'dart',
  'PyTorch': 'pytorch',
  'TensorFlow': 'tensorflow',
  'Flask': 'flask',
  'Redis': 'redis',
  'Plotly': 'plotly',
  'Node.js': 'nodedotjs',
  'AWS': 'amazonwebservices',
  'GCP': 'googlecloud',
  'Docker': 'docker',
  'Git': 'git',
  'GitHub': 'github',
  'Swift': 'swift',
  'Java': 'openjdk',
  'C': 'c',
  'C++': 'cplusplus',
  'SQL': 'postgresql',
}

export default function TechIcon({ label }) {
  const slug = slugMap[label]
  if (!slug) {
    return <span className={styles.pillText}>{label}</span>
  }
  return (
    <span className={styles.pill}>
      <img
        src={`https://cdn.simpleicons.org/${slug}/525252`}
        alt=""
        className={styles.icon}
        loading="lazy"
      />
      {label}
    </span>
  )
}
