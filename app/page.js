import Image from 'next/image'

import Header from '@/components/header'
import Marcelo from '@/components/marcelo'
import SobreMim from '@/components/sobreMim'
import Projetos from '@/components/projetos'
import Contato from '@/components/contato'

export default function Home() {
  return (
    <main className=''>
      <Header />
      <Marcelo />
      <SobreMim />
    </main>
  )
}
