import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './CTAFooter.module.css'

/* ── Social icons (inline SVG) ── */
function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
    </svg>
  )
}
function IconYouTube() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.47C18.88 4 12 4 12 4s-6.88 0-8.6.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.53C5.12 20 12 20 12 20s6.88 0 8.6-.47a2.78 2.78 0 0 0 1.94-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
    </svg>
  )
}
function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
function IconFacebook() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}
function IconX() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

/* ── Footer nav data ── */
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
    links: ['care@earthgrove.com', '909-800-6778', 'New Delhi, India', 'Book a Call'],
  },
]

const SOCIALS = [
  { label: 'Instagram', Icon: IconInstagram },
  { label: 'YouTube',   Icon: IconYouTube   },
  { label: 'LinkedIn',  Icon: IconLinkedIn  },
  { label: 'Facebook',  Icon: IconFacebook  },
  { label: 'X',         Icon: IconX         },
]

/* ── Section ── */
export default function CTAFooter() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} id="contact" className={styles.wrapper}>

      {/* ── Floating CTA Card ── */}
      <motion.div
        className={styles.ctaCard}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Left — heading + contact */}
        <div className={styles.ctaLeft}>
          <h2 className={styles.ctaHeading}>
            Build Your<br />Dream Today
          </h2>
          <p className={styles.ctaContact}>
            care@earthgrove.com&nbsp;&nbsp;•&nbsp;&nbsp;909-800-6778
          </p>
        </div>

        {/* Right — Building Blocks image */}
        <div className={styles.ctaRight}>
          <img
            src="/assets/Building Blocks.png"
            alt=""
            className={styles.ctaImage}
            aria-hidden="true"
          />
        </div>
      </motion.div>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>

          {/* Top row: brand + socials */}
          <div className={styles.footerTop}>
            {/* Brand */}
            <div className={styles.footerBrand}>
              <img
                src="/assets/Logo.svg"
                alt="Earth Grove"
                className={styles.footerLogo}
              />
              <p className={styles.footerTagline}>
                Creating Timeless ideas &amp;<br />Buildings of Tomorrow
              </p>
            </div>

            {/* Social icons */}
            <div className={styles.socials}>
              {SOCIALS.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  className={styles.socialLink}
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className={styles.footerDivider} />

          {/* Nav columns */}
          <div className={styles.footerNav}>
            {FOOTER_COLS.map((col) => (
              <div key={col.heading} className={styles.footerCol}>
                <h4 className={styles.colHeading}>{col.heading}</h4>
                <ul className={styles.colLinks}>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className={styles.colLink}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className={styles.footerBottom}>
            <span className={styles.footerCopy}>
              © {new Date().getFullYear()} Earth Grove. All rights reserved.
            </span>
            <div className={styles.footerBottomLinks}>
              {['About', 'Services', 'Projects', 'Contact Us'].map((link) => (
                <a key={link} href="#" className={styles.footerBottomLink}>{link}</a>
              ))}
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}
