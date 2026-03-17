import React from 'react';

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1600705591462-80ba4e851d7e?q=80&w=600&auto=format&fit=crop',
    alt: 'Headlight',
    caption: '> Ice Blue Demon Eyes. Clean cutoff. 💯',
  },
  {
    src: 'https://images.unsplash.com/photo-1544829728-e5cb9eedc20e?q=80&w=600&auto=format&fit=crop',
    alt: 'Dashboard',
    caption: '> Android Headunit fitted. Wireless Carplay active. 🚀',
  },
  {
    src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=600&auto=format&fit=crop',
    alt: 'Car Front',
    caption: '> DRL and Foglights aligned. Ready for delivery. 🔧',
  },
];

const GalleryCard = ({ src, alt, caption }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div className="col-md-4">
      <div className="card border-0 rounded-0 bg-transparent">
        <img
          src={src}
          className="img-fluid border border-secondary"
          alt={alt}
          style={{ opacity: hovered ? 1 : 0.8, transition: 'opacity 0.3s' }}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
        />
        <div className="pt-3">
          <p className="text-light fs-6 font-monospace" style={{ color: '#aaa' }}>
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section id="work" className="py-5 bg-asphalt">
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-end mb-5 border-bottom border-dark pb-3">
          <div>
            <h2 className="fw-bold m-0 display-6">
              LATEST <span className="text-orange">BUILDS</span>
            </h2>
            <div className="section-title-line mt-3"></div>
          </div>
          <a
            href="https://www.facebook.com/1625autolab"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-steel d-none d-md-block"
          >
            <i className="fa-brands fa-facebook me-2"></i>Follow 1625
          </a>
        </div>
        <div className="row g-4">
          {galleryItems.map((item) => (
            <GalleryCard key={item.alt} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
