import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  Star,
  Shield,
  ChevronUp,
  ArrowRight,
  Menu,
  X,
  CheckCircle,
  Wrench,
  Home,
  Layers,
  Droplets,
  Flame,
  MapPin,
  Brush,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

/* ─── SOCIAL ICONS ─── */

function FacebookIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

/* ─── NAVBAR ─── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Areas', href: '#areas' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-ma-dark/95 backdrop-blur-sm border-b border-ma-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18">
        <a href="#">
          <img src="/images/logo.png" alt="M.A. Roofing London" className="h-12" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-white/60 hover:text-ma-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-ma-accent text-white font-display uppercase tracking-wider px-6 py-2.5 rounded-md hover:bg-ma-accent-dark transition-colors"
          >
            Free Quote
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 top-18 bg-ma-dark z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-display uppercase tracking-wide text-white hover:text-ma-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="bg-ma-accent text-white font-display uppercase tracking-wider text-lg px-8 py-3 rounded-md hover:bg-ma-accent-dark transition-colors"
          >
            Free Quote
          </a>
        </div>
      )}
    </nav>
  )
}

/* ─── HERO: Centered text with angled dark overlay ─── */

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.webp')" }}
      />
      <div className="absolute inset-0 bg-ma-dark/75" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ma-dark to-transparent" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-32">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-ma-accent/15 border border-ma-accent/30 rounded-full px-4 py-1.5 mb-8">
            <Shield size={14} className="text-ma-accent" />
            <span className="text-ma-accent text-sm font-medium tracking-wide">Fully Insured & Guaranteed</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-display uppercase text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6">
            Roofing You Can<br />Count On
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Over 25 years of experience. Flat roofs, pitched roofs, repairs, guttering, and leadwork. Serving London and surrounding areas.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="bg-ma-accent text-white font-display uppercase tracking-wider text-lg px-8 py-3.5 rounded-md hover:bg-ma-accent-dark transition-colors flex items-center gap-2"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:+447841019422"
              className="border border-white/20 text-white font-display uppercase tracking-wider text-lg px-8 py-3.5 rounded-md hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              <Phone size={18} />
              07841 019422
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── STATS BAR ─── */

