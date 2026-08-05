import './SectionHeader.css'

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="section-header">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  )
}

export default SectionHeader
