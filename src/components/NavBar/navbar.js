import React from "react";
import './navbar.css';
import { NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar mb-3">
            <div className="navbar-title">
                <NavLink to="/home" className="custom-link"><h1><b>IU BEHAVIORAL SCIENCE LABORATORY</b></h1></NavLink>
            </div>         
            <div className="navbar-items">
                <NavLink to="/home" className="custom-link desktopMenuListItem">Home</NavLink>
                <NavLink to="/research" className="custom-link desktopMenuListItem">Research</NavLink>
                <NavLink to="/publications" className="custom-link desktopMenuListItem ">Publications</NavLink>
                <NavLink to="/team" className="custom-link desktopMenuListItem">Team</NavLink>
                <NavLink to="/facilities" className="custom-link desktopMenuListItem">Facilities</NavLink>
                <NavLink to="/joinus" className="custom-link desktopMenuListItem ">Join Us</NavLink>
            </div>
                
        </nav>
    )
}

export default Navbar;



/*
import logo from '../../assets/logo.png';
<img src={logo} alt="Logo" className="logo "/>

*/