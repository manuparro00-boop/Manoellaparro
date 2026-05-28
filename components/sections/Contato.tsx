'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1] as const

function reveal(i: number) {
  return {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay: i * 0.1, ease },
    },
  }
}

export default function Contato() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setForm({ nome: '', email: '', mensagem: '' })
  }

  return (
    <section id="contato" className="bg-cream-light py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
          {/* Left */}
          <div>
            <motion.p
              variants={reveal(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="text-[9px] md:text-[10px] tracking-[0.32em] uppercase text-bronze font-medium mb-5"
            >
              trabalhe comigo
            </motion.p>

            <motion.h2
              variants={reveal(1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-charcoal leading-[1.07] mb-7"
            >
              vamos trabalhar
              <br />
              <em className="text-bronze">juntos?</em>
            </motion.h2>

            <motion.p
              variants={reveal(2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="text-[0.9rem] text-charcoal/48 leading-[1.85] mb-10 max-w-sm font-light"
            >
              Tem um projeto em mente? Me conta. Respondo em até 24 horas e adoraria entender o
              que você precisa.
            </motion.p>

            {/* Contact links */}
            <motion.div
              variants={reveal(3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="space-y-5"
            >
              {/* WhatsApp */}
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group w-fit"
              >
                <div className="w-10 h-10 bg-charcoal flex items-center justify-center group-hover:bg-bronze transition-colors duration-200 shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.18em] uppercase text-charcoal/38 font-medium mb-0.5">
                    WhatsApp
                  </p>
                  <p className="text-sm text-charcoal group-hover:text-bronze transition-colors duration-200">
                    +55 (11) 9 9999-9999
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/manoellaparro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group w-fit"
              >
                <div className="w-10 h-10 bg-charcoal flex items-center justify-center group-hover:bg-bronze transition-colors duration-200 shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-white">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.18em] uppercase text-charcoal/38 font-medium mb-0.5">
                    Instagram
                  </p>
                  <p className="text-sm text-charcoal group-hover:text-bronze transition-colors duration-200">
                    @manoellaparro
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:oi@manoellaparro.com.br"
                className="flex items-center gap-4 group w-fit"
              >
                <div className="w-10 h-10 bg-charcoal flex items-center justify-center group-hover:bg-bronze transition-colors duration-200 shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M3 8l9 6 9-6M3 8v10a1 1 0 001 1h16a1 1 0 001-1V8M3 8a1 1 0 011-1h16a1 1 0 011 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.18em] uppercase text-charcoal/38 font-medium mb-0.5">
                    E-mail
                  </p>
                  <p className="text-sm text-charcoal group-hover:text-bronze transition-colors duration-200">
                    oi@manoellaparro.com.br
                  </p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease }}
          >
            {submitted ? (
              <div className="flex flex-col justify-center min-h-[400px]">
                <div className="w-8 h-px bg-bronze mb-8" />
                <h3 className="font-serif text-3xl text-charcoal mb-4">mensagem enviada!</h3>
                <p className="text-[0.9rem] text-charcoal/48 leading-[1.85] font-light">
                  Obrigada pelo contato. Retornarei em breve.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[10px] tracking-[0.18em] uppercase text-bronze hover:text-charcoal transition-colors duration-200 text-left w-fit"
                >
                  enviar outra mensagem →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                {[
                  { id: 'nome', label: 'Nome', type: 'text', placeholder: 'Seu nome' },
                  { id: 'email', label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
                ].map((field) => (
                  <div key={field.id}>
                    <label className="block text-[9px] tracking-[0.22em] uppercase text-charcoal/38 font-medium mb-2.5">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      required
                      placeholder={field.placeholder}
                      className="w-full bg-transparent border-b border-[#D5CCBF] text-charcoal text-sm py-3 placeholder:text-charcoal/22 focus:outline-none focus:border-bronze transition-colors duration-200"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-[9px] tracking-[0.22em] uppercase text-charcoal/38 font-medium mb-2.5">
                    Mensagem
                  </label>
                  <textarea
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    required
                    rows={5}
                    placeholder="Conte sobre seu projeto..."
                    className="w-full bg-transparent border-b border-[#D5CCBF] text-charcoal text-sm py-3 placeholder:text-charcoal/22 focus:outline-none focus:border-bronze transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-charcoal text-cream text-[10px] tracking-[0.22em] uppercase py-4 hover:bg-bronze transition-colors duration-300 font-medium"
                >
                  Enviar mensagem
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
