import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Testimonials.module.css'

const TESTIMONIALS = [
  {
    id: 1,
    quote: 'Earth Grove didn\'t just design our office — they redesigned how we think about work. The space is magnetic.',
    author: 'Rohan Iyer',
    company: 'CEO, Findr Technologies',
  },
  {
    id: 2,
    quote: 'Working with Earth Grove was effortless. They understood our vision from the first conversation and elevated it beyond what we imagined.',
    author: 'Sara Al-Maktoum',
    company: 'Director, intdeco Group',
  },
  {
    id: 3,
    quote: 'Our campus feels alive. Students, faculty, visitors — everyone remarks on how the building draws you in and holds you.',
    author: 'Dr. Anita Sharma',
    company: 'Principal, Muscat College of Arts',
  },
]

export default function Testimonials() {
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
        By The Words
      </motion.p>

      <div className={styles.grid}>
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.id}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.quoteMark}>"</span>
            <p className={styles.quote}>{t.quote}</p>
            <div className={styles.attribution}>
              <span className={styles.author}>{t.author}</span>
              <span className={styles.company}>{t.company}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
