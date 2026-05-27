import Navbar        from './components/Navbar/Navbar'
import Hero          from './components/Hero/Hero'
import TrustedBy     from './components/TrustedBy/TrustedBy'
import OurWork       from './components/OurWork/OurWork'
import AHouseOfTrust from './components/AHouseOfTrust/AHouseOfTrust'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <OurWork />
        <AHouseOfTrust />
      </main>
    </>
  )
}
