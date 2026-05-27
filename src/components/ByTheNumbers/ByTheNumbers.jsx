import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './ByTheNumbers.module.css'

const STATS = [
  { value: '47+', label: 'Projects Completed' },
  { value: '15+', label: 'Years in Practice' },
  { value: '08', label: 'Countries Reached' },
  { value: '98%', label: 'Client Retention' },
]

export default function ByTheNumbers() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className={styles.section}>
      <motion.p
        className={styles.eyebrow}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        By The Numbers
      </motion.p>
      <div className={styles.grid}>
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            className={styles.item}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.value}>{s.value}</span>
            <span className={styles.label}>{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
