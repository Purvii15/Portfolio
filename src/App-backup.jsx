import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import FeaturedProject from './components/FeaturedProject'
import Projects from './components/Projects'
import StatsStrip from './components/StatsStrip'
import JourneyCompact from './components/JourneyCompact'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Extracurricular from './components/Extracurricular'
import Feed from './components/Feed'
import Languages from './components/Languages'
import NowBlock from './components/NowBlock'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Each section already has its WaveBottom embedded inside it.
// The page background matches the first section so there are no gaps.

function App() {
  return (
    <div className="min-h-screen font-sans" style={{ background: '#1A3A2E' }}>
      <Navbar />
      <main>
        <Hero />           {/* #1A3A2E → wave → #F5EFE2 */}
        <About />          {/* #F5EFE2 → wave → #1A3A2E */}
        <Skills />         {/* #1A3A2E → wave → #F5EFE2 */}
        <FeaturedProject />{/* #F5EFE2 → wave → #1A3A2E */}
        <Projects />       {/* #1A3A2E → wave → #F5EFE2 */}
        <StatsStrip />     {/* #F5EFE2 → wave → #1A3A2E */}
        <JourneyCompact /> {/* #1A3A2E → wave → #F5EFE2 */}
        <Certifications /> {/* #F5EFE2 → wave → #1A3A2E */}
        <Achievements />   {/* #1A3A2E → wave → #F5EFE2 */}
        <Extracurricular />{/* #F5EFE2 → wave → #1A3A2E */}
        <Feed />           {/* #1A3A2E → wave → #F5EFE2 */}
        <NowBlock />       {/* #F5EFE2 → wave → #1A3A2E */}
        <Contact />        {/* #1A3A2E → wave → #F5EFE2 */}
      </main>
      <Footer />           {/* #F5EFE2 */}
    </div>
  )
}

export default App
