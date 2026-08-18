import React, { useState } from 'react'
import logo from '../assets/logo.png'

const LINKS = [
   { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <a href="#top" className="brand" onClick={closeMenu}>
        <img src={logo} alt="The Black Grind" className="brand__logo" />
      </a>

      <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Primary">
        <ul>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="site-header__actions">
        <a href="#contact" className="site-header__login">Log in</a>
        <a href="#contact" className="btn btn--cyan btn--sm">Get Access Now</a>
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
    </header>
  )
}

export default Header