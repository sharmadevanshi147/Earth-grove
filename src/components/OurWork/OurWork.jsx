import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './OurWork.module.css'

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

/* ── Tag icons ── */
const PinIcon = () => (
  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true">
    <path
      d="M6 0C3.24 0 1 2.24 1 5c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5Zm0 6.75A1.75 1.75 0 1 1 6 3.25a1.75 1.75 0 0 1 0 3.5Z"
      fill="currentColor"
    />
  </svg>
)

const BuildingIcon = () => (
  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
    <rect x="1" y="4.5" width="12" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M0 5 7 0.5l7 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <rect x="5" y="8.5" width="4" height="4" stroke="currentColor" strokeWidth="1.2" />
  </svg>
)

const CalendarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <rect x="0.75" y="1.75" width="11.5" height="10.5" rx="1.25" stroke="currentColor" strokeWidth="1.2" />
    <line x1="0.75" y1="4.75" x2="12.25" y2="4.75" stroke="currentColor" strokeWidth="1.2" />
    <line x1="3.5" y1="0.5" x2="3.5" y2="3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="9.5" y1="0.5" x2="9.5" y2="3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

/* ── Project data (matches Figma) ── */
const PROJECTS = [
  {
    id: 'bharat',
    name: 'Bharat College of Arts',
    location: 'Mumbai',
    type: 'Institutional Architecture',
    year: '2023',
    description:
      'Spaces nurture creativity through light, openness, and interaction, blending tradition with experimentation, where learning flows beyond classrooms, and architecture becomes a canvas for expression, dialogue, and artistic discovery.',
    image: '/assets/Placeholder.png',
  },
  {
    id: 'veritas',
    name: 'Veritas Residences',
    location: 'Goa',
    type: 'Residential Architecture',
    year: '2024',
    description:
      'Homes designed for balance and privacy, where light, ventilation, and material warmth shape everyday living, fostering comfort, quiet luxury, and a sense of belonging rooted in simplicity and mindful spatial planning.',
    image: '/assets/Placeholder.png',
  },
  {
    id: 'kalkaji',
    name: 'Kalkaji Mandir',
    location: 'Delhi',
    type: 'Temple Architecture',
    year: '2025',
    description:
      'Sacred form rises through devotion and history, where dense movement meets spiritual stillness, architecture channels faith, guiding pilgrims through layered thresholds into a collective experience of reverence and continuity.',
    image: '/assets/Placeholder.png',
  },
  {
    id: 'nexus',
    name: 'Nexus Business Park',
    location: 'Pune',
    type: 'Corporate Architecture',
    year: '2026',
    description:
      'Dynamic workspaces structured for agility and connection, integrating technology, landscape, and movement, enabling productivity and collaboration, where architecture supports evolving business needs and creates an ecosystem of growth and innovation.',
    image: '/assets/Placeholder.png',
  },
]

/* ── Project card ── */
function ProjectCard({ project, index }) {
  return (
    <motion.article className={styles.card} variants={fadeUp} custom={index}>
      <div className={styles.cardImage}>
        <img src={project.image} alt={project.name} loading="lazy" />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardName}>{project.name}</h3>
        <div className={styles.tags}>
          <span className={styles.tag}>
            <PinIcon />
            {project.location}
          </span>
          <span className={styles.tag}>
            <BuildingIcon />
            {project.type}
          </span>
          <span className={styles.tag}>
            <CalendarIcon />
            {project.year}
          </span>
        </div>
        <p className={styles.cardDesc}>{project.description}</p>
      </div>
    </motion.article>
  )
}

/* ── Section ── */
export default function OurWork() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className={styles.section} id="projects" aria-label="Our Work">

      <motion.div
        className={styles.inner}
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* heading */}
        <motion.div className={styles.headingGroup} variants={fadeUp}>
          <h2 className={styles.heading}>Our Work</h2>
          <p className={styles.subheading}>Spaces that respond, not just exist.</p>
        </motion.div>

        {/* 2×2 grid */}
        <motion.div className={styles.grid} variants={stagger}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* see more */}
        <motion.div variants={fadeUp}>
          <a href="#projects" className={styles.seeMore}>
            See More
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
