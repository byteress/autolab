import { Eye, Monitor, Zap, Cpu } from 'lucide-react';
import type { ServiceCardProps } from '../types';

const ServiceCard = ({ icon, title, items }: ServiceCardProps) => (
  <div className="relative overflow-hidden bg-gradient-to-br from-brand-gray to-[#111] border border-brand-light-gray border-t-4 border-t-brand-orange group hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(234,88,12,0.1)] p-8 h-full">
    {/* Shine sweep effect */}
    <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-[-25deg] transition-all duration-500 group-hover:left-[150%]" />

    <div className="flex items-center gap-4 border-b border-gray-800 pb-4 mb-6">
      <span className="text-brand-orange text-4xl">{icon}</span>
      <h3 className="font-heading text-xl font-bold text-white tracking-wide">{title}</h3>
    </div>

    <ul className="space-y-3">
      {items.map(({ icon: itemIcon, label }) => (
        <li
          key={label}
          className="flex items-center gap-3 text-gray-400 font-body text-base border-b border-gray-900 pb-3 last:border-b-0"
        >
          <span className="text-brand-orange shrink-0">{itemIcon}</span>
          {label}
        </li>
      ))}
    </ul>
  </div>
);

const SERVICES: ServiceCardProps[] = [
  {
    icon: <Eye size={36} />,
    title: 'Headlights Retrofit',
    items: [
      { icon: <Zap size={16} />, label: 'Headlights & Foglights Upgrade' },
      { icon: <Zap size={16} />, label: 'Angel & Demon Eyes Installation' },
      { icon: <Zap size={16} />, label: 'DRL Installation & Replacement' },
      { icon: <Zap size={16} />, label: 'Precision Laser Alignment' },
    ],
  },
  {
    icon: <Monitor size={36} />,
    title: 'Android Headunit',
    items: [
      { icon: <Cpu size={16} />, label: 'Wireless Carplay & Android Auto' },
      { icon: <Cpu size={16} />, label: '360 Camera Integration' },
      { icon: <Cpu size={16} />, label: 'Perfect Fitting OEM-style Frame' },
      { icon: <Cpu size={16} />, label: 'Powerful Octacore Processing' },
    ],
  },
];

const Services = () => (
  <section id="services" className="py-24 bg-brand-dark bg-asphalt">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4 tracking-wide">
          SERVICES OFFERED
        </h2>
        <div className="h-1 w-16 bg-brand-orange mx-auto shadow-orange-glow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
