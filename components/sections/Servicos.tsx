'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/data'

export default function Servicos() {
  return (
    <section id="servicos" className="bg-cream-light py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="text-[9px] md:text-[10px] tracking-[0.32em] uppercase text-bronze font-medium mb-4">
            o que faço
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal">
            serviços
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className={`group p-8 md:p-10 border-t border-[#E8E0D5] hover:bg-cream transition-colors duration-300 ${
                i % 2 === 1 ? 'md:border-l' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-serif text-[3rem] leading-none text-charcoal/8 select-none">
                  {service.number}
                </span>
                <span className="w-8 h-px bg-bronze mt-4 group-hover:w-14 transition-all duration-300" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-charcoal mb-4 leading-snug">
                {service.title}
              </h3>
              <p className="text-[0.84rem] text-charcoal/48 leading-[1.85] font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
          <div className="md:col-span-2 border-t border-[#E8E0D5]" />
        </div>
      </div>
    </section>
  )
}
