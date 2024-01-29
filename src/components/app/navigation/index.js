import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

export function Navbar(){
    return(
        <div className='sticky-top'>
            <nav className='navbar navbar-expand-lg blur'>
                <div className="container-fluid">
                    <a className="navbar-brand link-danger" href="#1">Nir1</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <NavLink href="#1" title="Home" color="red"/>
                            <NavLink href="#2" title="Projects" color="cyan"/>
                            <NavLink href="#3" title="Socials" color="vista"/>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
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
        // (link.id === activeLink ? " active_item" : "")
        <li className="nav-item">
            <span className="nav-link">
                <a className={className + (active ? " active-link " : "")} href={props.href} onClick={() => handleClick()}>
                    {props.title}
                </a>
            </span>
        </li>
    );
}