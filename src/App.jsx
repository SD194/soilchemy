import './App.css'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Roadmap from './components/Roadmap'
import WaitlistForm from './components/WaitlistForm'
import Footer from './components/Footer'
import logoImg from './assets/logo.png'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#hero" className="nav-brand">
            <img src={logoImg} alt="Soilchemy logo" />
            Soil<span className="highlight">chemy</span>
          </a>
          <div className="nav-links">
            <a href="#problem-solution">About</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#waitlist" className="btn-primary nav-cta">Join Waitlist</a>
          </div>
        </div>
      </nav>

      {/* Page sections */}
      <Hero />
      <div className="section-divider"></div>
      <ProblemSolution />
      <div className="section-divider"></div>
      <Roadmap />
      <div className="section-divider"></div>
      <WaitlistForm />
      <Footer />
    </div>
  )
}

export default App
