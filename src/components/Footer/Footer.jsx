import { owner } from '../../data'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p>Copyright {new Date().getFullYear()} {owner.name}. All rights reserved.</p>
      <a href="#home">Back to top</a>
    </footer>
  )
}

export default Footer
