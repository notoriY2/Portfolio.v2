import { Code2, Database, Palette, Server, Smartphone, Cloud } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SKILL_CATEGORIES = [
  { icon: Code2, title: 'Frontend', skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'] },
  { icon: Server, title: 'Backend', skills: ['Node.js', 'Python', 'PHP', 'REST APIs', 'GraphQL', 'Express'] },
  { icon: Database, title: 'Database', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase', 'Prisma'] },
  { icon: Cloud, title: 'DevOps', skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux'] },
  { icon: Smartphone, title: 'Mobile', skills: ['React Native', 'Progressive Web Apps', 'Responsive Design'] },
  { icon: Palette, title: 'Design', skills: ['UI/UX', 'Figma', 'Accessibility', 'Animation', 'Prototyping'] },
];

export default function Skills() {
  const { isDark } = useTheme();
  const monoFont = { fontFamily: "'Courier New', monospace" };

  return (
    <section
      id="skills"
      className="pt-20 sm:pt-28 lg:pt-32 pb-[10px]"
      style={{ backgroundColor: isDark ? '#000000' : '#ffffff' , marginTop: '-10px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm tracking-widest uppercase text-[#CE9635] mb-4" style={monoFont}>
            What I Work With
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: isDark ? '#e5e5e5' : '#1a1a1a', ...monoFont }}
          >
            Skills &amp; Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map(category => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group relative rounded-lg backdrop-blur-sm border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(206,150,53,0.2)] p-6"
                style={{
                  backgroundColor: isDark ? 'rgba(18,18,18,0.6)' : 'rgba(255,255,255,0.4)',
                  borderColor: isDark ? 'rgba(206,150,53,0.2)' : 'rgba(206,150,53,0.3)',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2.5 rounded-lg text-white transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, #CE9635 0%, #C04D30 100%)' }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3
                    className="text-lg font-semibold tracking-wide"
                    style={{ color: isDark ? '#e5e5e5' : '#1a1a1a', ...monoFont }}
                  >
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs border"
                      style={{
                        backgroundColor: isDark ? 'rgba(206,150,53,0.08)' : 'rgba(206,150,53,0.1)',
                        borderColor: isDark ? 'rgba(206,150,53,0.25)' : 'rgba(206,150,53,0.3)',
                        color: isDark ? '#d1cbbf' : '#3d2f1a',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
