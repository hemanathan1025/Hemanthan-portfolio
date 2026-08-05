import { useState } from 'react'
import { navLinks } from '../../data'
import Icon from '../Icon/Icon'
import './Navbar.css'

function Navbar({ darkMode, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          Hemanthan R S
        </a>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="icon-button" type="button" onClick={onToggleTheme} aria-label="Toggle dark mode">
            <Icon name={darkMode ? 'sun' : 'moon'} />
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
