import React, { useEffect, useRef, useState } from 'react'
import growthChart from '../assets/graph.png'

const SERVICES = [
  {
    num: '01',
    title: 'Email Marketing',
    body: 'We build subscriber lists, craft newsletters, and automate campaigns that nurture leads — putting your brand in front of the right inboxes with an ROI worth the investment.',
  },
  {
    num: '02',
    title: 'Social Media Marketing',
    body: 'With over 4.7 billion users across social platforms, we build authentic relationships, humanize your brand, and drive traffic through community management, influencer collaboration, and social listening.',
  },
  {
    num: '03',
    title: 'Content Marketing & Creation',
    body: 'Content can make or break a brand. We create, validate, and disseminate blog posts, video, infographics, and more — content built to attract and retain your audience.',
  },
  {
    num: '04',
    title: 'Search Engine Optimization',
    body: 'Over 90% of online experiences start with a search engine. We handle on-page and off-page SEO, keyword research, backlinks, and technical audits to drive organic traffic that converts.',
  },
  {
    num: '05',
    title: 'PPC Advertising',
    body: 'Immediate visibility across Google Ads, Bing Ads, and social networks — targeted by demographic, location, and interest. Ideal for launches that need to test and adjust fast.',
  },
  {
    num: '06',
    title: 'Brand Visibility & Equity',
    body: 'Your brand is everything. We build awareness and loyalty with a results-oriented approach — tracking metrics, ROI, and tangible impact at every step.',
  },
  {
    num: '07',
    title: 'Web Design & Development',
    body: 'User-friendly, optimized, attractive websites — from 5 pages to full e-commerce builds — delivered in as little as 48 hours for basic sites, turning your site into a real marketing tool.',
  },
  {
    num: '08',
    title: 'AI & Customization',
    body: 'From meeting notes to business proposals, AI is reshaping how work gets done. We stay ahead of the curve, adapting the latest tools to keep your strategy current.',
  },
]

function ServiceRow({ service, index }) {
  const rowRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const direction = index % 2 === 0 ? 'from-left' : 'from-right'

  useEffect(() => {
    const node = rowRef.current
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

  return (
    <div
      className={`service-row service-row--${direction} ${visible ? 'is-visible' : ''}`}
      ref={rowRef}
    >
      <span className="service-row__num">{service.num}</span>
      <div className="service-row__content">
        <h3 className="service-row__title">{service.title}</h3>
        <p className="service-row__body">{service.body}</p>
      </div>
      <span className="service-row__accent" />
      <span className="service-row__tick" />
      <span className="service-row__dot" />
    </div>
  )
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="section__inner services__intro">
        <p className="eyebrow">Service Portfolio</p>
        <div className="about__heading-wrap">
          <span className="about__heading-rule" />
          <h2 className="about__heading">
            Strategy Built On <span className="text-cyan">Results</span>,
            Not <span className="text-gold">Symbols</span>
          </h2>
        </div>
        <p className="about__lead">
          It's not just content — it's a comprehensive strategy to build a digital
          roadmap that aligns marketing efforts with sales goals. Every service we
          offer is measured against one thing: tangible growth.
        </p>

        <div className="services__chart">
          <img src={growthChart} alt="Upward growth trend" className="services__chart-img" />
        </div>
      </div>

      <div className="section__inner services__list">
        {SERVICES.map((s, i) => (
          <ServiceRow service={s} index={i} key={s.num} />
        ))}
      </div>
    </section>
  )
}

export default Services