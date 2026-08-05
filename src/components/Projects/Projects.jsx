import { projects } from '../../data'
import Icon from '../Icon/Icon'
import SectionHeader from '../SectionHeader/SectionHeader'
import './Projects.css'

function Projects() {
  return (
    <section className="projects-section section-pad" id="projects">
      <div className="section-container">
        <SectionHeader eyebrow="Mini Projects" title="Mini projects with practical learning goals">
          Each project reflects hands-on practice with responsive layouts, React components, and
          user-focused workflows.
        </SectionHeader>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-topline">
                <span>{project.category}</span>
                <Icon name="code" />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href={project.liveUrl || '#contact'} target={project.liveUrl ? '_blank' : undefined} rel={project.liveUrl ? 'noreferrer' : undefined}>
                  {project.liveUrl ? 'Live Demo' : 'Discuss Project'}
                  <Icon name="external" size={17} />
                </a>
                <a href={project.repoUrl || '#contact'} target={project.repoUrl ? '_blank' : undefined} rel={project.repoUrl ? 'noreferrer' : undefined}>
                  {project.repoUrl ? 'GitHub' : 'Request Demo'}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