function Stats() {
  const stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '500+', label: 'Roofs Completed' },
    { value: '5★', label: 'Customer Rating' },
    { value: '100%', label: 'Fully Insured' },
  ]

  return (
    <section className="bg-ma-dark-alt border-y border-ma-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className={`py-8 md:py-10 text-center ${i < stats.length - 1 ? 'border-r border-ma-border' : ''}`}
            >
              <p className="font-display text-3xl md:text-4xl text-ma-accent mb-1">{stat.value}</p>
              <p className="text-ma-muted text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── SERVICES: 3-column icon-top cards ─── */

function Services() {
  const services = [
    {
      icon: Home,
      title: 'Roof Repairs & Leak Fixes',
      description: 'Slipped tiles, storm damage, leaks — found and fixed fast before they get worse. Emergency call-outs available.',
    },
    {
      icon: Layers,
      title: 'New Roof Installations',
      description: 'Complete strip and re-tile or re-slate. New battens, felt, ridge work, and pitched roof builds.',
    },
    {
      icon: Wrench,
      title: 'Flat Roofing',
      description: 'Specialists in bitumen torch-on felt. Strong, durable, and weatherproof flat roofs built to last.',
    },
    {
      icon: Droplets,
      title: 'Guttering, Fascias & Soffits',
      description: 'New gutters, downpipes, fascias, and soffits. uPVC and cast iron. Cleared, repaired, or replaced.',
    },
    {
      icon: Flame,
      title: 'Leadwork & Chimney Repairs',
      description: 'Lead flashings, capping, repointing, and full chimney stack removal. Properly dressed and sealed.',
    },
    {
      icon: Brush,
      title: 'Moss Removal & Maintenance',
      description: 'Roof moss removal and general maintenance to extend the life of your roof and keep it looking sharp.',
    },
  ]

  return (
    <section id="services" className="py-24 bg-ma-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-ma-accent font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display uppercase text-4xl md:text-5xl text-white">
            Our Services
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="bg-ma-surface border border-ma-border rounded-lg p-8 hover:border-ma-accent/40 transition-colors group"
            >
              <div className="w-14 h-14 bg-ma-accent/10 border border-ma-accent/20 rounded-lg flex items-center justify-center mb-5 group-hover:bg-ma-accent/20 transition-colors">
                <service.icon size={26} className="text-ma-accent" />
              </div>
              <h3 className="font-display uppercase tracking-wide text-xl text-white mb-3">{service.title}</h3>
              <p className="text-ma-muted leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── ABOUT: Image left, text right with checklist ─── */

function About() {
  const points = [
    'Roof repairs and leak fixes',
    'New roof installations — flat and pitched',
    'Guttering, fascias, and soffits',
    'Chimney repairs, repointing, capping, and full stack removal',
    'Lead flashings, repairs, and renewal',
    'General roof maintenance and moss removal',
  ]

  return (
    <section id="about" className="py-24 bg-ma-dark-alt">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="rounded-lg overflow-hidden aspect-[4/3] bg-ma-surface order-2 lg:order-1">
            <img
              src="/images/roof-2.jpg"
              alt="Completed pitched roof by M.A. Roofing"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div variants={stagger} className="order-1 lg:order-2">
            <motion.p variants={fadeUp} className="text-ma-accent font-semibold text-sm uppercase tracking-widest mb-3">
              About M.A. Roofing
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display uppercase text-4xl md:text-5xl text-white mb-6">
              25+ Years.<br />No Shortcuts.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-ma-muted text-lg leading-relaxed mb-8">
              With over 25 years of roofing experience, M.A. Roofing provides trusted services for residential
              and commercial properties. We specialise in flat roofing systems using bitumen torch-on felt — strong,
              durable, and weatherproof roofs built to last. Honest advice, competitive pricing, and high standards
              on every project.
            </motion.p>
            <motion.ul variants={stagger} className="space-y-4">
              {points.map((point) => (
                <motion.li key={point} variants={fadeUp} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-ma-accent shrink-0 mt-1" />
                  <span className="text-ma-text/80">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── HOW IT WORKS: Vertical numbered steps ─── */

function HowItWorks() {
  const steps = [
    { title: 'Call or Message', description: 'Tell us what you need. We\'ll ask a few questions and arrange a time to look.' },
    { title: 'Free Quote', description: 'We inspect the roof, explain what\'s needed, and give you a clear, written quote.' },
    { title: 'Work Done Right', description: 'We get to work, keep you updated, and leave the site clean when we\'re done.' },
  ]

  return (
    <section className="py-24 bg-ma-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-ma-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Simple Process
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display uppercase text-4xl md:text-5xl text-white">
            How It Works
          </motion.h2>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          {steps.map((step, i) => (
            <motion.div key={i} variants={fadeUp} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-ma-accent text-white rounded-full flex items-center justify-center font-display text-xl shrink-0">
                  {i + 1}
                </div>
                {i < steps.length - 1 && <div className="w-px h-full bg-ma-border my-2" />}
              </div>
              <div className="pb-12">
                <h3 className="font-display uppercase tracking-wide text-xl text-white mb-2">{step.title}</h3>
                <p className="text-ma-muted leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── REVIEWS: Single column, larger cards ─── */

function Reviews() {
  const reviews = [
    {
      text: 'Had a leak that two other roofers couldn\'t find. M.A. Roofing sorted it in a morning. No fuss, fair price. Should\'ve called them first.',
      name: 'Local Customer',
    },
    {
      text: 'Full re-roof on our semi. Fantastic job from start to finish. Tidy, professional, and came in on budget. Highly recommend.',
      name: 'Local Customer',
    },
    {
      text: 'Quick response to storm damage. Temporary fix same day, full repair done within the week. Really grateful for the fast turnaround.',
      name: 'Local Customer',
    },
    {
      text: 'New torch-on felt flat roof on the extension. Neat leadwork around the edges. Looks great and not a drop of water since.',
      name: 'Local Customer',
    },
  ]

  return (
    <section id="reviews" className="py-24 bg-ma-dark-alt">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-ma-accent font-semibold text-sm uppercase tracking-widest mb-3">
            What Customers Say
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display uppercase text-4xl md:text-5xl text-white">
            Trusted Locally
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-ma-surface border border-ma-border rounded-lg p-8"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-ma-accent text-ma-accent" />
                ))}
              </div>
              <p className="text-ma-text text-lg leading-relaxed mb-6">"{review.text}"</p>
              <p className="text-ma-muted text-sm font-medium">{review.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── GALLERY ─── */

function Gallery() {
  const images = [
    { src: '/images/hero.webp', alt: 'New slate roof with Velux windows' },
    { src: '/images/roof-1.webp', alt: 'Completed flat roof with torch-on felt' },
    { src: '/images/roof.webp', alt: 'Flat roof installation' },
    { src: '/images/roof-2.jpg', alt: 'Pitched roof tiling job' },
  ]

  return (
    <section className="py-24 bg-ma-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-ma-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Our Work
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display uppercase text-4xl md:text-5xl text-white">
            Recent Jobs
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="aspect-square rounded-lg overflow-hidden bg-ma-surface"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── AREAS COVERED ─── */

function Areas() {
  const areas = [
    'London', 'North London', 'South London', 'East London',
    'West London', 'Essex', 'Hertfordshire', 'Kent',
    'Surrey', 'Middlesex', 'Bromley', 'Croydon',
  ]

  return (
    <section id="areas" className="py-24 bg-ma-dark-alt">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-ma-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Where We Work
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display uppercase text-4xl md:text-5xl text-white">
            Areas We Cover
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          {areas.map((area) => (
            <motion.div
              key={area}
              variants={fadeUp}
              className="flex items-center gap-2 text-ma-text/70"
            >
              <MapPin size={14} className="text-ma-accent shrink-0" />
              <span>{area}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── CONTACT CTA ─── */

function Contact() {
  return (
    <section id="contact" className="py-24 bg-ma-surface border-t border-ma-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="font-display uppercase text-4xl md:text-5xl text-white mb-5">
            Need a Roofer?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-ma-muted text-lg mb-10">
            Get a free, no-obligation quote. Call, text, or drop us an email — we'll get back to you the same day.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+447841019422"
              className="bg-ma-accent text-white font-display uppercase tracking-wider text-lg px-8 py-3.5 rounded-md hover:bg-ma-accent-dark transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Phone size={18} />
              07841 019422
            </a>
            <a
              href="mailto:maroofing55@gmail.com"
              className="border border-ma-accent text-ma-accent font-display uppercase tracking-wider text-lg px-8 py-3.5 rounded-md hover:bg-ma-accent/10 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Mail size={18} />
              Email Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── FOOTER ─── */

function Footer() {
  const socials = [
    { icon: FacebookIcon, href: '#', label: 'Facebook' },
    { icon: InstagramIcon, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-ma-dark border-t border-ma-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="font-display uppercase tracking-wider text-2xl text-white mb-3">MA Roofing</p>
            <p className="text-ma-muted text-sm leading-relaxed">
              Professional roofing services. Repairs, replacements, flat roofs, guttering, and leadwork.
            </p>
          </div>

          <div>
            <p className="font-display uppercase tracking-wide text-lg text-white mb-4">Contact</p>
            <div className="space-y-2">
              <a href="tel:+447841019422" className="text-ma-muted hover:text-white transition-colors flex items-center gap-2 text-sm">
                <Phone size={14} />
                07841 019422
              </a>
              <a href="mailto:maroofing55@gmail.com" className="text-ma-muted hover:text-white transition-colors flex items-center gap-2 text-sm">
                <Mail size={14} />
                maroofing55@gmail.com
              </a>
            </div>
          </div>

          <div>
            <p className="font-display uppercase tracking-wide text-lg text-white mb-4">Follow Us</p>
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ma-muted hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-ma-border pt-8 text-center">
          <p className="text-ma-muted text-sm">
            &copy; {new Date().getFullYear()} MA Roofing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ─── BACK TO TOP ─── */

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 bg-ma-accent text-white w-10 h-10 rounded-md flex items-center justify-center shadow-lg hover:bg-ma-accent-dark transition-colors"
      aria-label="Back to top"
    >
      <ChevronUp size={20} />
    </button>
  )
}

/* ─── PAGE ─── */

export default function MALanding() {
  return (
    <div className="min-h-screen bg-ma-dark">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <HowItWorks />
        <Reviews />
        <Gallery />
        <Areas />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
