import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './OurFounders.module.css'
import placeholder from '/assets/Placeholder.png'

const FOUNDERS = [
  {
    id: 1,
    image: placeholder,
    name: 'Aryan Mehta',
    role: 'Principal Architect & Co-founder',
    bio: 'With 20 years in sustainable design, Aryan leads Earth Grove\'s creative vision — blending modernism with vernacular wisdom.',
  },
  {
    id: 2,
    image: placeholder,
    name: 'Priya Nair',
    role: 'Design Director & Co-founder',
    bio: 'Priya orchestrates every project\'s spatial narrative, ensuring each space resonates with the people who will live and work inside it.',
  },
  {
    id: 3,
    image: placeholder,
    name: 'Devraj Sinha',
    role: 'Urban Planner & Co-founder',
    bio: 'Devraj brings a city-wide lens to every project — thinking beyond the building envelope to how structures shape communities.',
  },
]

export default function OurFounders() {
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
        <h2 className={styles.heading}>Our Founders</h2>
      </motion.div>

      <div className={styles.grid}>
        {FOUNDERS.map((f, i) => (
          <motion.div
            key={f.id}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.imgWrap}>
              <img src={f.image} alt={f.name} loading="lazy" />
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{f.name}</h3>
              <p className={styles.role}>{f.role}</p>
              <p className={styles.bio}>{f.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
