import { education } from '../../data'
import Icon from '../Icon/Icon'
import SectionHeader from '../SectionHeader/SectionHeader'
import './Education.css'

function Education() {
  return (
    <section className="education-section section-pad" id="education">
      <div className="section-container">
        <SectionHeader eyebrow="Education" title="Academic background">
          A steady foundation in computer applications with continuous hands-on learning.
        </SectionHeader>

        <div className="timeline">
          {education.map((item) => (
            <article className="timeline-item" key={`${item.title}-${item.year}`}>
              <div className="timeline-icon">
                <Icon name="graduation" />
              </div>
              <div className="timeline-card">
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.school}</p>
                {item.score && <strong>{item.score}</strong>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
