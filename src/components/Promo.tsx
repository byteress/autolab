import React from 'react';

const Promo: React.FC = () => {
  return (
    <section id="promo" className="py-5" style={{ backgroundColor: '#050505' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              className="border border-secondary p-5 text-center position-relative overflow-hidden"
              style={{ background: 'linear-gradient(45deg, #111, #1a1a1a)' }}
            >
              <div
                className="position-absolute top-0 start-0 w-100"
                style={{
                  height: '4px',
                  background: 'var(--brand-orange)',
                  boxShadow: '0 0 15px var(--brand-orange)',
                }}
              ></div>
              <h2 className="display-4 fw-bold text-white mb-3">
                FREE <span className="text-orange">DEMON EYES!</span>
              </h2>
              <p className="fs-4 text-light mb-4" style={{ fontFamily: 'Roboto' }}>
                Get FREE Demon Eyes (Purple, Amber, Blue, Ice Blue, or White) with every Headlight
                Retrofit package.
              </p>
              <a href="#booking" className="btn btn-orange btn-lg px-5">
                Claim Offer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
