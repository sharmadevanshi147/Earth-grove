import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './ByTheNumbers.module.css'

/* ── Stats (from Figma) ── */
const STATS = [
  { id: 'projects',   value: '40+',  label: 'Projects Inaugurated' },
  { id: 'cities',     value: '8+',   label: 'Cities in India & Abroad' },
  { id: 'retention',  value: '95%',  label: 'Client Retention' },
  { id: 'commitment', value: '100%', label: 'Commitment to Craft' },
]

/* ── Animation variants ── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

/* ── Section ── */
export default function ByTheNumbers() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className={styles.section} id="numbers" aria-label="By The Numbers">
      <motion.div
        className={styles.inner}
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Heading */}
        <motion.h2 className={styles.heading} variants={fadeUp}>
          By The Numbers
        </motion.h2>

        {/* Stats row */}
        <motion.div className={styles.statsRow} variants={stagger}>
          {STATS.map((stat) => (
            <motion.div key={stat.id} className={styles.stat} variants={fadeUp}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
