import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#services', label: 'Services' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
  
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeMenu = () => setOpen(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock page scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a href="#top" className="brand" onClick={closeMenu}>
        <img src={logo} alt="The Black Grind" className="brand__logo" />
      </a>

      <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Primary">
        <ul>
          {LINKS.map((link, i) => (
            <li key={link.href} style={{ transitionDelay: `${0.06 * i}s` }}>
              <a href={link.href} onClick={closeMenu}>
                <span className="nav__link-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="nav__link-text">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        
      </nav>

      <div >
        <a href="#contact" className="btn btn--cyan btn--sm">Start The Grind</a>
      </div>

      <button
        className={`menu-toggle ${open ? 'is-open' : ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Backdrop, click to close */}
      <div
        className={`nav-backdrop ${open ? 'is-visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </header>
  )
}

export default Header