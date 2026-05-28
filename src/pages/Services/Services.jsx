import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar    from '../../components/Navbar/Navbar'
import CTAFooter from '../../components/CTAFooter/CTAFooter'
import styles    from './Services.module.css'

/* ── Service data ── */
const SERVICES = [
  {
    id: 'commercial',
    title: 'Commercial Architecture',
    description:
      'Designing efficient, functional, and aesthetically compelling spaces for offices, retail environments, and mixed-use developments. We bring thoughtful design to the commercial fabric of our cities.',
    images: ['/assets/Placeholder.png', '/assets/Placeholder.png', '/assets/Placeholder.png'],
  },
  {
    id: 'temple',
    title: 'Temple Architecture',
    description:
      'Crafting sacred spaces rooted in tradition and reverence. Our temple projects balance spiritual significance with architectural integrity, honouring the rituals and communities they serve.',
    images: ['/assets/Placeholder.png', '/assets/Placeholder.png', '/assets/Placeholder.png'],
  },
  {
    id: 'institutional',
    title: 'Institutional Architecture',
    description:
      'Building spaces for schools, universities, and civic institutions that inspire learning, collaboration, and community. Our designs are durable, dignified, and deeply contextual.',
    images: ['/assets/Placeholder.png', '/assets/Placeholder.png', '/assets/Placeholder.png'],
  },
  {
    id: 'residential',
    title: 'Residential Architecture',
    description:
      'Designing homes that reflect the lives and aspirations of the people who inhabit them. From urban apartments to countryside retreats, each project is tailored to its context and client.',
    images: ['/assets/Placeholder.png', '/assets/Placeholder.png', '/assets/Placeholder.png'],
  },
  {
    id: 'interior',
    title: 'Interior Design',
    description:
      'Creating interiors that feel considered, cohesive, and alive. We work closely with clients to develop spaces that are both beautiful to inhabit and functional in everyday life.',
    images: ['/assets/Placeholder.png', '/assets/Placeholder.png', '/assets/Placeholder.png'],
  },
]

/* ── Stagger variants ── */
const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}
const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

/* ── Page ── */
export default function Services() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero heading ── */}
        <section className={styles.hero} aria-label="Our Versatile Expertise">
          <motion.h1
            className={styles.heroHeading}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Versatile Expertise
          </motion.h1>
        </section>

        {/* ── Service cards ── */}
        <motion.div
          ref={ref}
          className={styles.cardList}
          variants={listVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {SERVICES.map((svc) => (
            <motion.article
              key={svc.id}
              className={styles.card}
              variants={cardVariants}
              aria-label={svc.title}
            >
              {/* Dark overlay on top of OurWorkBG */}
              <div className={styles.cardOverlay} aria-hidden="true" />

              {/* Content */}
              <div className={styles.cardContent}>
                {/* 3-image grid */}
                <div className={styles.imageGrid}>
                  {svc.images.map((src, i) => (
                    <div key={i} className={styles.imageWrap}>
                      <img
                        src={src}
                        alt=""
                        className={styles.image}
                        aria-hidden="true"
                      />
                    </div>
                  ))}
                </div>

                {/* Text */}
                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>{svc.title}</h2>
                  <p className={styles.cardDesc}>{svc.description}</p>
                  <Link to={`/services/${svc.id}`} className={styles.cardBtn}>See More &nbsp;→</Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <CTAFooter showCTA={false} />
      </main>
    </>
  )
}
