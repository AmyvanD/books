import { Link } from 'react-router-dom';

import "./Navigation.css";

const Navigation = () => {
    return(
        <nav className="navigation">
            <p className="navigation__title">BookApp</p>
            <ul className="navigation__list">
                <li className="navigation__ListItem"><Link to="/" className="navigation__ListItem__Link">Home</Link></li>
                <li className="navigation__ListItem"><Link to="/aboutme" className="navigation__ListItem__Link">About</Link></li>
                <li className="navigation__ListItem"><Link to="/contact" className="navigation__ListItem__Link">Contact</Link></li>
                <li className="navigation__ListItem"><Link to="/login" className="navigation__ListItem__Link">Login</Link></li>
                <li className="navigation__ListItem"><Link to="/aanmelden" className="navigation__ListItem__Link">Aanmelden</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;