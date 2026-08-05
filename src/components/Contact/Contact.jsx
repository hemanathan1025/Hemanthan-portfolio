import { owner } from '../../data'
import Icon from '../Icon/Icon'
import SectionHeader from '../SectionHeader/SectionHeader'
import './Contact.css'

function Contact() {
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="section-container contact-grid">
        <div>
          <SectionHeader eyebrow="Contact" title="Let's build something useful">
            I am open to frontend developer roles, internships, and entry-level opportunities in the IT
            industry.
          </SectionHeader>
        </div>

        <div className="contact-card">
          <a href={`mailto:${owner.email}`}>
            <Icon name="mail" />
            <span>
              Email
              <strong>{owner.email}</strong>
            </span>
          </a>
          <a href={`tel:${owner.phone.replaceAll(' ', '')}`}>
            <Icon name="phone" />
            <span>
              Phone
              <strong>{owner.phone}</strong>
            </span>
          </a>
          <a href={owner.linkedin} target="_blank" rel="noreferrer">
            <Icon name="linkedin" />
            <span>
              LinkedIn
              <strong>linkedin.com/in/hemanathan-r-s-b0a0123ab</strong>
            </span>
          </a>
          <a href={owner.github} target="_blank" rel="noreferrer">
            <Icon name="github" />
            <span>
              GitHub
              <strong>github.com/hemanathan1025</strong>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
