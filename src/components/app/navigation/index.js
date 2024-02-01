import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


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
    const location = useLocation();
    const [linkId, setLinkId] = useState(0);

    const [links, setLinks] = useState([
        <NavLink to="/Home" title="Home" color="light" active="false"/>,
        <NavLink to="/Projects" title="Projects" color="light" active="false"/>,
        <NavLink to="/Socials" title="Socials" color="light" active="false"/>
    ]);

    React.useEffect(() => {
        console.log(location.pathname);

        for (let i = 0; i < links.length; i++){
            if (links[i].props.to === location.pathname){
                setLinkId(i);
                console.log(links[linkId]);
            }
        }

        // const temp = <NavLink to={location.pathname} title={location.pathname.substring(1)} color="light" active="true"/>
        
    }, [location]);

    return (
      <>
        {
            links.map((link) => {
                return(
                    <span key={link.props.to}> {link} </span>
                )
            })
        }
      </>  
    );
}

function NavLink(props){
    const location = useLocation();

    const active = props.active;
    const [className, setClassName] = useState("link-offset-2 link-underline-light link-underline-opacity-0 link-underline-opacity-100-hover ");

    React.useEffect(() => {
        active ? 
            setClassName("link-offset-2 link-underline-light link-underline-opacity-100 ") :
            setClassName("link-offset-2 link-underline-light link-underline-opacity-0 link-underline-opacity-100-hover ")
    }, [location])

    return(
        <li className="nav-item">
            <span className="nav-link">
                <Link className={className + (active ? " active-link " : "") + props.color + "-text "} to={props.to}>
                    {props.title}
                </Link>
            </span>
        </li>
    );
}