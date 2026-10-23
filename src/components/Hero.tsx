import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { isDark } = useTheme();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-20 overflow-hidden" style={{ marginTop: '-72px' }}>
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 pt-32 pb-[40px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-bold tracking-wider uppercase"
                style={{
                  borderColor: isDark ? 'rgba(206,150,53,0.3)' : 'rgba(206,150,53,0.4)',
                  color: isDark ? '#a3a3a3' : '#525252',
                  fontFamily: "'Courier New', monospace",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-[#CE9635]" />
                Available for Work
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4"
                style={{
                  color: isDark ? '#e5e5e5' : '#1a1a1a',
                  fontFamily: "'Courier New', monospace",
                  letterSpacing: '-0.02em',
                }}
              >
                Crafting scalable{' '}
                <span className="text-[#CE9635] whitespace-nowrap">software solutions.</span>
              </h1>

              <p
                className="text-base sm:text-lg font-bold tracking-wide text-[#CE9635] mb-4"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                Full-stack developer specializing in clean architecture, high-performance
                web apps, and intuitive user experiences.
              </p>

              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{
                  color: isDark ? '#a3a3a3' : '#525252',
                  fontFamily: "'Courier New', monospace",
                }}
              >
                I build practical web solutions that solve real problems — from e-commerce to
                student management systems. NQF6 ICT Applications Development graduate, always
                debugging, always learning. Open to internships and junior roles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/assets/Mosa_Potsane_Resume.pdf"
                download="Mosa_Potsane_Resume.pdf"
                className="px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold tracking-wide rounded text-black bg-[#CE9635] transition-all duration-300 hover:shadow-[0_0_30px_rgba(206,150,53,0.5)] hover:scale-105 text-center"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                Download Resume
              </a>

              <button
                onClick={() => scrollTo('#projects')}
                className={`px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold tracking-wide rounded border-2 border-[#CE9635] transition-all duration-300 ${
                  isDark ? 'text-[#CE9635] hover:bg-[#CE9635]/10' : 'text-[#CE9635] hover:bg-[#CE9635]/5'
                } hover:shadow-[0_0_20px_rgba(206,150,53,0.3)]`}
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                View My Work
              </button>
            </div>

            <div className="flex items-center gap-4 pt-1">
              {[
                { icon: Github, href: 'https://github.com/notoriY2', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/mosa-potsane-b029b7214/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:mosapotsane700@gmail.com', label: 'Email' },
              ].map(social => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`p-3 rounded border transition-all duration-300 hover:bg-[#CE9635] hover:border-[#CE9635] hover:text-white group ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                    style={{ borderColor: isDark ? 'rgba(206,150,53,0.3)' : 'rgba(206,150,53,0.4)' }}
                  >
                    <Icon size={18} className="group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: animated MP badge */}
          <div className="flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]">
              <div
                className="absolute inset-0 rounded-full opacity-30"
                style={{
                  background: 'radial-gradient(circle, rgba(206,150,53,0.4) 0%, transparent 70%)',
                  animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                }}
              />

              <div
                className="absolute inset-0 flex items-center justify-center rounded-full overflow-hidden"
                style={{ animation: 'float 4s ease-in-out infinite' }}
              >
                <div
                  className="w-[90%] h-[90%] rounded-full flex items-center justify-center font-black text-6xl sm:text-7xl lg:text-8xl text-white select-none"
                  style={{
                    background: 'linear-gradient(135deg, #CE9635 0%, #C04D30 100%)',
                    boxShadow: isDark
                      ? '0 0 50px rgba(206,150,53,0.4)'
                      : '0 0 40px rgba(206,150,53,0.25)',
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  MP
                </div>
              </div>

              <div
                className="absolute inset-0 rounded-full border-4 border-[#CE9635]"
                style={{ opacity: 0.2, animation: 'spin-slow 8s linear infinite reverse' }}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4 animate-bounce-slow">
          <button
  onClick={() =>
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
  }
  aria-label="Scroll to bottom of page"
  className={`flex items-center justify-center w-10 h-10 rounded-full border transition-colors duration-200 ${
    isDark ? 'border-[#CE9635]/30 text-gray-400' : 'border-[#CE9635]/40 text-gray-500'
  }`}
>
            <ArrowDown size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
