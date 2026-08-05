import { owner } from '../../data'
import profilePhoto from '../../assets/profile-photo.png'
import Icon from '../Icon/Icon'
import './Hero.css'

function Hero() {
  // Resume PDF file inside the public folder
  const resumeUrl = `${import.meta.env.BASE_URL}Hemanthan_RS_Resume .pdf`

  return (
    <section className="hero-section section-pad" id="home">
      <div className="hero-content">
        <div className="hero-copy reveal-up">
          <span className="status-pill">
            Open to Frontend Opportunities
          </span>

          <h1>
            Hi, I&apos;m <span>{owner.name}</span>
          </h1>

          <p className="typing-line">{owner.role}</p>

          <p className="hero-summary">
            I build clean, responsive web interfaces with React.js,
            Tailwind CSS, and a growing full-stack mindset.
          </p>

          <div className="hero-actions">
            <a
              className="primary-btn"
              href={resumeUrl}
              download="Hemanthan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="download" />
              Download Resume
            </a>

            <a className="secondary-btn" href="#projects">
              <Icon name="code" />
              View Projects
            </a>
          </div>

          <div className="social-row" aria-label="Social links">
            <a
              href={owner.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Icon name="linkedin" />
            </a>

            <a
              href={`mailto:${owner.email}`}
              aria-label="Send email"
            >
              <Icon name="mail" />
            </a>

            <a
              href={`tel:${owner.phone.replaceAll(' ', '')}`}
              aria-label="Call phone number"
            >
              <Icon name="phone" />
            </a>
          </div>
        </div>

        <div className="hero-visual reveal-up delay-1">
          <div className="profile-card">
            <div className="avatar-ring">
              <img
                src={profilePhoto}
                alt={`${owner.name} profile portrait`}
              />
            </div>

            <div>
              <p className="card-name">
                Frontend Developer
              </p>
            </div>

            <div className="mini-stats">
              <span>Responsive UI</span>
              <span>Problem Solver</span>
              <span>Quick Learner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero