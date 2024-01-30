import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

export function Navbar(){
    return(
        <div className='sticky-top'>
            <nav className='navbar navbar-expand-lg blur'>
                <div className="container-fluid">
                    <Link className="navbar-brand link-light" to="/Home">Nir1</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <NavLinkList/>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

function NavLinkList(props){
    const links = [
        <NavLink to="/Home" title="Home" color="light"/>,
        <NavLink to="/Projects" title="Projects" color="light"/>,
        <NavLink to="/Socials" title="Socials" color="light"/>
    ]

    return (
      <>
        {
            links.map((link) => {
                return(
                    <> {link} </>
                )
            })
        }
      </>  
    );
}

function NavLink(props){
    const color = useState(props.color + "-text ");

    const [active, setActive] = useState(false);
    const [className, setClassName] = useState("link-offset-2 link-underline-light link-underline-opacity-0 link-underline-opacity-100-hover " + color);

    const handleClick = () => {
        console.log(active);
        console.log(className);
        active ? 
            setClassName("link-offset-2 link-underline-light link-underline-opacity-100 " + color) :
            setClassName("link-offset-2 link-underline-light link-underline-opacity-0 link-underline-opacity-100-hover " + color)
        setActive(!active);
    }

    return(
        <li className="nav-item">
            <span className="nav-link">
                <Link className={className + (active ? " active-link " : "")} to={props.to} onClick={() => handleClick()}>
                    {props.title}
                </Link>
            </span>
        </li>
    );
}