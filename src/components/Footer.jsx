import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col col-lg-12">
            <div className=" d-flex flex-wrap text-white justify-content-between align-items-center">
              <div>
                <p className="pt-3">
                  @2024 Sarika K Likhar <span>All Rights Reserved</span>
                </p>
              </div>
              <div className="d-flex gap-4 ">
                <a href="/about" className="text-decoration-none text-white">
                  About
                </a>
                <a href="/privacy" className="text-decoration-none text-white">
                  Privacy Policy
                </a>
                <a href="/licence" className="text-decoration-none text-white">
                  Licencing
                </a>
                <a href="/contact" className="text-decoration-none text-white">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
