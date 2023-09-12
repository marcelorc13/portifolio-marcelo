import Image from 'next/image'

import Header from '@/components/header'
import Projetos from '@/components/projetos'
import Marcelo from '@/components/marcelo'
import SobreMim from '@/components/sobreMim'

export default function Home() {
  return (
    <main className=''>
      <Header />
      <Marcelo />
      <SobreMim />
    </main>
  )
}
