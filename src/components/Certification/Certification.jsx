import Icon from '../Icon/Icon'
import SectionHeader from '../SectionHeader/SectionHeader'
import './Certification.css'

function Certification() {
  return (
    <section className="certification-section section-pad" id="certification">
      <div className="section-container certification-card">
        <div>
          <SectionHeader eyebrow="Certification" title="Java Full Stack Development">
            Currently pursuing professional training at JSpiders with hands-on exposure to
            full-stack concepts and Java ecosystem fundamentals.
          </SectionHeader>
        </div>
        <div className="cert-badge" aria-hidden="true">
          <Icon name="award" size={54} />
          <span>JSpiders</span>
        </div>
      </div>
    </section>
  )
}

export default Certification
