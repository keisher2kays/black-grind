import React from 'react'
import person from '../assets/trust3.png'
import googleIcon from '../assets/google.png'
import chatgptIcon from '../assets/gbt.png'
// import perplexityIcon from '../assets/perp.png'
import seoIcon from '../assets/seo.png'
import codeIcon from '../assets/code.png'

const CHECKLIST = ['SEO & Content', 'Social & Paid Ads', 'Web & AI Tools', 'Brand Strategy']

const CHIPS = [
  {  icon: googleIcon, className: 'hero__chip--1' },
  {  icon: codeIcon, className: 'hero__chip--2' },
  // {  icon: perplexityIcon, className: 'hero__chip--2' },
  {  icon: chatgptIcon, className: 'hero__chip--3' },
  {  icon: seoIcon, className: 'hero__chip--4' },
  
]

function Banner() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__copy">
          {/* <span className="hero__badge">
            <span className="hero__badge-dot" />
            The Future of Digital Marketing is Here
          </span> */}

          <h1 className="hero__headline">
            Build Louder.<br />
            <span className="text-cyan">Get Chosen Everywhere.</span>
          </h1>

          <p className="hero__lead">
            SEO, content, social, brand and AI-ready web builds, run by one team
            so your strategy pulls in the same direction and turns visibility
            into revenue.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--cyan">Start The Grind &rarr;</a>
            <a href="#services" className="btn btn--outline">
              See Our Services
              <small>No obligation</small>
            </a>
          </div>

          <ul className="hero__checklist">
            {CHECKLIST.map((item) => (
              <li key={item}>
                <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3 3 7-7" /></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__portrait-glow" aria-hidden="true" />
          <div className="hero__portrait-rings" aria-hidden="true" />
          <img
            src={person}
            alt="A Black Grind strategist, ready to help grow your brand"
            className="hero__portrait"
          />

          {CHIPS.map((chip) => (
            <div className={`hero__chip ${chip.className}`} key={chip.label}>
              <img src={chip.icon} alt="" className="hero__chip-icon" />
              <span>{chip.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Banner