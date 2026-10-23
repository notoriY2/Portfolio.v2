import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppShell() {
  const { isDark } = useTheme();

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: isDark ? '#000000' : '#ffffff',
        color: isDark ? '#e5e5e5' : '#1a1a1a',
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}
