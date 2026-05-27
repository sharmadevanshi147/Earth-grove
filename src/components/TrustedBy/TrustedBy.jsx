import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './TrustedBy.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

/* ── Logo components ── */

function AccademyLogo() {
  return (
    <span className={styles.logoAccademy}>
      <span className={styles.accademyDot} aria-hidden="true" />
      accademy
    </span>
  )
}

function DirectDecorLogo() {
  return (
    <span className={styles.logoDirectDecor}>
      <svg
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={styles.buildingIcon}
      >
        {/* outer frame */}
        <rect x="0.75" y="0.75" width="18.5" height="22.5" stroke="white" strokeWidth="1.5" />
        {/* peaked roof line */}
        <polyline points="0,9 10,1 20,9" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        {/* door/entrance */}
        <rect x="6.5" y="15" width="7" height="8.5" stroke="white" strokeWidth="1.5" />
      </svg>
      <span>DirectDecor</span>
    </span>
  )
}

function FindrLogo() {
  return (
    <span className={styles.logoFindr}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={styles.findrSquares}
      >
        <rect x="0" y="0" width="7" height="7" />
        <rect x="9" y="0" width="7" height="7" />
        <rect x="0" y="9" width="7" height="7" />
        <rect x="9" y="9" width="7" height="7" />
      </svg>
      <em>Findr</em>
    </span>
  )
}

function IntdecoLogo() {
  return <span className={styles.logoIntdeco}>intdeco</span>
}

function CosmicSportsLogo() {
  return <span className={styles.logoCosmicSports}>COSMIC SPORTS</span>
}

const LOGOS = [
  { id: 'accademy',     Logo: AccademyLogo },
  { id: 'directdecor', Logo: DirectDecorLogo },
  { id: 'findr',        Logo: FindrLogo },
  { id: 'intdeco',      Logo: IntdecoLogo },
  { id: 'cosmicsports', Logo: CosmicSportsLogo },
]

export default function TrustedBy() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className={styles.section}
      id="trusted"
      aria-label="Trusted By the Best"
    >
      <motion.div
        className={styles.inner}
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className={styles.heading} variants={fadeUp}>
          Trusted By the Best
        </motion.h2>

        <motion.div className={styles.logoRow} variants={fadeUp}>
          {LOGOS.map(({ id, Logo }) => (
            <div key={id} className={styles.logoItem}>
              <Logo />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
