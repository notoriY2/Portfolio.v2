import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed left-3 right-3 z-50 max-w-7xl mx-auto rounded-xl transition-all duration-300 ${
        scrolled ? 'top-2.5' : 'top-3 xl:top-5'
      } ${
        scrolled
          ? isDark
            ? 'bg-black/90 backdrop-blur-md border border-[#CE9635]/20 shadow-[0_4px_30px_rgba(206,150,53,0.08)]'
            : 'bg-white/90 backdrop-blur-md border border-[#CE9635]/30 shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
          : isDark
            ? 'bg-black/40 backdrop-blur-sm border border-white/5'
            : 'bg-white/40 backdrop-blur-sm border border-black/5'
      }`}
    >
      <nav className="w-full px-3 sm:px-6 xl:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 xl:h-24 transition-all duration-300">
          {/* Logo / brand mark */}
          <div
            className="flex items-center gap-2 sm:gap-3 flex-shrink-0 cursor-pointer select-none"
            onClick={() => handleNavClick('#home')}
          >
            <div
  className="w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 rounded-full flex-shrink-0 flex items-center justify-center font-black text-sm sm:text-base xl:text-lg text-white transition-transform duration-300 hover:rotate-3"
  style={{
    background: 'linear-gradient(135deg, #CE9635 0%, #C04D30 100%)',
    boxShadow: '0 8px 20px rgba(206,150,53,0.25)',
    fontFamily: "'Courier New', monospace",
  }}
>
  MP
</div>
            <span
              className="font-bold tracking-widest text-[#CE9635] text-xs xs:text-sm sm:text-base xl:text-lg uppercase leading-tight whitespace-nowrap"
              style={{ fontFamily: "'Courier New', monospace", letterSpacing: '0.12em' }}
            >
              Mosa Potsane
            </span>
          </div>

          {/* Desktop nav */}
          <ul className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 text-base font-semibold tracking-wide rounded transition-all duration-200 relative group ${
                    isDark ? 'text-gray-300 hover:text-[#CE9635]' : 'text-gray-600 hover:text-[#CE9635]'
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[#CE9635] transition-all duration-300 group-hover:w-4/5" />
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop controls */}
          <div className="hidden xl:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`relative w-14 h-7 rounded-full border transition-all duration-300 flex items-center px-1 ${
                isDark ? 'border-[#CE9635]/50 bg-black' : 'border-[#CE9635]/60 bg-gray-100'
              }`}
            >
              <span
                className={`absolute w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDark ? 'translate-x-0 bg-[#CE9635]' : 'translate-x-7 bg-[#CE9635]'
                }`}
              >
                {isDark ? <Moon size={11} className="text-black" /> : <Sun size={11} className="text-black" />}
              </span>
            </button>

            <button
              onClick={() => handleNavClick('#contact')}
              className="px-6 py-2.5 text-base font-bold tracking-wide text-[#CE9635] border border-[#CE9635] rounded transition-all duration-300 hover:bg-[#CE9635] hover:text-black shadow-[0_0_12px_rgba(206,150,53,0.25)] hover:shadow-[0_0_20px_rgba(206,150,53,0.5)]"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Hire Me
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex xl:hidden items-center gap-1.5 sm:gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`w-11 h-6 rounded-full border flex items-center px-0.5 transition-all duration-300 ${
                isDark ? 'border-[#CE9635]/40 bg-black' : 'border-[#CE9635]/40 bg-gray-100'
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 bg-[#CE9635] ${
                  isDark ? 'translate-x-0' : 'translate-x-5'
                }`}
              >
                {isDark ? <Moon size={9} className="text-black" /> : <Sun size={9} className="text-black" />}
              </span>
            </button>

            <button
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
              className="p-2 rounded transition-all active:scale-95 text-[#CE9635] hover:bg-[#CE9635]/10"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`xl:hidden overflow-y-auto transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-[75vh] opacity-100 pb-5' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="h-px w-full bg-[#CE9635]/20 mb-2" />
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-4 py-3 text-base font-semibold tracking-wide rounded transition-all duration-150 active:bg-[#CE9635]/20 ${
                  isDark
                    ? 'text-gray-300 hover:text-[#CE9635] hover:bg-[#CE9635]/10'
                    : 'text-gray-600 hover:text-[#CE9635] hover:bg-[#CE9635]/10'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="px-2 pt-4">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full py-3.5 text-base font-bold text-center text-black rounded-lg transition-all duration-300 active:scale-95 shadow-[0_0_15px_rgba(206,150,53,0.3)]"
style={{ background: 'linear-gradient(135deg, #CE9635 0%, #C04D30 100%)' }}
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
