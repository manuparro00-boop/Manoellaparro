'use client'

import { motion } from 'framer-motion'
import { clients } from '@/lib/data'

export default function Clientes() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-14 md:mb-16"
        >
          <p className="text-[9px] md:text-[10px] tracking-[0.32em] uppercase text-bronze font-medium mb-4">
            marcas
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            clientes &amp; parcerias
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-[#E0D8CE]">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="border-b border-r border-[#E0D8CE] p-8 md:p-10 group hover:bg-cream-light transition-colors duration-200"
            >
              <p className="font-serif text-lg md:text-xl text-charcoal mb-1.5 group-hover:text-bronze transition-colors duration-200 leading-snug">
                {client.name}
              </p>
              <p className="text-[9px] tracking-[0.2em] uppercase text-charcoal/32 font-medium">
                {client.sector}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-[10px] text-charcoal/28 mt-7 tracking-[0.08em] text-center"
        >
          * nomes fictícios para fins de portfólio
        </motion.p>
      </div>
    </section>
  )
}
