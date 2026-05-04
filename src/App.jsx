import { Component } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import FeaturedProject from './components/FeaturedProject'
import Projects from './components/Projects'
import Experience from './components/Experience'
import JourneyCompact from './components/JourneyCompact'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Extracurricular from './components/Extracurricular'
import Feed from './components/Feed'
import Languages from './components/Languages'
import NowBlock from './components/NowBlock'
import Contact from './components/Contact'
import Footer from './components/Footer'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          background: '#1A3A2E', minHeight: '100vh', padding: '40px',
          color: 'white', fontFamily: 'monospace'
        }}>
          <h1 style={{ color: '#ff6b6b', fontSize: '24px', marginBottom: '20px' }}>❌ Error Found!</h1>
          <pre style={{
            background: '#0d1f17', padding: '20px', borderRadius: '8px',
            color: '#ff6b6b', fontSize: '14px', whiteSpace: 'pre-wrap', wordBreak: 'break-word'
          }}>
            {this.state.error?.toString()}
            {'\n\n'}
            {this.state.error?.stack}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div style={{ background: '#1A3A2E' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <FeaturedProject />
          <Projects />
          <Experience />
          <JourneyCompact />
          <Certifications />
          <Achievements />
          <Extracurricular />
          <Feed />
          <Languages />
          <NowBlock />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App
