import React, { useEffect, useRef, useState } from 'react'
import philosophyPhoto from '../assets/philosophy2.jpeg' // add a photo here, same pattern as About's man.png

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

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
  const [quoteRef, quoteVisible] = useReveal()

  return (
    <section className="philosophy" id="philosophy">
      {/* Intro — image + copy, mirrors About's collage layout */}
      <div className="section__inner philosophy__intro">
        <div className="philosophy__visual">
          <div className="philosophy__collage">
            <img src={philosophyPhoto} alt="The Black Grind philosophy" className="philosophy__img" />
            <div className="philosophy__badge">
              <span>Quick</span>
              <span>Easy</span>
              <span>Efficient</span>
            </div>
          </div>
        </div>

        <div className="philosophy__copy">
          <span className="philosophy__pill">Philosophy</span>

          <h2 className="philosophy__heading">
            We believe in ourselves <span className="text-gold"> more than our visible faults</span>
          </h2>

          <p className="philosophy__lead">
            Our philosophy centers on one core belief: combining data-driven
            strategy with human-centric creativity, focused on building
            authentic connections through compelling narratives that resonate
            moving beyond superficial symbols to drive measurable results.
            We use data to fuel decisions, prove value, and adapt to emerging
            technology like AI, all while guiding the buyer's journey with
            professionalism and ethical values.
          </p>

          <p className="philosophy__lead">
            We concentrate on making bold decisions and taking action that
            provides real value, not just symbols helping make the world a
            better place through smart, targeted campaigns. We make it so:
            quick, easy, efficient, and turned into a fortune.
          </p>

          <a href="#contact" className="btn btn--cyan philosophy__cta">
            Work With Us <span>&rarr;</span>
          </a>
        </div>
      </div>

      {/* 2x2 pillar grid */}
      <div className="section__inner philosophy__grid">
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

      {/* Biscuit Tin closing quote */}
      <div className={`philosophy__quote ${quoteVisible ? 'is-visible' : ''}`} ref={quoteRef}>
        <div className="section__inner philosophy__quote-inner">
          <span className="philosophy__quote-mark" aria-hidden="true">&ldquo;</span>
          <p className="script-mark text-gold philosophy__quote-eyebrow">We always say that&hellip;</p>
          <p className="philosophy__quote-text">
            As Black Grind, we believe in ourselves more than our visible faults.
          </p>
          <span className="philosophy__quote-divider" />
          <p className="philosophy__quote-sub">
            The &ldquo;Biscuit Tin&rdquo; Approach: we work with clients who have a strong
            heritage, culture and purpose which goes beyond just the profits.
          </p>
          <p className="philosophy__quote-signature">The Black Grind</p>
        </div>
      </div>
    </section>
  )
}

export default Philosophy