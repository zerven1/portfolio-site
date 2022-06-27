import './index.scss'
import {Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-t6.png'
import LogoSubtitle from '../../assets/images/logo_sub3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser,faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link to="/" className='logo'>
            <img src={LogoS} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan"/>
        </Link>
        <nav>
            <NavLink exact="true" className={({ isActive }) => (isActive ? " active" : "")} to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4d"/>
            </NavLink>
            <NavLink exact="true" className={({ isActive }) => "about-link" + (isActive ? " active" : "")}  to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4d"/>
            </NavLink>
            <NavLink exact="true" className={({ isActive }) => "contact-link" +(isActive ? " active" : "")}  to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.google.com">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.google.com">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4d"/>
                </a>
            </li>
        </ul>
    </div>
)
    


export default Sidebar