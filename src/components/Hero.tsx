const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-hero-bg bg-center bg-cover border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="inline-block px-3 py-1 mb-6 border border-brand-orange text-brand-orange font-heading text-sm tracking-[3px]"
            style={{ background: 'rgba(234, 88, 12, 0.1)' }}
          >
            PAMPANGA&apos;S PREMIER RETROFITTERS
          </div>

          {/* Headline */}
          <h1
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
          >
            FRUSTRATED WITH <br />
            <span className="text-brand-orange">OUTDATED</span> TECH?
          </h1>

          {/* Sub-headline */}
          <p className="font-body text-gray-300 text-lg sm:text-xl mb-10 max-w-xl">
            Precision Headlight Retrofits &amp; Android Headunit Installations. Clean wiring. Factory
            fit finish. Zero guesswork.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#booking"
              className="font-heading font-bold tracking-widest text-center px-8 py-4 text-base bg-brand-orange text-white border-2 border-brand-orange hover:bg-transparent hover:text-brand-orange transition-all duration-300 hover:-translate-y-0.5"
            >
              Schedule Upgrade
            </a>
            <a
              href="#services"
              className="font-heading font-bold tracking-widest text-center px-8 py-4 text-base bg-transparent text-white border-2 border-gray-500 hover:border-white hover:bg-white hover:text-brand-dark transition-all duration-300 hover:-translate-y-0.5"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
