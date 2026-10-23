import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  X,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  FileText,
  Terminal,
  Layers,
} from 'lucide-react';

// Reuses the same image assets as Projects.tsx — drop these into src/assets before building.
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';
import img10 from '../assets/10.png';

type Category = 'all' | 'academic' | 'personal';

interface DocSection {
  heading: string;
  content: string[];
}

interface ShowcaseProject {
  id: string;
  title: string;
  category: 'academic' | 'personal';
  description: string;
  images: string[];
  tags: string[];
  github: string;
  live: string;
  documentation: {
    overview: string;
    sections: DocSection[];
  };
}

const PROJECTS: ShowcaseProject[] = [
  {
    id: 'notorious-store',
    title: 'Notorious Store',
    category: 'personal',
    description: 'A modern e-commerce web application inspired by Y2 streetwear culture.',
    images: [img9, img10],
    tags: ['TypeScript', 'React', 'CSS'],
    github: 'https://github.com/notoriY2/Notorious-Store',
    live: 'https://notorious-store.netlify.app/',
    documentation: {
      overview:
        'A personal storefront project built to practice e-commerce UI patterns — product grids, cart state, and responsive layout — around a streetwear aesthetic.',
      sections: [
        {
          heading: 'Tech & Architecture',
          content: [
            'Built with React and TypeScript for type-safe component structure.',
            'Custom CSS used for the layout and streetwear-inspired visual identity rather than a UI framework.',
            'Deployed as a static build on Netlify for fast, simple hosting.',
          ],
        },
        {
          heading: 'Store Experience',
          content: [
            'Product catalog layout with card-based browsing.',
            'Responsive design tested across mobile and desktop breakpoints.',
            'Focus on clean visual hierarchy over heavy e-commerce logic (no live payments wired up).',
          ],
        },
      ],
    },
  },
  {
    id: 'trackademy',
    title: 'Trackademy',
    category: 'academic',
    description:
      'A student academic performance and course management system for tertiary institutions.',
    images: [img8, img7],
    tags: ['TypeScript', 'Supabase', 'PLpgSQL'],
    github: 'https://github.com/notoriY2/Trackademy',
    live: 'https://trackademy-omega.vercel.app/',
    documentation: {
      overview:
        'A single-page application backed by Supabase (Postgres) that centralizes grade tracking, attendance, and exam eligibility for a tertiary institution use case.',
      sections: [
        {
          heading: 'Tech Stack & Data',
          content: [
            'Frontend built with React, TypeScript, and Vite; styled with Tailwind CSS.',
            'Supabase (Postgres) handles auth, relational data, and storage.',
            'Relational schema covers students, lecturers, courses, enrollments, and assessment marks.',
          ],
        },
        {
          heading: 'Key Features',
          content: [
            'Role-based views for admin, lecturer, and student accounts.',
            'Automated calculation of coursework totals against a 50% eligibility benchmark.',
            'PLpgSQL functions handle server-side grade and eligibility logic.',
          ],
        },
      ],
    },
  },
  {
    id: 'buddy',
    title: 'Buddy',
    category: 'academic',
    description: 'A social media and student management system built for university students.',
    images: [img6, img5],
    tags: ['PHP', 'JavaScript', 'CSS'],
    github: 'https://github.com/notoriY2/Buddy',
    live: 'https://buddysocials.page.gd/',
    documentation: {
      overview:
        'A dual-purpose platform combining a lightweight academic administration layer with a social feed for students, sharing one underlying database.',
      sections: [
        {
          heading: 'Tech & Structure',
          content: [
            'Server-rendered PHP backend with a relational SQL database.',
            'Vanilla JavaScript and CSS handle interactivity and layout on the frontend.',
            'Shared user records connect the academic and social sides of the platform.',
          ],
        },
        {
          heading: 'Core Features',
          content: [
            'Student and staff registration, course, and department administration.',
            'Social feed with posts, friend requests, and group pages.',
            'Basic academic dashboards for tracking enrollment and course distribution.',
          ],
        },
      ],
    },
  },
  {
    id: 'campus-care',
    title: 'Campus Care',
    category: 'academic',
    description:
      'A comprehensive solution for managing healthcare services on campus.',
    images: [img4, img3],
    tags: ['PHP', 'MySQL', 'CSS'],
    github: 'https://github.com/notoriY2/Campus-Care',
    live: 'https://campus-care.page.gd/',
    documentation: {
      overview:
        'A campus healthcare coordination platform unifying appointment scheduling, medical records, and role-based dashboards for patients and staff.',
      sections: [
        {
          heading: 'Tech & Data',
          content: [
            'Built with PHP and a MySQL relational database.',
            'Light/dark theme toggle for accessibility and comfort.',
            'Role-based access separates admin, healthcare staff, and patient views.',
          ],
        },
        {
          heading: 'Core Features',
          content: [
            'Appointment booking and medical record tracking per student/staff number.',
            'Vitals logging (height, weight, blood pressure, heart rate, temperature).',
            'Referral routing and basic medical inventory tracking for staff.',
          ],
        },
      ],
    },
  },
  {
    id: 'spu-united',
    title: 'SPU United',
    category: 'academic',
    description: 'A website built for a university football club, showcasing work in HTML5 and CSS.',
    images: [img2, img1],
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/notoriY2/SPU-United',
    live: 'https://spu-united.netlify.app/',
    documentation: {
      overview:
        'A static club website built to practice core HTML/CSS fundamentals and responsive layout without relying on a framework.',
      sections: [
        {
          heading: 'Tech & Structure',
          content: [
            'Hand-written semantic HTML5 and CSS3, no framework dependency.',
            'Vanilla JavaScript for small interactive touches (menu toggle, etc.).',
            'Deployed as a static site on Netlify.',
          ],
        },
        {
          heading: 'Content',
          content: [
            'Club branding, fixtures, and squad information laid out across a single-page site.',
            'Fully responsive layout tested across common mobile viewport sizes.',
          ],
        },
      ],
    },
  },
];

