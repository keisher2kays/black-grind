
import React, { useState, useEffect, useRef } from 'react'
import teamPhoto from '../assets/roy2.png'

const VALUE_STRIP = [
  { label: 'Results Oriented' },
  { label: 'Innovation & Curiosity' },
  { label: 'Transparent Partnership' },
  { label: 'Adaptability' },
]

const TABS = [
  {
    key: 'mission',
    label: 'Our Mission',
    body: 'To empower brands to dominate their digital space through innovative data backed strategies, delivering tangible return on investments and foster sustainable growth through transparent communications and cutting edge technology.',
  },
  {
    key: 'vision',
    label: 'Our Vision',
    body: 'Our vision is to be a champion and an outstanding digital marketing partner across the African Region and the globe by the year 2036.',
  },
  {
    key: 'values',
    label: 'Core Values',
    body: 'Our company is results oriented, focusing on metrics, ROI and tangible impact, through innovation and curiosity with the same urge to deliver high-impact work with excellence. We have cultured client partnership, where we build strong, transparent relationships with those that have entrusted us with what we know best, rooting ourselves in adaptability in a dynamic digital space.',
  },
]

function About() {
  const [activeTab, setActiveTab] = useState('mission')
  const active = TABS.find((t) => t.key === activeTab)

  const philosophyRef = useRef(null)
  const [philosophyVisible, setPhilosophyVisible] = useState(false)

  useEffect(() => {
    const node = philosophyRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhilosophyVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" id="about">
      <div className="section__inner about__inner">

        {/* Image collage, matching the reference's layered photo + badge */}
        <div className="about__visual">
          <div className="about__collage">
            <img src={teamPhoto} alt="The Black Grind team at work" className="about__img about__img--main" />
            {/* <img src={staffPhoto} alt="A Black Grind strategist on a call" className="about__img about__img--float" /> */}
            <div className="about__badge">
              <span className="about__badge-line">Digital Marketing</span>
              <span className="about__badge-line">Partner</span>
            </div>
          </div>
        </div>

        {/* Copy side */}
        <div className="about__copy">
          <p className="eyebrow">About Us</p>

          <div className="about__heading-wrap">
            <span className="about__heading-rule" />
            <h2 className="about__heading">
              CHOOSE US<span className="text-cyan"></span>,WE <span className="text-gold">CHOOSE YOU</span>
            </h2>
          </div>

          <p className="about__lead">
            We have the expertise and knowledge you need from a team of professionals
            skilled in SEO, content, social media and analytics  to ensure a
            well rounded strategy across multiple channels. The digital space isn't
            a platform for rehearsal, so we build compelling content that resonates
            with your audience across the board, and keep you ahead of shifting
            trends and technology.
          </p>

          {/* Value strip, standing in for the reference's stats bar */}
          <ul className="about__strip">
            {VALUE_STRIP.map((v) => (
              <li key={v.label}>{v.label}</li>
            ))}
          </ul>

          {/* Mission / Vision / Values tabs */}
          <div className="about__tabs">
            <div className="about__tab-buttons" role="tablist">
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={activeTab === tab.key}
                  className={`about__tab-btn ${activeTab === tab.key ? 'is-active' : ''}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="about__tab-panel">
              <span className="about__scan" key={`scan-${activeTab}`} />
              <p className="about__tab-body" key={`body-${activeTab}`}>
                {active.body}
              </p>
            </div>
          </div>

          <a href="#contact" className="btn btn--cyan">Get A Quote &rarr;</a>
        </div>
      </div>

      {/* Philosophy pull-quote, echoing the "Biscuit Tin" approach line */}
      <div
        className={`about__philosophy ${philosophyVisible ? 'is-visible' : ''}`}
        ref={philosophyRef}
      >
        <div className="section__inner about__philosophy-inner">
          <span className="about__philosophy-mark" aria-hidden="true">&ldquo;</span>
          <p className="script-mark text-gold about__philosophy-eyebrow">We always say that&hellip;</p>
          <p className="about__philosophy-quote">
            As Black Grind, we believe in ourselves more than our visible faults.
          </p>
          <span className="about__philosophy-divider" />
          <p className="about__philosophy-sub">
            The &ldquo;Biscuit Tin&rdquo; Approach: we work with clients who have a strong
            heritage, culture and purpose which goes beyond just the profits.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About