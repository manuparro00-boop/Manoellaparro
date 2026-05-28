import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Sobre from '@/components/sections/Sobre'
import Servicos from '@/components/sections/Servicos'
import Projetos from '@/components/sections/Projetos'
import Clientes from '@/components/sections/Clientes'
import Contato from '@/components/sections/Contato'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Projetos />
        <Clientes />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
