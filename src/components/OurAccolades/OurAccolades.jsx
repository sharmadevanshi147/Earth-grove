import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './OurAccolades.module.css'

/* ── Accolades (from Figma) ── */
const ACCOLADES = [
  { id: 1, text: 'Winner - Best Architecture Firm, Delhi, 2026' },
  { id: 2, text: 'Winner - The Aureum Architectural Excellence Award, 2026' },
  { id: 3, text: 'Winner - Leela Gupta Award for Excellent Sustainable Architecture, 2026' },
]

/* ── Animation variants ── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

/* ── Section ── */
export default function OurAccolades() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className={styles.section} id="accolades" aria-label="Our Accolades">
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Heading */}
        <h2 className={styles.heading}>Our Accolades</h2>

        {/* Numbered list */}
        <motion.ol
          className={styles.list}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {ACCOLADES.map((a) => (
            <motion.li key={a.id} className={styles.row} variants={slideIn}>
              <span className={styles.num}>{a.id}.</span>
              <span className={styles.title}>{a.text}</span>
            </motion.li>
          ))}
        </motion.ol>
      </motion.div>
    </section>
  )
}
