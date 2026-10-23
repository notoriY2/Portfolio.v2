import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const { isDark } = useTheme();
  const monoFont = { fontFamily: "'Courier New', monospace" };
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="w-full transition-colors duration-300 border-t border-dashed border-gray-800/20"
      style={{ backgroundColor: isDark ? '#000000' : '#f5f5f5' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12">
          {/* Brand + direct contact */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div
                className="h-12 w-12 rounded-full flex items-center justify-center font-black text-white"
                style={{ background: 'linear-gradient(135deg, #CE9635 0%, #C04D30 100%)' }}
              >
                MP
              </div>
              <span
                className="text-lg font-bold tracking-widest"
                style={{ color: isDark ? '#e5e5e5' : '#1a1a1a', ...monoFont }}
              >
                MOSA POTSANE
              </span>
            </div>

            <p className="text-sm leading-relaxed max-w-xs" style={{ color: isDark ? '#a3a3a3' : '#525252', ...monoFont }}>
              Full-stack developer building clean, high-performance web applications.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:mosapotsane700@gmail.com"
                className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-[#CE9635] w-fit"
                style={{ color: isDark ? '#a3a3a3' : '#525252', ...monoFont }}
              >
                <Mail size={16} className="text-[#CE9635]/80" />
                <span>mosapotsane700@gmail.com</span>
              </a>
              <a
                href="tel:+27635035882"
                className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-[#CE9635] w-fit"
                style={{ color: isDark ? '#a3a3a3' : '#525252', ...monoFont }}
              >
                <Phone size={16} className="text-[#CE9635]/80" />
                <span>+27 63 503 5882</span>
              </a>
              <a
                href="https://github.com/notoriY2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-[#CE9635] w-fit"
                style={{ color: isDark ? '#a3a3a3' : '#525252', ...monoFont }}
              >
                <Github size={16} className="text-[#CE9635]/80" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-6">
            <h3
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: isDark ? '#e5e5e5' : '#1a1a1a', ...monoFont }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className="text-sm transition-all duration-200 group flex items-center gap-1 w-fit hover:text-[#CE9635]"
                    style={{ color: isDark ? '#a3a3a3' : '#525252', ...monoFont }}
                  >
                    {link.label}
                    <span className="inline-block w-0 h-px bg-[#CE9635] transition-all duration-300 group-hover:w-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-6">
            <h3
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: '#CE9635', ...monoFont }}
            >
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/notoriY2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded border transition-all duration-300 hover:bg-[#CE9635] hover:border-[#CE9635] hover:text-white group"
                style={{ borderColor: isDark ? 'rgba(206,150,53,0.3)' : 'rgba(206,150,53,0.4)', color: isDark ? '#a3a3a3' : '#525252' }}
                aria-label="GitHub"
              >
                <Github size={18} className="group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/mosa-potsane-b029b7214/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded border transition-all duration-300 hover:bg-[#CE9635] hover:border-[#CE9635] hover:text-white group"
                style={{ borderColor: isDark ? 'rgba(206,150,53,0.3)' : 'rgba(206,150,53,0.4)', color: isDark ? '#a3a3a3' : '#525252' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:mosapotsane700@gmail.com"
                className="p-3 rounded border transition-all duration-300 hover:bg-[#CE9635] hover:border-[#CE9635] hover:text-white group"
                style={{ borderColor: isDark ? 'rgba(206,150,53,0.3)' : 'rgba(206,150,53,0.4)', color: isDark ? '#a3a3a3' : '#525252' }}
                aria-label="Email"
              >
                <Mail size={18} className="group-hover:text-white transition-colors" />
              </a>
            </div>
            <p className="text-sm" style={{ color: isDark ? '#a3a3a3' : '#525252' }}>
              Open to internships, junior roles, and freelance work.
            </p>
          </div>
        </div>

        <div
          className="h-px mb-8"
          style={{ backgroundColor: isDark ? 'rgba(206,150,53,0.25)' : 'rgba(206,150,53,0.4)' }}
        />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs tracking-widest text-center sm:text-left"
            style={{ color: isDark ? '#525252' : '#737373', ...monoFont }}
          >
            © {currentYear} MOSA POTSANE. BUILT WITH REACT &amp; TAILWIND.
          </p>

          <div className="flex items-center gap-2 select-none">
            <div className="w-1.5 h-1.5 rounded-full bg-[#CE9635] animate-pulse shadow-[0_0_8px_#CE9635]" />
            <span
              className="text-xs tracking-widest uppercase font-bold"
              style={{ color: isDark ? '#525252' : '#737373', ...monoFont }}
            >
              Available for Work
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
