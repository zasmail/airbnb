import { ContentSection, MainBody, Navbar, Footer } from '@/devlink'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      < Navbar />
      < MainBody />
      < ContentSection />
      < Footer />
    </main>
  )
}
