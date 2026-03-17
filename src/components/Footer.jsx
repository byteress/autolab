import React from 'react';

const Footer = () => {
  return (
    <footer
      className="py-4 text-center text-secondary border-top border-dark"
      style={{ background: '#050505' }}
    >
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-0 fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>
          &copy; 2026 1625 Auto Lab.
        </p>
        <p className="mb-0 font-monospace fs-6 mt-2 mt-md-0">
          System architected by{' '}
          <a
            href="https://byteress.xyz"
            className="text-orange text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            Bitressium
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
