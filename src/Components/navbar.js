import React from "react";
import { Link } from "react-router-dom";
import './CSS/navbar.css'

export default function Nav() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-0 py-3">
        <div className="container-xl">
          {/* <!-- Logo --> */}
          <a className="navbar-brand" href="#">
            <img
              src="https://preview.webpixels.io/web/img/logos/clever-primary.svg"
              className="h-8"
              alt="..."
            />
          </a>
          {/* <!-- Navbar toggle --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <!-- Collapse --> */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* <!-- Nav --> */}
            <div className="d-flex navbar-nav mx-lg-auto g-5">
              <Link className="nav-item nav-link active" to={'/'} aria-current="page">
                Home
              </Link>
              <Link className="nav-item nav-link" to={'/prepare'} >
                Prepare Yourself
              </Link>
              <Link className="nav-item nav-link" to={'/about'} >
                About Us
              </Link>
              <Link className="nav-item nav-link" to={'/contact'} >
                Contact Us
              </Link>
            </div>
            {/* <!-- Right navigation --> */}
            <div className="d-flex flex-row navbar-nav">

            <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
              <Link className="btn btn-sm btn-outline-dark w-full w-lg-auto" to={'/login'} >
                Sign in
              </Link>
            </div>
            {/* <!-- Action --> */}
            <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
              <Link to={'/register'} className="btn btn-sm btn-dark w-full w-lg-auto">
                Register
              </Link>
            </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
