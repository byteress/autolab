import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-5 bg-asphalt">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">SERVICES OFFERED</h2>
          <div className="section-title-line mx-auto"></div>
        </div>

        <div className="row g-5 justify-content-center">
          <div className="col-lg-5 col-md-6">
            <div className="service-card p-5">
              <div className="mb-4 d-flex align-items-center gap-3 border-bottom border-dark pb-3">
                <i className="fa-solid fa-eye fs-1 text-orange"></i>
                <h3 className="fw-bold m-0">Headlights Retrofit</h3>
              </div>
              <ul>
                <li>
                  <i className="fa-solid fa-bolt"></i> Headlights &amp; Foglights Upgrade
                </li>
                <li>
                  <i className="fa-solid fa-bolt"></i> Angel &amp; Demon Eyes Installation
                </li>
                <li>
                  <i className="fa-solid fa-bolt"></i> DRL Installation &amp; Replacement
                </li>
                <li>
                  <i className="fa-solid fa-bolt"></i> Precision Laser Alignment
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-5 col-md-6">
            <div className="service-card p-5">
              <div className="mb-4 d-flex align-items-center gap-3 border-bottom border-dark pb-3">
                <i className="fa-solid fa-display fs-1 text-orange"></i>
                <h3 className="fw-bold m-0">Android Headunit</h3>
              </div>
              <ul>
                <li>
                  <i className="fa-solid fa-microchip"></i> Wireless Carplay &amp; Android Auto
                </li>
                <li>
                  <i className="fa-solid fa-microchip"></i> 360 Camera Integration
                </li>
                <li>
                  <i className="fa-solid fa-microchip"></i> Perfect Fitting OEM-style Frame
                </li>
                <li>
                  <i className="fa-solid fa-microchip"></i> Powerful Octacore Processing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
