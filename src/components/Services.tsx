import { Code, Database, Smartphone, Globe, Palette, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SERVICES = [
  {
    title: 'Web Development',
    description: 'Building responsive and interactive web applications using modern frameworks like React, Next.js, and Vue.',
    icon: Code,
  },
  {
    title: 'Backend Development',
    description: 'Creating robust server-side solutions with Node.js, Express, and database integration for scalable applications.',
    icon: Database,
  },
  {
    title: 'Responsive Design',
    description: 'Crafting mobile-first, responsive interfaces that work seamlessly across all devices and screen sizes.',
    icon: Smartphone,
  },
  {
    title: 'API Integration',
    description: 'Integrating third-party APIs and building RESTful services to connect and enhance application functionality.',
    icon: Globe,
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive user interfaces with attention to accessibility, usability, and modern design principles.',
    icon: Palette,
  },
  {
    title: 'Performance Optimization',
    description: 'Optimizing application speed, reducing load times, and implementing best practices for a better user experience.',
    icon: Zap,
  },
];

export default function Services() {
  const { isDark } = useTheme();
  const monoFont = { fontFamily: "'Courier New', monospace" };

  return (
    <section
      id="services"
      className="pt-20 sm:pt-28 lg:pt-32 pb-[10px]"
      style={{ backgroundColor: isDark ? '#000000' : '#ffffff' , marginTop: '-90px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm tracking-widest uppercase text-[#CE9635] mb-4" style={monoFont}>
            What I Offer
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: isDark ? '#e5e5e5' : '#1a1a1a', ...monoFont }}
          >
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(service => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative rounded-lg backdrop-blur-sm border transition-all duration-300 hover:shadow-[0_0_30px_rgba(206,150,53,0.3)] hover:-translate-y-2 p-6 sm:p-8"
                style={{
                  backgroundColor: isDark ? 'rgba(18,18,18,0.6)' : 'rgba(255,255,255,0.4)',
                  borderColor: isDark ? 'rgba(206,150,53,0.2)' : 'rgba(206,150,53,0.3)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at center, rgba(206,150,53,0.15) 0%, transparent 70%)' }}
                />

                <div className="relative flex flex-col gap-4">
                  <div className="text-[#CE9635] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(206,150,53,0.4)]">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>

                  <h3
                    className="text-lg sm:text-xl font-semibold tracking-wide"
                    style={{ color: isDark ? '#e5e5e5' : '#1a1a1a', ...monoFont }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed" style={{ color: isDark ? '#a3a3a3' : '#525252' }}>
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
