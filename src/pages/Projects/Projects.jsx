import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar    from '../../components/Navbar/Navbar'
import CTAFooter from '../../components/CTAFooter/CTAFooter'
import styles    from './Projects.module.css'

/* ── Project data ── */
const PROJECTS = [
  {
    id: 'nandan-prospera',
    name: 'Nandan Prospera',
    category: 'Commercial',
    description:
      'A cross-section commercial layout with 14 buildings placed radially around a central open space, combining vertical volume with considered density for a landmark urban presence.',
    image: '/assets/Placeholder.png',
    slug: 'commercial',
  },
  {
    id: 'sri-venkateswara',
    name: 'Sri Venkateswara Mandir',
    category: 'Temple',
    description:
      'A traditional temple design drawing from classical Dravidian architecture, blending intricate stone-carving proportions with contemporary structural requirements.',
    image: '/assets/Placeholder.png',
    slug: 'temple',
  },
  {
    id: 'horizon-school',
    name: 'Horizon International School',
    category: 'Institutional',
    description:
      'Designed around a central learning street, this campus integrates classrooms, labs, and open studios along a naturally lit spine that encourages collaboration.',
    image: '/assets/Placeholder.png',
    slug: 'institutional',
  },
  {
    id: 'amar-coworking',
    name: 'Amar Coworking Space',
    category: 'Commercial',
    description:
      'A flexible coworking environment where workstations, private cabins, and lounge zones flow into one another, creating a rhythm of focus and community across multiple floors.',
    image: '/assets/Placeholder.png',
    slug: 'commercial',
  },
  {
    id: 'grove-villas',
    name: 'Grove Villas',
    category: 'Residential',
    description:
      'A cluster of eight private villas arranged around a shared garden, each oriented to capture morning light and cross-ventilation with deep verandas for outdoor living.',
    image: '/assets/Placeholder.png',
    slug: 'residential',
  },
  {
    id: 'niia-tech-park',
    name: 'Niia Tech Park',
    category: 'Commercial',
    description:
      'A contemporary tech campus designed around natural light and open collaboration, with landscaped courtyards between buildings where innovation thrives alongside nature.',
    image: '/assets/Placeholder.png',
    slug: 'commercial',
  },
]

/* ── Animation variants ── */
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
}
const cardVariants = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

export default function Projects() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className={styles.hero} aria-label="Our Projects">
          <motion.h1
            className={styles.heroHeading}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Projects
          </motion.h1>
          <motion.p
            className={styles.breadcrumb}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Link to="/">Home</Link>
            <span className={styles.sep}> › </span>
            <span>Projects</span>
          </motion.p>
        </section>

        {/* ── 2-column project grid ── */}
        <motion.div
          ref={ref}
          className={styles.grid}
          variants={gridVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {PROJECTS.map((project) => (
            <motion.article
              key={project.id}
              className={styles.card}
              variants={cardVariants}
              aria-label={project.name}
            >
              {/* Image */}
              <div className={styles.cardImageWrap}>
                <img
                  src={project.image}
                  alt={project.name}
                  className={styles.cardImage}
                />
              </div>

              {/* Overlay over texture (text area only via gradient) */}
              <div className={styles.cardOverlay} aria-hidden="true" />

              {/* Text body */}
              <div className={styles.cardBody}>
                <p className={styles.cardCategory}>{project.category}</p>
                <h2 className={styles.cardTitle}>{project.name}</h2>
                <p className={styles.cardDesc}>{project.description}</p>
                <Link to={`/services/${project.slug}`} className={styles.cardBtn}>
                  Know More &nbsp;→
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <CTAFooter showCTA={false} />
      </main>
    </>
  )
}
