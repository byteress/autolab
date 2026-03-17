import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const handleScroll = () => {
      let current = '';
      sections.forEach((section) => {
        if (window.pageYOffset >= section.offsetTop - 100) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#hero" onClick={handleNavClick}>
          1625 <span className="text-orange">AUTOLAB</span>
        </a>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!collapsed}
          aria-label="Toggle navigation"
          onClick={() => setCollapsed((prev) => !prev)}
        >
          <i className="fa-solid fa-bars text-orange fs-2"></i>
        </button>
        <div className={`collapse navbar-collapse${collapsed ? '' : ' show'}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a
                className={`nav-link${activeSection === 'services' ? ' active' : ''}`}
                href="#services"
                onClick={handleNavClick}
              >
                The Lab
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link${activeSection === 'promo' ? ' active' : ''}`}
                href="#promo"
                onClick={handleNavClick}
              >
                Promos
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link${activeSection === 'work' ? ' active' : ''}`}
                href="#work"
                onClick={handleNavClick}
              >
                Recent Builds
              </a>
            </li>
            <li className="nav-item ms-lg-4 mt-3 mt-lg-0">
              <a
                className="btn btn-orange px-4 py-2"
                href="#booking"
                onClick={handleNavClick}
              >
                Book A Bay
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
