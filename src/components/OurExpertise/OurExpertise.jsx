import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './OurExpertise.module.css'
import placeholder from '/assets/Placeholder.png'
import buildingBlocks from '/assets/Building Blocks.png'
import heroBg from '/assets/Hero.png'

const EXPERTISE = [
  {
    id: 1,
    image: placeholder,
    title: 'Residential Design',
    description: 'Crafting homes that balance beauty, function, and the rhythm of daily life.',
  },
  {
    id: 2,
    image: buildingBlocks,
    title: 'Commercial Projects',
    description: 'Workspaces and institutions that project ambition and foster community.',
  },
  {
    id: 3,
    image: heroBg,
    title: 'Landscape & Urban',
    description: 'Shaping the ground between buildings — parks, plazas, and city-scale vision.',
  },
]

export default function OurExpertise() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="services" className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className={styles.heading}>Our Versatile Expertise</h2>
      </motion.div>

      <div className={styles.tiles}>
        {EXPERTISE.map((item, i) => (
          <motion.div
            key={item.id}
            className={styles.tile}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.tileImage}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className={styles.tileOverlay} />
            </div>
            <div className={styles.tileBody}>
              <h3 className={styles.tileTitle}>{item.title}</h3>
              <p className={styles.tileDesc}>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
