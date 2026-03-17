import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'The Lab', href: '#services', section: 'services' },
  { label: 'Promos', href: '#promo', section: 'promo' },
  { label: 'Recent Builds', href: '#work', section: 'work' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      let current = '';
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.getAttribute('id') ?? '';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-brand-orange ${
        scrolled
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg'
          : 'bg-brand-dark/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={closeMenu}
            className="font-heading text-2xl sm:text-3xl font-bold tracking-widest text-white hover:text-brand-orange transition-colors"
            style={{ textShadow: '0 0 10px rgba(234,88,12,0.5)' }}
          >
            1625 <span className="text-brand-orange">AUTOLAB</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href, section }) => (
              <a
                key={section}
                href={href}
                onClick={closeMenu}
                className={`relative font-heading font-semibold tracking-widest px-4 py-2 text-sm transition-colors duration-300 group ${
                  activeSection === section ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-[3px] bg-brand-orange transition-all duration-300 ${
                    activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
            <a
              href="#booking"
              onClick={closeMenu}
              className="ml-4 font-heading font-bold tracking-widest text-sm px-6 py-2.5 bg-brand-orange text-white border-2 border-brand-orange hover:bg-transparent hover:text-brand-orange transition-all duration-300"
            >
              Book A Bay
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-brand-orange p-2"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-800 pb-4">
            {NAV_LINKS.map(({ label, href, section }) => (
              <a
                key={section}
                href={href}
                onClick={closeMenu}
                className={`block font-heading font-semibold tracking-widest py-3 px-4 text-sm transition-colors ${
                  activeSection === section
                    ? 'text-brand-orange'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={closeMenu}
              className="block mt-3 mx-4 font-heading font-bold tracking-widest text-sm text-center px-6 py-3 bg-brand-orange text-white border-2 border-brand-orange"
            >
              Book A Bay
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
