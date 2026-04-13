import './Roadmap.css'

/* Inline SVG Icons */
const MapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
    <line x1="8" y1="2" x2="8" y2="18" />
    <line x1="16" y1="6" x2="16" y2="22" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

const phases = [
  {
    phase: 'Phase 1',
    title: 'Proof of Concept',
    status: 'active',
    items: [
      'First composting batch (40 days)',
      'Collect from 10 pilot households',
      'Validate composting process locally',
      'Build community waitlist',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Early Adoption',
    status: 'upcoming',
    items: [
      'Expand to 50 households',
      'Launch Seedling subscription tier',
      'Partner with local nurseries',
      'Introduce impact tracking dashboard',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Scaling Up',
    status: 'upcoming',
    items: [
      'Dedicated micro-composting facilities',
      'Launch Sapling & Canopy tiers',
      'B2B partnerships with restaurants',
      'Hire composting operations team',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'City-Wide Expansion',
    status: 'upcoming',
    items: [
      'Multi-city rollout roadmap',
      'Carbon credit marketplace',
      'Smart bin IoT integrations',
      'Full circular economy model',
    ],
  },
]

function Roadmap() {
  return (
    <section id="roadmap" className="section roadmap-section">
      <div className="container">
        <div className="roadmap-header">
          <span className="section-label">
            <MapIcon />
            Our Journey
          </span>
          <h2 className="section-title">
            From <span className="highlight">seed</span> to <span className="highlight-gold">city</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Transparency is core to Soilchemy. Here's our plan to grow from a proof-of-concept to a city-wide composting network.
          </p>
        </div>

        <div className="roadmap-grid">
          {phases.map((p) => (
            <div
              key={p.phase}
              className={`roadmap-card glass-card ${p.status === 'active' ? 'roadmap-card-active' : ''}`}
            >
              <span className={`phase-label ${p.status === 'active' ? 'phase-active' : ''}`}>
                {p.phase}
              </span>
              <h3 className="phase-title">{p.title}</h3>
              <ul className="phase-items">
                {p.items.map((item, j) => (
                  <li key={j}>
                    <span className="phase-arrow"><ArrowIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roadmap
