import { ContentSection, MainBody, Navbar, Footer, AirbnbNav, AirbnbFooter } from '@/devlink'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      < AirbnbNav />
      < MainBody />
      < ContentSection />
      < AirbnbFooter />
    </main>
  )
}
