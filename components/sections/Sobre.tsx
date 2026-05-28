'use client'

import { motion } from 'framer-motion'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { skills } from '@/lib/data'

const ease = [0.25, 0.1, 0.25, 1] as const

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.68, ease } },
}

export default function Sobre() {
  return (
    <section id="sobre" className="bg-charcoal py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:pt-2"
          >
            <motion.p
              variants={item}
              className="text-[9px] md:text-[10px] tracking-[0.32em] uppercase text-bronze font-medium mb-5"
            >
              sobre mim
            </motion.p>

            <motion.h2
              variants={item}
              className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-cream leading-[1.07] mb-9"
            >
              criatividade
              <br />
              com <em className="text-bronze">estratégia</em>
            </motion.h2>

            <motion.div variants={item} className="space-y-5 mb-10">
              <p className="text-cream/55 text-sm md:text-[0.95rem] leading-[1.8] font-light">
                Com 25 anos e uma mente voltada para o audiovisual e o digital, atuo criando
                conteúdo que comunica de verdade. Formada em comunicação, trabalho na interseção
                entre estratégia, estética e resultado.
              </p>
              <p className="text-cream/55 text-sm md:text-[0.95rem] leading-[1.8] font-light">
                Porque acredito que uma boa imagem não é só bonita: ela converte. Baseada em São
                Paulo, atendo marcas, empreendedores e criadores que querem presença digital com
                intenção.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <p className="text-[9px] tracking-[0.28em] uppercase text-cream/25 font-medium mb-4">
                competências
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[9px] md:text-[10px] tracking-[0.15em] uppercase border border-charcoal-muted text-cream/35 px-3 py-1.5 hover:border-bronze hover:text-bronze transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -top-4 -right-4 w-full h-full border border-bronze/20 pointer-events-none"
            />
            <ImagePlaceholder
              aspect="portrait"
              label="foto pessoal"
              dark
              className="w-full max-w-md mx-auto lg:mx-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
