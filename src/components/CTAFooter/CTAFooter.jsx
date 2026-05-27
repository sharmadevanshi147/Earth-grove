import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './CTAFooter.module.css'
import logo from '/assets/Logo.svg'
import heroBg from '/assets/Hero.png'

const NAV_LINKS = ['About', 'Services', 'Projects', 'Contact Us']
const FOOTER_COLS = [
  {
    heading: 'Studio',
    links: ['Our Story', 'Our Team', 'Careers', 'Press'],
  },
  {
    heading: 'Services',
    links: ['Residential', 'Commercial', 'Landscape & Urban', 'Consulting'],
  },
  {
    heading: 'Contact',
    links: ['hello@earthgrove.com', '+91 98765 43210', 'Bengaluru, India', 'Book a Call'],
  },
]

export default function CTAFooter() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="contact" className={styles.wrapper}>
      {/* CTA Block */}
      <div className={styles.cta}>
        <div className={styles.ctaBg}>
          <img src={heroBg} alt="" className={styles.ctaBgImg} />
          <div className={styles.ctaOverlay} />
        </div>
        <div className={styles.ctaContent}>
          <motion.h2
            className={styles.ctaHeading}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Build Your<br />Dream Today
          </motion.h2>
          <motion.p
            className={styles.ctaBody}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Creating Timeless ideas &amp; Buildings of Tomorrow
          </motion.p>
          <motion.div
            className={styles.ctaActions}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="mailto:hello@earthgrove.com" className={styles.ctaBtn}>
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <img src={logo} alt="Earth Grove" className={styles.footerLogo} />
            <p className={styles.footerTagline}>
              Architecture &amp; Design Firm creating<br />Timeless ideas &amp; Buildings of Tomorrow.
            </p>
          </div>
          {FOOTER_COLS.map((col) => (
            <div key={col.heading} className={styles.footerCol}>
              <h4 className={styles.footerColHeading}>{col.heading}</h4>
              <ul className={styles.footerColLinks}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className={styles.footerLink}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.footerBottom}>
          <span className={styles.footerCopy}>© {new Date().getFullYear()} Earth Grove. All rights reserved.</span>
          <div className={styles.footerNav}>
            {NAV_LINKS.map((link) => (
              <a key={link} href="#" className={styles.footerBottomLink}>{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  )
}
