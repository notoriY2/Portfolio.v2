import { User, MapPin, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const FACTS = [
  { icon: User, label: 'Name', value: 'Mosa Potsane' },
  { icon: MapPin, label: 'Location', value: 'Colesberg, Northern Cape' },
  { icon: GraduationCap, label: 'Status', value: 'Recent Graduate — Open to Opportunities' },
];

export default function About() {
  const { isDark } = useTheme();
  const monoFont = { fontFamily: "'Courier New', monospace" };

  return (
    <section
      id="about"
      className="pt-20 sm:pt-28 lg:pt-32 pb-[10px]"
      style={{ backgroundColor: isDark ? '#000000' : '#ffffff', marginTop: '-70px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm tracking-widest uppercase text-[#CE9635] mb-4" style={monoFont}>
            Get to Know Me
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: isDark ? '#e5e5e5' : '#1a1a1a', ...monoFont }}
          >
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: isDark ? '#a3a3a3' : '#525252' }}
            >
              I build practical web solutions that solve real problems — from e-commerce
              platforms to student management systems. As an NQF6 ICT Applications
              Development graduate, I enjoy debugging, learning new tools, and contributing
              to open-source projects. I'm currently available for internships and junior
              development roles.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {FACTS.map(fact => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.label}
                  className="flex items-start gap-4 p-5 rounded-lg border transition-all duration-300 hover:border-[#CE9635]/60"
                  style={{
                    backgroundColor: isDark ? 'rgba(18,18,18,0.6)' : 'rgba(245,245,245,0.5)',
                    borderColor: isDark ? 'rgba(206,150,53,0.2)' : 'rgba(206,150,53,0.3)',
                  }}
                >
                  <Icon size={20} className="text-[#CE9635] flex-shrink-0 mt-0.5" />
                  <div>
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-1"
                      style={{ color: isDark ? '#a3a3a3' : '#525252', ...monoFont }}
                    >
                      {fact.label}
                    </p>
                    <p style={{ color: isDark ? '#e5e5e5' : '#1a1a1a' }}>{fact.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