const TABS: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Academic', value: 'academic' },
  { label: 'Personal', value: 'personal' },
];

export default function Showcase() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<Category>('all');
  const [selected, setSelected] = useState<ShowcaseProject | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const monoFont = { fontFamily: "'Courier New', monospace" };

  useEffect(() => {
    setImageIndex(0);
  }, [selected]);

  // Lock background scroll while the modal is open (mobile-friendly).
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selected]);

  const filtered = activeTab === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === activeTab);

  const prevImage = () => {
    if (!selected) return;
    setImageIndex(prev => (prev === 0 ? selected.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    if (!selected) return;
    setImageIndex(prev => (prev === selected.images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 40) {
      delta > 0 ? prevImage() : nextImage();
    }
    setTouchStartX(null);
  };

  return (
    <section
      id="showcase"
      className="pt-20 sm:pt-28 lg:pt-32 pb-[10px]"
      style={{ backgroundColor: isDark ? '#000000' : '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm tracking-widest uppercase text-[#CE9635] mb-4" style={monoFont}>
            Case Studies
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: isDark ? '#e5e5e5' : '#1a1a1a', ...monoFont }}
          >
            Featured Showcase
          </h2>
        </div>

        {/* Tabs — horizontally scrollable on mobile so nothing wraps awkwardly */}
        <div className="mb-10 flex sm:justify-center gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
          {TABS.map(tab => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`shrink-0 px-5 py-2.5 rounded text-sm font-semibold tracking-wide transition-all duration-300 active:scale-95 ${
                activeTab === tab.value
                  ? 'bg-[#CE9635] text-black shadow-[0_0_20px_rgba(206,150,53,0.4)]'
                  : isDark
                    ? 'bg-transparent border border-[#CE9635]/40 text-gray-300'
                    : 'bg-transparent border border-[#CE9635]/40 text-gray-600'
              }`}
              style={monoFont}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {filtered.map(project => (
            <button
              key={project.id}
              onClick={() => setSelected(project)}
              className="group relative aspect-video overflow-hidden rounded-xl text-left transition-all duration-300 active:scale-[0.98] hover:shadow-[0_0_30px_rgba(206,150,53,0.3)] hover:-translate-y-1"
              style={{ backgroundColor: isDark ? '#121212' : '#f5f5f5' }}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5">
                <p className="font-mono text-[#CE9635] text-[10px] uppercase tracking-[0.2em] mb-1">
                  // {project.category}
                </p>
                <h3 className="text-white font-bold text-base sm:text-lg leading-tight" style={monoFont}>
                  {project.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full sm:max-w-3xl sm:max-h-[88vh] max-h-[92vh] overflow-hidden rounded-t-2xl sm:rounded-2xl shadow-2xl"
            style={{ backgroundColor: isDark ? '#0a0a0a' : '#ffffff' }}
            onClick={e => e.stopPropagation()}
          >
            <div
              className="sticky top-0 z-10 px-5 sm:px-6 py-4 flex justify-between items-center"
              style={{ backgroundColor: isDark ? '#0d0d0d' : '#f9f9f9' }}
            >
              <h3
                className="text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2"
                style={{ ...monoFont, color: '#CE9635' }}
              >
                <Terminal size={14} /> {selected.id}
              </h3>
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className={`p-2 -mr-2 rounded-full transition-colors ${
                  isDark ? 'text-gray-400 hover:bg-gray-900 hover:text-white' : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(92vh-64px)] sm:max-h-[calc(88vh-64px)] p-5 sm:p-8 space-y-6">
              {/* Image carousel — swipe-enabled on touch */}
              <div
                className="relative rounded-xl overflow-hidden flex items-center justify-center w-full"
                style={{ backgroundColor: isDark ? '#121212' : '#f5f5f5' }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={selected.images[imageIndex]}
                  alt={`${selected.title} preview`}
                  className="w-full h-auto object-contain select-none"
                  draggable={false}
                />
                {selected.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      aria-label="Previous image"
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 text-white active:scale-90 transition-transform"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={nextImage}
                      aria-label="Next image"
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 text-white active:scale-90 transition-transform"
                    >
                      <ChevronRight size={18} />
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-black/80 text-[10px] font-mono text-gray-300">
                      {imageIndex + 1} / {selected.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Info */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#CE9635]">
                  [{selected.category}]
                </span>
                <h4
                  className="text-xl sm:text-2xl font-bold tracking-tight mt-1"
                  style={{ ...monoFont, color: isDark ? '#ffffff' : '#000000' }}
                >
                  {selected.title}
                </h4>
                <p className="text-sm leading-relaxed mt-2" style={{ color: isDark ? '#d1d5db' : '#333333' }}>
                  {selected.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {selected.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded"
                    style={{
                      backgroundColor: isDark ? 'rgba(206,150,53,0.08)' : 'rgba(206,150,53,0.12)',
                      color: isDark ? '#CE9635' : '#8a6323',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Full-width tap targets on mobile */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={selected.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-3 rounded bg-[#CE9635] text-black active:scale-95 transition-transform font-mono"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-3 rounded active:scale-95 transition-transform font-mono ${
                    isDark ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  <Github size={14} /> Source Code
                </a>
              </div>

              {/* Documentation */}
              <div className="pt-4 border-t border-dashed" style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
                <h5
                  className="text-sm font-bold uppercase tracking-wide flex items-center gap-2 mb-3"
                  style={{ ...monoFont, color: isDark ? '#e5e5e5' : '#1a1a1a' }}
                >
                  <FileText size={14} className="text-[#CE9635]" /> Project Breakdown
                </h5>
                <p className="text-sm leading-relaxed mb-4" style={{ color: isDark ? '#9ca3af' : '#444444' }}>
                  {selected.documentation.overview}
                </p>
                <div className="space-y-4">
                  {selected.documentation.sections.map((section, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded border space-y-2"
                      style={{
                        backgroundColor: isDark ? 'rgba(206,150,53,0.05)' : 'rgba(206,150,53,0.05)',
                        borderColor: isDark ? 'rgba(206,150,53,0.15)' : 'rgba(206,150,53,0.2)',
                      }}
                    >
                      <h6
                        className="text-xs font-bold tracking-wide font-mono flex items-center gap-2"
                        style={{ color: isDark ? '#e5e5e5' : '#1a1a1a' }}
                      >
                        <Layers size={12} className="text-[#CE9635]" />
                        {section.heading}
                      </h6>
                      <ul
                        className="space-y-1.5 pl-5 list-disc text-sm leading-relaxed"
                        style={{ color: isDark ? '#d1d5db' : '#333333' }}
                      >
                        {section.content.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
