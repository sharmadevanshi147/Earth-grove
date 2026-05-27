import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './OurFounders.module.css'

/* ── Founder data (from Figma) ── */
const FOUNDERS = [
  {
    id: 'aanya',
    name: 'Aanya Mehta',
    image: '/assets/Placeholder.png',
    bio: 'Aanya Mehta brings a grounded, context-driven approach rooted in Indian landscapes and lived experiences. With a strong focus on spatial storytelling and user needs, she shapes warm, functional environments, fostering collaboration, trust, and a design process that prioritizes people, culture, and everyday life.',
  },
  {
    id: 'himanshi',
    name: 'Himanshi Kaushik',
    image: '/assets/Placeholder.png',
    bio: 'An Oxford architecture graduate, brings global perspective and refined design sensibility. Her work balances research, material understanding, and human experience, shaping thoughtful spaces. She leads with clarity, precision, and a commitment to creating architecture that is both meaningful and enduring.',
  },
]

/* ── Animation variants ── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

/* ── Section ── */
export default function OurFounders() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className={styles.section} id="founders" aria-label="Our Founders">
      <motion.div
        className={styles.inner}
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Heading */}
        <motion.h2 className={styles.heading} variants={fadeUp}>
          Our Founders
        </motion.h2>

        {/* Cards */}
        <motion.div className={styles.grid} variants={stagger}>
          {FOUNDERS.map((founder) => (
            <motion.div key={founder.id} className={styles.card} variants={fadeUp}>
              {/* Photo */}
              <div className={styles.cardImage}>
                <img
                  src={founder.image}
                  alt={founder.name}
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className={styles.cardBody}>
                <h3 className={styles.founderName}>{founder.name}</h3>
                <p className={styles.founderBio}>{founder.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp}>
          <a href="#about" className={styles.cta}>
            More About Us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
