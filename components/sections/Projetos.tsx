'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, type FilterCategory } from '@/lib/data'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

const filters: { key: FilterCategory; label: string }[] = [
  { key: 'todos', label: 'todos' },
  { key: 'video', label: 'vídeo' },
  { key: 'branding', label: 'branding' },
  { key: 'social', label: 'social media' },
]

export default function Projetos() {
  const [active, setActive] = useState<FilterCategory>('todos')

  const filtered =
    active === 'todos' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projetos" className="bg-charcoal py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12 md:mb-16"
        >
          <p className="text-[9px] md:text-[10px] tracking-[0.32em] uppercase text-bronze font-medium mb-4">
            portfólio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream">
            projetos selecionados
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="flex flex-wrap gap-2 mb-12 md:mb-16"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 border transition-all duration-200 font-medium ${
                active === f.key
                  ? 'border-bronze bg-bronze text-charcoal'
                  : 'border-charcoal-muted text-cream/35 hover:border-bronze/40 hover:text-cream/60'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative overflow-hidden cursor-pointer"
              >
                <ImagePlaceholder aspect={project.aspect} label={project.tag} dark />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/85 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] tracking-[0.22em] uppercase text-bronze font-medium mb-2">
                    {project.tag}&nbsp;&nbsp;—&nbsp;&nbsp;{project.year}
                  </span>
                  <h3 className="font-serif text-[1.1rem] text-cream mb-1 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[0.75rem] text-cream/45">{project.subtitle}</p>
                  <div className="mt-4 flex items-center gap-2 text-[9px] text-bronze tracking-[0.12em] uppercase font-medium">
                    <span>Ver projeto</span>
                    <span className="w-6 h-px bg-bronze group-hover:w-12 transition-all duration-300" />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
