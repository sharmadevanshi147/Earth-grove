import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './OurAccolades.module.css'

const ACCOLADES = [
  { number: '01', award: 'Aga Khan Award for Architecture', year: '2023', body: 'Aga Khan Trust for Culture' },
  { number: '02', award: 'World Architecture Festival — Finalist', year: '2022', body: 'WAF, Barcelona' },
  { number: '03', award: 'Indian Institute of Architects Gold Medal', year: '2021', body: 'IIA National Council' },
  { number: '04', award: 'Dezeen Award — Residential Category', year: '2021', body: 'Dezeen Magazine' },
  { number: '05', award: 'RIBA International Prize — Longlisted', year: '2020', body: 'Royal Institute of British Architects' },
  { number: '06', award: 'Architecture + Design Award — Platinum', year: '2019', body: 'A+D Magazine India' },
]

export default function OurAccolades() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className={styles.eyebrow}>Recognition</p>
        <h2 className={styles.heading}>Our Accolades</h2>
      </motion.div>

      <div className={styles.list}>
        {ACCOLADES.map((a, i) => (
          <motion.div
            key={a.number}
            className={styles.row}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.number}>{a.number}</span>
            <span className={styles.award}>{a.award}</span>
            <span className={styles.body}>{a.body}</span>
            <span className={styles.year}>{a.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
