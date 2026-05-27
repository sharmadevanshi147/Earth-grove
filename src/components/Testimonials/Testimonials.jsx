import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import styles from './Testimonials.module.css'

/* ── Testimonial data (from Figma) ── */
const TESTIMONIALS = [
  {
    id: 'neera',
    name: 'Neera Sharma, Accedemy',
    quote:
      'Working with the team felt effortless. They truly listened, translated our lifestyle into design, and delivered a home that feels both functional and deeply personal. The attention to detail and transparency throughout the process built complete trust.',
  },
  {
    id: 'anil',
    name: 'Anil Kamble, Findr',
    quote:
      'Their ability to balance efficiency with design quality was impressive. They understood our business needs and created a workspace that enhances productivity while still feeling welcoming and thoughtfully designed. Timelines were respected without compromising execution.',
  },
  {
    id: 'mary',
    name: 'Mary Joseph, Bharat School of Arts',
    quote:
      'The firm brought clarity and structure to a complex project. Their collaborative approach, sensitivity to context, and strong design thinking resulted in a space that serves its purpose beautifully while leaving a lasting impact on its users.',
  },
]

/* ── Slide transition ── */
const slideVariants = {
  enter:  { opacity: 0, y: 14 },
  center: { opacity: 1, y: 0,  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit:   { opacity: 0, y: -10, transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } },
}

/* ── Section ── */
export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)

  /* Auto-advance — resets on manual dot click */
  useEffect(() => {
    const timer = setInterval(
      () => setActive(prev => (prev + 1) % TESTIMONIALS.length),
      5000,
    )
    return () => clearInterval(timer)
  }, [active])

  return (
    <section ref={ref} className={styles.section} id="testimonials" aria-label="By The Words">
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Heading */}
        <h2 className={styles.heading}>By The Words</h2>

        {/* Carousel card */}
        <div className={styles.card}>
          {/* Opening quote mark */}
          <span className={styles.quoteLeft} aria-hidden="true">&ldquo;</span>

          {/* Center: animated content + dots */}
          <div className={styles.content}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className={styles.slide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <h3 className={styles.name}>{TESTIMONIALS[active].name}</h3>
                <p className={styles.quote}>{TESTIMONIALS[active].quote}</p>
              </motion.div>
            </AnimatePresence>

            {/* Dot navigation */}
            <div className={styles.dots} role="tablist" aria-label="Testimonial navigation">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>

          {/* Closing quote mark */}
          <span className={styles.quoteRight} aria-hidden="true">&rdquo;</span>
        </div>
      </motion.div>
    </section>
  )
}
