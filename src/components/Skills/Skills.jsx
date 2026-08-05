import { skillGroups } from '../../data'
import Icon from '../Icon/Icon'
import SectionHeader from '../SectionHeader/SectionHeader'
import './Skills.css'

function Skills() {
  return (
    <section className="skills-section section-pad" id="skills">
      <div className="section-container">
        <SectionHeader eyebrow="Skills" title="Tools I use to build responsive products">
          A focused stack across frontend fundamentals, React UI development, and backend learning.
        </SectionHeader>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-icon">
                <Icon name={group.icon} />
              </div>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
