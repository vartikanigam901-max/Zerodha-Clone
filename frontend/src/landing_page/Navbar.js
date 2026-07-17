import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg border-bottom sticky-top" style={{ backgroundColor: "#ffff" }}>
            <div class="container p-2">
                <Link class="navbar-brand" to="/"><img src='media/images/logo.svg' alt='logo' style={{ width: "25%" }} /></Link>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <form class="d-flex" role="search">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/login">Login</Link>
                            </li>

                            <li class="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active" to="/products">Product</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active"to="/pricing">Pricing</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active" to="/support">Support</Link>
                            </li>

                            <li className="nav-item ms-3">
                                <Link className="nav-link" href="#">
                                    <i className="fa-solid fa-bars"></i>
                                </Link>
                            </li>


                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;