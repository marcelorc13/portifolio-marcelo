import Image from 'next/image'

import Header from '@/components/header'
import Marcelo from '@/components/marcelo'
import SobreMim from '@/components/sobreMim'
import Projetos from '@/components/projetos'
import Contato from '@/components/contato'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className=''>
      <Header />
      <Marcelo />
      <SobreMim />
      <Projetos />
      <Contato />
      <Footer />
    </main>
  )
}
