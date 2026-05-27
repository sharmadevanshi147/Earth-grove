import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import NavLink from '../ui/NavLink'
import logoSrc from '/assets/Logo.svg'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'About',      href: '/about'    },
  { label: 'Services',   href: '#services' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact Us', href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
    >
      {/* Logo */}
      <a href="/" className={styles.logoLink} aria-label="Earth Grove home">
        <img src={logoSrc} alt="Earth Grove" className={styles.logo} />
      </a>

      {/* Nav links with staggered entry */}
      <nav className={styles.nav} aria-label="Main navigation">
        {NAV_LINKS.map(({ label, href }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.07 }}
          >
            <NavLink href={href}>{label}</NavLink>
          </motion.div>
        ))}
      </nav>
    </motion.header>
  )
}
