import { useState, useEffect } from 'react'
import './Hero.css'

import slide1 from '../assets/slides/istockphoto-1392430226-612x612.jpg'
import slide2 from '../assets/slides/istockphoto-1459098694-612x612.jpg'
import slide3 from '../assets/slides/istockphoto-479440915-612x612.jpg'
import slide4 from '../assets/slides/istockphoto-547528110-612x612.jpg'
import slide5 from '../assets/slides/istockphoto-687716000-612x612.jpg'

const slides = [slide1, slide2, slide3, slide4, slide5]

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="hero-section">
      {/* Background glow effects — softer for light theme */}
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Now Composting · Batch #1 Active
          </div>

          <h1 className="hero-title">
            The <span className="highlight">Alchemy</span> of Earth:<br />
            Turning Waste into <span className="highlight-gold">Gold</span>
          </h1>

          <p className="hero-subtitle">
            Soilchemy transforms your kitchen scraps into nutrient-rich compost through 
            a hyper-local, community-driven composting network. Join the movement to 
            close the loop on organic waste.
          </p>

          <div className="hero-actions">
            <a href="#waitlist" className="btn-primary">
              Join the Waitlist
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#roadmap" className="btn-secondary">
              View Roadmap
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">40</span>
              <span className="stat-label">Day Cycle</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">5kg+</span>
              <span className="stat-label">Waste Diverted</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">100%</span>
              <span className="stat-label">Organic</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-carousel">
            {slides.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Soilchemy composting process — slide ${idx + 1}`}
                className={`carousel-slide ${idx === currentSlide ? 'carousel-slide-active' : ''}`}
              />
            ))}
            <div className="carousel-indicators">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  className={`carousel-dot ${idx === currentSlide ? 'carousel-dot-active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
