import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import type { GalleryItemProps } from '../types';

const GALLERY_ITEMS: GalleryItemProps[] = [
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

const GalleryCard = ({ src, alt, caption }: GalleryItemProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="group relative overflow-hidden border border-gray-700">
      <img
        src={src}
        alt={alt}
        className={`w-full h-56 sm:h-64 object-cover transition-all duration-500 ${
          hovered ? 'opacity-100 scale-105' : 'opacity-70 scale-100'
        }`}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      />
      {/* Dark overlay with caption */}
      <div
        className={`absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="font-mono text-sm text-green-400">{caption}</p>
      </div>
    </div>
  );
};

const Gallery = () => (
  <section id="work" className="py-24 bg-brand-dark bg-asphalt">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between border-b border-gray-800 pb-6 mb-12">
        <div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-wide">
            LATEST <span className="text-brand-orange">BUILDS</span>
          </h2>
          <div className="h-1 w-16 bg-brand-orange mt-3 shadow-orange-glow" />
        </div>
        <a
          href="https://www.facebook.com/1625autolab"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 font-heading font-bold tracking-widest text-sm px-6 py-2.5 text-white border-2 border-gray-500 hover:border-white hover:bg-white hover:text-brand-dark transition-all duration-300"
        >
          <ExternalLink size={16} /> Follow 1625
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY_ITEMS.map((item) => (
          <GalleryCard key={item.alt} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
