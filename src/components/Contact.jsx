
import React from 'react'
import contactCartoon from '../assets/phone.jpg'

function Contact() {
  return (
    <section className="contact" id="contact">
      {/* Hero banner */}
      <div className="contact__banner">
        <div className="contact__banner-glow" />
        <div className="section__inner contact__banner-inner">
          <p className="eyebrow eyebrow--light">Contact Us</p>
          <h2 className="contact__banner-heading">
            Let's Build Your <span className="text-cyan">Digital</span>{' '}
            <span className="text-gold">Roadmap</span>
          </h2>
          <p className="contact__banner-lead">
            The Black Grind is ready to bring the right strategy to your brand
            reach out and let's get started.
          </p>
        </div>
      </div>

      {/* Get in touch card */}
      <div className="section__inner contact__card-wrap">
        <div className="contact__card">
          <div className="contact__card-details">
            <h3 className="contact__card-title">Get In Touch</h3>
            <p className="contact__card-sub">
              Reach out through any channel below we respond fast and love
              hearing about new projects.
            </p>

            <div className="contact__item">
              <span className="contact__item-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="2"/></svg>
              </span>
              <div>
                <h4>Head Office</h4>
                <p>LAPF Centre Building floor 5 office 511</p>
                <p>Cnr Chinhoyi Street / Jason Moyo Avenue, Harare</p>
              </div>
            </div>

            <div className="contact__item">
              <span className="contact__item-icon">
                <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/><path d="m22 6-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div>
                <h4>Email Us</h4>
                <p>info.blackgrind@gmail.com</p>
                <p>quest@blackgrind.co.zw</p>
              </div>
            </div>

            <div className="contact__item">
              <span className="contact__item-icon">
                <svg viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div>
                <h4>Call Us</h4>
                <p>+263 77 762 2722</p>
                <p>+263 71 608 2218</p>
              </div>
            </div>

            <div className="contact__socials">
              <p className="contact__socials-label">Follow Our Social Media</p>
              <div className="contact__socials-row">
                <a href="https://www.facebook.com/blackgrindzim" aria-label="Facebook" className="contact__social-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.87v-6.98H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.98A10 10 0 0 0 22 12Z"/></svg>
                </a>
                <a href="https://www.instagram.com/black_grindzim/?hl=en" aria-label="Instagram" className="contact__social-btn">
                  <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>
                </a>
                <a href="https://x.com/blackgrindzim?s=09&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAac2GBkfvRrGz9zURStUvwkfR8mJ8475J_gtgPXxC92jgyyFJ6k3kQ0REadvnw_aem_yx9seAMGPXQrbtafreItgw" aria-label="Twitter" className="contact__social-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.9c-.7.35-1.5.58-2.3.68a4 4 0 0 0 1.76-2.2c-.78.46-1.64.8-2.56.98A4 4 0 0 0 11.9 9c0 .3.03.6.1.9A11.4 11.4 0 0 1 3.6 4.7a4 4 0 0 0 1.24 5.34c-.65-.02-1.26-.2-1.8-.5v.05a4 4 0 0 0 3.2 3.92c-.58.16-1.2.18-1.8.07a4 4 0 0 0 3.73 2.78A8 8 0 0 1 2 18.5a11.3 11.3 0 0 0 6.14 1.8c7.36 0 11.4-6.1 11.4-11.4l-.01-.52c.78-.57 1.46-1.28 2-2.1-.72.32-1.5.53-2.3.63Z"/></svg>
                </a>
                <a href="https://www.youtube.com/@blackgrindzim" aria-label="YouTube" className="contact__social-btn">
                  <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M10 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right side — illustration */}
          <div className="contact__card-visual">
            <img src={contactCartoon} alt="Get in touch illustration" className="contact__cartoon" />
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="contact__map">
        <iframe
          title="The Black Grind location"
          src="https://www.google.com/maps?q=LAPF+Centre,+Chinhoyi+Street,+Harare,+Zimbabwe&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}

export default Contact