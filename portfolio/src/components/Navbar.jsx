import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <Link to="/projects"><button id="nav-button">Projects</button></Link>
            <Link to="/about"><button id="nav-button">About</button></Link>
            <Link to="/contact"><button id="nav-button">Contact</button></Link>
        </nav>
    )
}

export default Navbar;