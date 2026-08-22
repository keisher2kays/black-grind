import React from 'react'
import man from '../assets/trust.jpeg'
import paida from '../assets/paida.jpeg'
import keisher from '../assets/keisher.jpg'
import roy from '../assets/roy.jpeg'
const STAFF = [
  {
    initials: 'TM',
    name: 'Trust Mapfumo',
    role: 'Managing Director & Founder',
    bio: 'Holder of Executive Diplomas across Accounting, Auditing, Personnel Management and Data Analytics. Studied with CIS, ICPAZ and BCPM, and sits on various boards as an Advisor and Director.',
    photo: man,
  },
  {
    initials: 'PM',
    name: 'Paidamwoyo Mataruse',
    role: 'Operations Director',
    bio: 'Holder of a Degree in Public Administration from Midlands State University (MSU), with a Diploma in Digital Marketing and Social Media Management.',
    photo: paida ,
  },
  {
    initials: 'RG',
    name: 'Roy Gocha',
    role: 'Digital Marketing Officer',
    bio: 'Experienced in social media management, content creation and marketing, alongside administrative operations that keep client campaigns running smoothly.',
    photo: roy,
  },
  {
    initials: 'ES',
    name: 'Keisher Katerere',
    role: 'Software Engineer & Developer',
    bio: 'Full-stack developer specializing in React, Node.js and MongoDB, with marketing and data analytics rounding out the skill set.',
    photo: keisher,
  },
]

function Team() {
  return (
    <section className="team" id="team">
      <div className="section__inner team__intro">
        <p className="eyebrow">Our Key Staff</p>
        <div className="about__heading-wrap">
          <span className="about__heading-rule" />
          <h2 className="about__heading">
            THE PEOPLE BEHIND THE <span className="text-cyan">BLACK GRIND</span>
          </h2>
        </div>
        <p className="about__lead">
          Our lifeblood stream a team of strategists, operators and builders
          working together to turn your brand's ambitions into measurable results.
        </p>
      </div>

      <div className="section__inner team__grid">
        {STAFF.map((person) => (
         <div className="staff-card" key={person.initials}>
  <div className="staff-card__avatar">
    <img src={person.photo} alt={person.name} />
  </div>
  <div className="staff-card__body">
    <h3 className="staff-card__name">{person.name}</h3>
    <p className="staff-card__role">{person.role}</p>
    <p className="staff-card__bio">{person.bio}</p>
  </div>
</div>
        ))}
      </div>
    </section>
  )
}

export default Team