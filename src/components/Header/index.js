// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <span className="text">Wave</span>
    </div>
    <ul className="ul">
      <Link to="/">
        <li className="li">Home</li>
      </Link>
      <Link to="/about">
        <li className="li">About</li>
      </Link>
      <Link to="/contact">
        <li className="li">Contact</li>
      </Link>
    </ul>
  </nav>
)

export default Header
