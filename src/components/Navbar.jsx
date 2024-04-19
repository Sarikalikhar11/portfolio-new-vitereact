import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a
            className="navbar-brand text-warning fs-3"
            href="/"
            style={{ fontFamily: 'Lobster', color: '#f6460b' }}
          >
            Sarika
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse menu-item"
            id="navbarSupportedContent"
          >
            <div className="navbar-nav gap-5 me-auto mb-2 mb-lg-0">
              <a
                className="active text-warning fw-bold text-decoration-none link-underline-warning"
                style={{
                  ':hover': {
                    color: '#fd7e14',
                  },
                }}
                href="/"
              >
                Home
              </a>
              <a
                className="text-black text-decoration-none"
                href="/about"
                style={{
                  ':hover': {
                    color: '#fd7e14',
                  },
                }}
              >
                About
              </a>
              <a className="text-black text-decoration-none" href="/expertise">
                Expertise
              </a>
              <a className="text-black text-decoration-none" href="/portfolio">
                Portfolio
              </a>
              <a className="text-black text-decoration-none" href="/services">
                Services
              </a>
              <a className="text-black text-decoration-none" href="/contact">
                Contact
              </a>
            </div>
            <form className="d-flex" role="search">
              <button
                className="btn btn-outline-warning text-black fw-bold"
                type="submit"
              >
                Download CV
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
