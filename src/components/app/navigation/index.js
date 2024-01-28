import 'bootstrap/dist/css/bootstrap.css';


export function Navbar(){
    return(
        <div className='sticky-top'>
            <nav className='navbar navbar-expand-lg blur'>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#1">Nir1</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <NavLink href="#2" title="Home"/>
                            <NavLink href="#3" title="Projects"/>
                            <NavLink href="#4" title="Socials"/>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

function NavLink(props){
    return(
        <li className="nav-item">
            <span className="nav-link">
                <a className="link-offset-2 link-underline-dark link-underline-opacity-0 link-underline-opacity-100-hover link-dark" href={props.href}>
                    {props.title}
                </a>
            </span>
        </li>
    );
}