import react, { Component } from "react";
import { Link } from 'react-router-dom';


class Menyu extends Component {

    render() {
        return (
            <>
                <nav className="navbar p-0 navbar-expand-lg border-bottom border-secondary-5 sticky-lg-top fixed-top">
                    <div className="container">
                        <a className="navbar-brand text-white p-3" href="#">
                            <h3>Vafa Shukurova</h3>
                        </a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">About</Link></li>

                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/portfolio"> Portfolio</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active " aria-current="page" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Menyu;