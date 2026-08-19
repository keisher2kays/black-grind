import React from 'react'
import logo from '../assets/logo.png' // reuse your existing logo asset

const FOOTER_LINKS = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ],
  Services: [
    { label: 'Social Media Marketing', href: '#services' },
    { label: 'SEO', href: '#services' },
    { label: 'Web Design & Development', href: '#services' },
    { label: 'Branding', href: '#services' },
  ],
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__glow" />

      <div className="section__inner site-footer__inner">
        {/* Brand column */}
        <div className="site-footer__brand">
          <img src={logo} alt="The Black Grind" className="site-footer__logo" />
          <p className="site-footer__tagline">
            Digital Marketing Partner — strategy built on results, not symbols.
          </p>
          <div className="site-footer__socials">
            <a href="https://www.facebook.com/blackgrindzim" aria-label="Facebook" className="site-footer__social-btn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.87v-6.98H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.98A10 10 0 0 0 22 12Z"/></svg>
            </a>
            <a href="https://www.instagram.com/black_grindzim/?hl=en" aria-label="Instagram" className="site-footer__social-btn">
              <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>
            </a>
            <a href="https://x.com/blackgrindzim?s=09&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAac2GBkfvRrGz9zURStUvwkfR8mJ8475J_gtgPXxC92jgyyFJ6k3kQ0REadvnw_aem_yx9seAMGPXQrbtafreItgw" aria-label="Twitter" className="site-footer__social-btn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.9c-.7.35-1.5.58-2.3.68a4 4 0 0 0 1.76-2.2c-.78.46-1.64.8-2.56.98A4 4 0 0 0 11.9 9c0 .3.03.6.1.9A11.4 11.4 0 0 1 3.6 4.7a4 4 0 0 0 1.24 5.34c-.65-.02-1.26-.2-1.8-.5v.05a4 4 0 0 0 3.2 3.92c-.58.16-1.2.18-1.8.07a4 4 0 0 0 3.73 2.78A8 8 0 0 1 2 18.5a11.3 11.3 0 0 0 6.14 1.8c7.36 0 11.4-6.1 11.4-11.4l-.01-.52c.78-.57 1.46-1.28 2-2.1-.72.32-1.5.53-2.3.63Z"/></svg>
            </a>
            <a href="https://www.youtube.com/@blackgrindzim" aria-label="YouTube" className="site-footer__social-btn">
              <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M10 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor"/></svg>
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div className="site-footer__col" key={heading}>
            <h4 className="site-footer__col-heading">{heading}</h4>
            <ul className="site-footer__link-list">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact column */}
        <div className="site-footer__col">
          <h4 className="site-footer__col-heading">Get In Touch</h4>
          <ul className="site-footer__link-list site-footer__link-list--static">
            <li>LAPF Centre Building </li>
            <li>Harare, Zimbabwe</li>
            <li><a href="mailto:info.blackgrind@gmail.com">info.blackgrind@gmail.com</a></li>
            <li><a href="tel:+263777622722">+263 77 762 2722</a></li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="section__inner site-footer__bottom-inner">
          <p>&copy; {year} The Black Grind. All rights reserved.</p>
          <div className="site-footer__legal">
            <a href="ig">Terms of Use</a>
            <a href="ig">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer