import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Resume from '../assets/Frontend-new.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const home = useRef(null);
  const about = useRef(null);
  const expertise = useRef(null);
  const portfolio = useRef(null);
  const services = useRef(null);
  const contact = useRef(null);

  const scrollToPage = (ele) => {
    window.scroll({
      top: ele.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link
            className="navbar-brand text-warning fs-3"
            to="/"
            style={{ fontFamily: 'Lobster', color: '#f6460b' }}
          >
            Sarika
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
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
            <div
              className={`${
                isOpen ? 'block' : 'hidden'
              } navbar-nav gap-5 me-auto mb-2 mb-lg-0`}
            >
              <Link
                onClick={() => scrollToPage(home)}
                className="active text-warning fw-bold text-decoration-none link-underline-warning"
                style={{
                  ':hover': {
                    color: '#fd7e14',
                  },
                }}
                ref={home}
                to="/"
              >
                Home
              </Link>
              <Link
                onClick={() => scrollToPage(about)}
                className="text-black text-decoration-none"
                to="/about"
                style={{
                  ':hover': {
                    color: '#fd7e14',
                  },
                }}
                ref={about}
              >
                About
              </Link>
              <Link
                onClick={() => scrollToPage(expertise)}
                className="text-black text-decoration-none"
                to="/expertise"
                ref={expertise}
              >
                Expertise
              </Link>
              <Link
                onClick={() => scrollToPage(portfolio)}
                className="text-black text-decoration-none"
                to="/portfolio"
                ref={portfolio}
              >
                Portfolio
              </Link>
              <Link
                onClick={() => scrollToPage(services)}
                className="text-black text-decoration-none"
                to="/services"
                ref={services}
              >
                Services
              </Link>
              <Link
                onClick={() => scrollToPage(contact)}
                className="text-black text-decoration-none"
                to="/contact"
                ref={contact}
              >
                Contact
              </Link>
            </div>

            <Link to={Resume} target="_blank" rel="noreferrer">
              <button
                className="btn btn-outline-warning text-black fw-bold"
                type="submit"
              >
                Download CV
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
