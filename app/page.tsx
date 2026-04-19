import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { About } from '@/components/sections/About'
import { Hero } from '@/components/sections/Hero'
import { Products } from '@/components/sections/Products'
import { Vision } from '@/components/sections/Vision'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Vision />
      </main>
      <Footer />
    </>
  )
}
