import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './OurExpertise.module.css'

/* ── 9 expertise types ── */
const EXPERTISE = [
  { id: 'farmhouse',     label: 'Farmhouse' },
  { id: 'walkthrough',   label: '3D Walkthrough' },
  { id: 'vaastu',        label: 'Vaastu' },
  { id: 'commercial',    label: 'Commercial' },
  { id: 'interiors',     label: 'Interiors' },
  { id: 'temples',       label: 'Temples' },
  { id: 'institutional', label: 'Institutional' },
  { id: 'residential',   label: 'Residential' },
  { id: 'corporate',     label: 'Corporate' },
]

/* ── Animation variants ── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055 } },
}

const fadeIn = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

/* ── Section ── */
export default function OurExpertise() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="services" className={styles.section} aria-label="Our Versatile Expertise">

      {/* Heading */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className={styles.heading}>Our Versatile Expertise</h2>
      </motion.div>

      {/* 3 × 3 grid */}
      <motion.div
        className={styles.grid}
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {EXPERTISE.map((item) => (
          <motion.div key={item.id} className={styles.cell} variants={fadeIn}>
            <img
              src="/assets/Placeholder.png"
              alt={item.label}
              className={styles.cellImage}
              loading="lazy"
            />
            {/* Hover overlay + centered label */}
            <div className={styles.cellOverlay}>
              <span className={styles.cellLabel}>{item.label}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}
