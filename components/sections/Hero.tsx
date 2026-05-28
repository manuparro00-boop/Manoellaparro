'use client'

import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.25 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cream-light flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Corner labels */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute top-[4.5rem] md:top-24 left-6 md:left-10 flex items-center gap-3"
      >
        <div className="w-5 h-px bg-bronze" />
        <span className="text-[9px] tracking-[0.28em] uppercase text-charcoal/35 font-medium">
          São Paulo, Brasil
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute top-[4.5rem] md:top-24 right-6 md:right-10 flex items-center gap-3"
      >
        <span className="text-[9px] tracking-[0.28em] uppercase text-charcoal/35 font-medium">
          desde 2023
        </span>
        <div className="w-5 h-px bg-bronze" />
      </motion.div>

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <motion.p
          variants={fadeIn}
          className="text-[9px] md:text-[10px] tracking-[0.32em] uppercase text-bronze font-medium mb-8 md:mb-10"
        >
          portfólio
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-serif text-[clamp(3.5rem,13vw,9.5rem)] leading-[0.9] text-charcoal"
        >
          Manoella
          <br />
          <em>Parro</em>
        </motion.h1>

        {/* Divider */}
        <motion.div
          variants={fadeIn}
          className="flex items-center justify-center gap-3 my-7 md:my-9"
        >
          <div className="w-10 h-px bg-bronze/50" />
          <div className="w-1 h-1 rounded-full bg-bronze/50" />
          <div className="w-10 h-px bg-bronze/50" />
        </motion.div>

        <motion.p
          variants={fadeIn}
          className="text-[10px] md:text-xs tracking-[0.22em] uppercase text-charcoal/40 font-medium"
        >
          Videomaker&nbsp;&nbsp;·&nbsp;&nbsp;Estrategista Digital&nbsp;&nbsp;·&nbsp;&nbsp;Social Media
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 md:mt-12">
          <a
            href="#projetos"
            className="inline-flex items-center gap-3 text-[10px] tracking-[0.18em] uppercase text-charcoal/45 hover:text-bronze transition-colors duration-200 group"
          >
            <span>ver projetos</span>
            <span className="w-8 h-px bg-current group-hover:w-14 transition-all duration-300" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          className="w-px h-14 bg-gradient-to-b from-transparent to-bronze origin-top"
        />
      </motion.div>
    </section>
  )
}
