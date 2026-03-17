const Promo = () => (
  <section id="promo" className="py-20 bg-[#050505]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden border border-gray-700 p-12 sm:p-16 text-center bg-gradient-to-br from-[#111] to-[#1a1a1a]">
          {/* Top accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1 bg-brand-orange"
            style={{ boxShadow: '0 0 15px rgba(234, 88, 12, 0.7)' }}
          />

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide">
            FREE <span className="text-brand-orange">DEMON EYES!</span>
          </h2>
          <p className="font-body text-gray-300 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Get FREE Demon Eyes (Purple, Amber, Blue, Ice Blue, or White) with every Headlight
            Retrofit package.
          </p>
          <a
            href="#booking"
            className="inline-block font-heading font-bold tracking-widest px-10 py-4 text-base bg-brand-orange text-white border-2 border-brand-orange hover:bg-transparent hover:text-brand-orange transition-all duration-300 hover:-translate-y-0.5"
          >
            Claim Offer
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Promo;
