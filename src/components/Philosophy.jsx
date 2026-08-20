import React from 'react'

const PILLARS = [
  {
    key: 'narrative',
    title: 'Compelling Narratives',
    body: 'Authentic connections through storytelling that resonates, moving beyond superficial symbols.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="2"/></svg>
    ),
    highlight: true,
  },
  {
    key: 'results',
    title: 'Measurable Results',
    body: 'Data fuels every decision, driving real ROI and proving value beyond theory.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none"><path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 14l3-3 4 4 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    key: 'ai',
    title: 'AI-Ready Adaptability',
    body: 'We adapt to emerging tech to guide your buyer\u2019s journey with ethics and professionalism.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    key: 'biscuit',
    title: 'The Biscuit Tin Approach',
    body: 'We work with clients who have a strong heritage, culture and purpose beyond just profits.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none"><path d="M4 8h16M4 8v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M4 8l2-4h12l2 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
]

function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
      <div className="section__inner philosophy__inner">
        {/* Left — copy */}
        <div className="philosophy__copy">
          <span className="philosophy__pill">PHILOSOPHY</span>

          <h2 className="philosophy__heading">
            WE BELIEVE IN OURSELVES MORE THAN OUR <span className="text-gold">VISIBLE FAULTS</span>
          </h2>

          <p className="philosophy__lead">
            Our philosophy centers on one core belief: combining data-driven
            strategy with human-centric creativity, focused on guiding the
            buyer's journey with professionalism and ethical values, quick,
            easy and efficient.
          </p>

          <a href="#contact" className="btn btn--cyan philosophy__cta">
            Work With Us <span>&rarr;</span>
          </a>
        </div>

        {/* Right — 2x2 grid */}
        <div className="philosophy__grid">
          {PILLARS.map((p) => (
            <div
              key={p.key}
              className={`philosophy-card ${p.highlight ? 'philosophy-card--highlight' : ''}`}
            >
              <span className="philosophy-card__icon">{p.icon}</span>
              <h3 className="philosophy-card__title">{p.title}</h3>
              <p className="philosophy-card__body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Philosophy