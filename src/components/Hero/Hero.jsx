import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Button from '../ui/Button'
import heroPoster from '/assets/Hero.png'   // shown while video loads / as fallback
import styles from './Hero.module.css'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })

  // Image starts at natural top (matching Figma Y:0 placement) and drifts
  // down slightly during scroll for a subtle parallax effect
  const bgY            = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const contentY       = useTransform(scrollYProgress, [0, 0.6], ['0%', '-12%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={sectionRef} className={styles.hero} aria-label="Hero">
      {/* ── Parallax background ── */}
      <motion.div className={styles.bgWrapper} style={{ y: bgY }} aria-hidden="true">
        <video
          className={styles.bgVideo}
          autoPlay
          loop
          muted
          playsInline
          poster={heroPoster}
        >
          {/* Place HeroVideo.mp4 in public/assets/ to activate */}
          <source src="/assets/HeroVideo.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        className={styles.content}
        style={{ y: contentY, opacity: contentOpacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className={styles.headline} variants={fadeUp}>
          Earth Grove is an architecture&nbsp;&amp;<br />
          Design Firm creating Timeless<br />
          ideas &amp; Buildings of Tomorrow
        </motion.h1>
        <motion.div className={styles.cta} variants={fadeUp}>
          <Button href="#contact" variant="primary">Contact us</Button>
          <Button href="#projects" variant="secondary">See Our Work</Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
