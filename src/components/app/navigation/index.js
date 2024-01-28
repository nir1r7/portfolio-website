import 'bootstrap/dist/css/bootstrap.css';

export function Navbar(){

    return(
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#1">Nir1</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <span className="nav-link">
                                    <a class="link-offset-2 link-underline-dark link-underline-opacity-0 link-underline-opacity-100-hover link-dark" href="#2">
                                        Home
                                    </a>
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link">
                                    <a class="link-offset-2 link-underline-dark link-underline-opacity-0 link-underline-opacity-100-hover link-dark" href="#3">
                                        Projects
                                    </a>
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link">
                                    <a class="link-offset-2 link-underline-dark link-underline-opacity-0 link-underline-opacity-100-hover link-dark" href="#4">
                                        Socials
                                    </a>
                                </span>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}