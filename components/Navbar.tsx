'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { href: '#sobre', label: 'sobre' },
  { href: '#servicos', label: 'serviços' },
  { href: '#projetos', label: 'projetos' },
  { href: '#contato', label: 'contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-light/95 backdrop-blur-md border-b border-[#E8E0D5]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-serif text-xl text-charcoal tracking-wide select-none">
          MP
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] tracking-[0.18em] uppercase text-charcoal/45 hover:text-bronze transition-colors duration-200 font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden md:inline-block text-[11px] tracking-[0.12em] uppercase border border-bronze text-bronze px-5 py-2.5 hover:bg-bronze hover:text-white transition-all duration-200 font-medium"
        >
          trabalhe comigo
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="md:hidden flex flex-col gap-[5px] p-1"
        >
          <span
            className={`block w-5 h-px bg-charcoal transition-transform duration-300 origin-center ${open ? 'rotate-45 translate-y-[6px]' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-charcoal transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-charcoal transition-transform duration-300 origin-center ${open ? '-rotate-45 -translate-y-[6px]' : ''}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="md:hidden overflow-hidden bg-cream-light border-t border-[#E8E0D5]"
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-[0.18em] uppercase text-charcoal/50 hover:text-bronze transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-2 text-[11px] tracking-[0.12em] uppercase border border-bronze text-bronze px-5 py-3 text-center hover:bg-bronze hover:text-white transition-all duration-200"
              >
                trabalhe comigo
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
