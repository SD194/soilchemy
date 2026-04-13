import './ProblemSolution.css'

/* Inline SVG Icons */
const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const TrashIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
)

const FlaskIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6" />
    <path d="M10 3v6.5l-5 8.5a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-8.5V3" />
    <path d="M7 17.5h10" />
  </svg>
)

const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

function ProblemSolution() {
  return (
    <section id="problem-solution" className="section ps-section">
      <div className="container">
        <div className="ps-header">
          <span className="section-label">
            <GlobeIcon />
            The Problem &amp; Our Answer
          </span>
          <h2 className="section-title">
            Urban waste is <span className="highlight">broken</span>.<br />
            We're fixing it from the <span className="highlight-gold">ground up</span>.
          </h2>
        </div>

        <div className="ps-grid">
          {/* Problem */}
          <div className="ps-card glass-card problem-card">
            <div className="ps-card-icon"><TrashIcon /></div>
            <h3>The Crisis</h3>
            <p>
              Every day, tons of organic waste ends up in landfills — releasing methane, 
              polluting groundwater, and wasting valuable nutrients that could return to 
              the soil.
            </p>
            <ul className="ps-list">
              <li><span className="ps-x"><XIcon /></span> 60% of household waste is organic</li>
              <li><span className="ps-x"><XIcon /></span> Most ends up in landfills</li>
              <li><span className="ps-x"><XIcon /></span> Creates harmful greenhouse gases</li>
            </ul>
          </div>

          {/* Solution */}
          <div className="ps-card glass-card solution-card">
            <div className="ps-card-icon"><FlaskIcon /></div>
            <h3>Our Solution</h3>
            <p>
              Soilchemy collects your organic waste and transforms it through a scientifically 
              managed, hyper-local composting process — starting with a low-risk, 
              proof-of-concept model.
            </p>
            <ul className="ps-list">
              <li><span className="ps-check"><CheckIcon /></span> Door-to-door organic waste collection</li>
              <li><span className="ps-check"><CheckIcon /></span> Local composting within your community</li>
              <li><span className="ps-check"><CheckIcon /></span> Nutrient-rich compost returned to you</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution
