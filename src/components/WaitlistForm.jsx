import { useState } from 'react'
import './WaitlistForm.css'

/* Inline SVG Icons */
const SeedlingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 20h10" />
    <path d="M12 20v-8" />
    <path d="M12 12c-3.5 0-7-2-7-6 3.5 0 7 2 7 6z" />
    <path d="M12 12c3.5 0 7-2 7-6-3.5 0-7 2-7 6z" />
  </svg>
)

const GiftIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 12 20 22 4 22 4 12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
)

const ChartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
)

const TrophyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
)

const SuccessIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

function WaitlistForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', location: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("https://formspree.io/f/mnjlakaq", {
        method: "POST",
        body: new FormData(e.target),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          alert(data["errors"].map(error => error["message"]).join(", "));
        } else {
          alert("Oops! There was a problem submitting your form. Please try again.");
        }
      }
    } catch (error) {
      alert("An error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="waitlist" className="section waitlist-section">
      <div className="glow-green" style={{ top: '-100px', right: '-100px' }}></div>
      <div className="container">
        <div className="waitlist-wrapper">
          <div className="waitlist-info">
            <span className="section-label">
              <SeedlingIcon />
              Join the Movement
            </span>
            <h2 className="section-title">
              Be among the <span className="highlight-gold">first</span>
            </h2>
            <p className="section-subtitle">
              Sign up for early access to Soilchemy. We'll notify you
              when our composting service launches in your area.
            </p>
            <div className="waitlist-perks">
              <div className="perk">
                <span className="perk-icon"><GiftIcon /></span>
                <span>Early bird pricing guarantee</span>
              </div>
              <div className="perk">
                <span className="perk-icon"><ChartIcon /></span>
                <span>Personal impact dashboard</span>
              </div>
              <div className="perk">
                <span className="perk-icon"><TrophyIcon /></span>
                <span>Founding member badge</span>
              </div>
            </div>
          </div>

          <div className="waitlist-form-card glass-card">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="waitlist-form" action="https://formspree.io/f/mnjlakaq" method="POST">
                <div className="form-group">
                  <label htmlFor="wl-name">Full Name</label>
                  <input
                    type="text"
                    id="wl-name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="wl-email">Email Address</label>
                  <input
                    type="email"
                    id="wl-email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="wl-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="wl-phone"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="wl-location">City / Area</label>
                  <input
                    type="text"
                    id="wl-location"
                    name="location"
                    placeholder="e.g., Pune, Mumbai"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary waitlist-submit"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="spinner"></span>
                  ) : (
                    <>
                      Join the Waitlist
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="waitlist-success">
                <div className="success-icon"><SuccessIcon /></div>
                <h3>You're on the list!</h3>
                <p>
                  Thanks, <strong>{formData.name}</strong>! We'll reach out to{' '}
                  <strong>{formData.email}</strong> as soon as we launch in your area.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WaitlistForm
