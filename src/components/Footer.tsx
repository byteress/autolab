const Footer = () => (
  <footer className="py-6 border-t border-gray-900 bg-[#050505]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading font-bold tracking-widest text-gray-500 text-sm uppercase">
          &copy; 2026 1625 Auto Lab.
        </p>
        <nav className="flex gap-6">
          {['The Lab', 'Promos', 'Recent Builds', 'Book A Bay'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="font-heading text-xs tracking-widest text-gray-600 hover:text-brand-orange transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </nav>
        <p className="font-mono text-xs text-gray-600">
          System architected by{' '}
          <a
            href="https://byteress.xyz"
            className="text-brand-orange hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Bitressium
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
