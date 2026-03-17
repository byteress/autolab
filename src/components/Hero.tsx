import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero bg-asphalt">
      <div className="container text-center text-md-start mt-5">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div
              className="d-inline-block px-3 py-1 mb-3 border border-orange text-orange"
              style={{ background: 'rgba(234, 88, 12, 0.1)', fontFamily: 'Oswald', letterSpacing: '2px' }}
            >
              PAMPANGA'S PREMIER RETROFITTERS
            </div>
            <h1 className="display-2 fw-bold mb-4">
              FRUSTRATED WITH <br />
              <span className="text-orange">OUTDATED</span> TECH?
            </h1>
            <p className="lead text-light mb-5 fs-4" style={{ maxWidth: '600px' }}>
              Precision Headlight Retrofits &amp; Android Headunit Installations. Clean wiring. Factory
              fit finish. Zero guesswork.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <a href="#booking" className="btn btn-orange btn-lg px-5 py-3">
                Schedule Upgrade
              </a>
              <a href="#services" className="btn btn-outline-steel btn-lg px-5 py-3">
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
