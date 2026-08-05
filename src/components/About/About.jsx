import { aboutPoints } from '../../data'
import SectionHeader from '../SectionHeader/SectionHeader'
import './About.css'

function About() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="section-container about-grid">
        <div>
          <SectionHeader eyebrow="About me" title="Curious entry-level developer building practical web skills">
            I enjoy turning ideas into responsive interfaces and I am steadily expanding toward
            backend development.
          </SectionHeader>
        </div>

        <div className="about-card">
          {aboutPoints.map((point, index) => (
            <div className="about-point" key={point}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
