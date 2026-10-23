import { GraduationCap, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const EDUCATION = [
  {
    degree: 'Diploma in Information & Communication Technology (Application Development)',
    institution: 'Sol Plaatje University',
    year: '2022 — 2025',
    description:
      'NQF Level 6 ICT graduate with practical experience in web development, database management, and IT support. Completed multiple hands-on projects including e-commerce systems, student management platforms, and campus healthcare booking systems.',
  },
  {
    degree: 'National Senior Certificate (Bachelor Pass)',
    institution: 'Umso High School',
    year: '2016 — 2020',
    description:
      'Completed secondary education with a Bachelor pass, preparing for further studies in Information and Communication Technology.',
  },
];

const COURSEWORK = [
  'Data Structures & Algorithms',
  'Web Development',
  'Database Management Systems',
  'Software Engineering',
  'Cloud Computing',
  'Mobile Application Development',
];

export default function Education() {
  const { isDark } = useTheme();
  const monoFont = { fontFamily: "'Courier New', monospace" };

  return (
    <section
      id="education"
      className="pt-20 sm:pt-28 lg:pt-32 pb-[10px]"
      style={{ backgroundColor: isDark ? '#000000' : '#ffffff' , marginTop: '-10px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm tracking-widest uppercase text-[#CE9635] mb-4" style={monoFont}>
            Background
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: isDark ? '#e5e5e5' : '#1a1a1a', ...monoFont }}
          >
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-[#CE9635]" size={28} />
              <h3
                className="text-xl font-semibold"
                style={{ color: isDark ? '#e5e5e5' : '#1a1a1a', ...monoFont }}
              >
                Diploma
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              {EDUCATION.map(edu => (
                <div
                  key={edu.degree}
                  className="border-l-2 border-[#CE9635] pl-6 py-4 rounded-r-lg transition-all duration-300 hover:bg-[#CE9635]/5"
                  style={{ backgroundColor: isDark ? 'rgba(18,18,18,0.4)' : 'rgba(245,245,245,0.4)' }}
                >
                  <h4
                    className="text-base font-semibold mb-1"
                    style={{ color: isDark ? '#e5e5e5' : '#1a1a1a', ...monoFont }}
                  >
                    {edu.degree}
                  </h4>
                  <p className="text-[#CE9635] font-medium mb-2 text-sm">{edu.institution}</p>
                  <p className="text-xs mb-2" style={{ color: isDark ? '#a3a3a3' : '#525252' }}>
                    {edu.year}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: isDark ? '#a3a3a3' : '#525252' }}>
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="text-[#C04D30]" size={28} />
              <h3
                className="text-xl font-semibold"
                style={{ color: isDark ? '#e5e5e5' : '#1a1a1a', ...monoFont }}
              >
                Relevant Coursework
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {COURSEWORK.map(course => (
                <div
                  key={course}
                  className="px-4 py-3 rounded-lg border-l-4 border-[#C04D30] transition-all duration-300 hover:shadow-md"
                  style={{ backgroundColor: isDark ? 'rgba(206,150,53,0.06)' : 'rgba(206,150,53,0.08)' }}
                >
                  <p className="font-medium" style={{ color: isDark ? '#e5e5e5' : '#1a1a1a' }}>
                    {course}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
