export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-charcoal-light py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-serif text-xl text-bronze tracking-wide">MP</span>
        <p className="text-[11px] tracking-[0.08em] text-cream/20 text-center">
          © {new Date().getFullYear()} Manoella Parro. Todos os direitos reservados.
        </p>
        <p className="text-[11px] tracking-[0.08em] text-cream/20">
          Feito com cuidado em São Paulo
        </p>
      </div>
    </footer>
  )
}
