import { Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { ContactModalProvider } from './context/ContactModalContext';
import Nav from './components/Nav';
import ThemeSwitcher from './components/ThemeSwitcher';
import ContactFloatingButton from './components/ContactFloatingButton';
import VideoBackground from './components/VideoBackground';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import EducationPage from './pages/EducationPage';

const sectionRoutes = ['about', 'legal', 'events', 'marketing', 'certifications', 'contact'];

function App() {
  return (
    <ContactModalProvider>
    <>
      <VideoBackground />
      {/* Animated gradient blobs */}
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />
      <div className="blob blob-3" aria-hidden="true" />

      <Nav />
      <ThemeSwitcher />
      <ContactFloatingButton />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/education/:slug" element={<EducationPage />} />
          {sectionRoutes.map((section) => (
            <Route
              key={section}
              path={`/${section}`}
              element={<Navigate to={`/#${section}`} replace />}
            />
          ))}
        </Routes>
      </main>
      <Analytics />
    </>
    </ContactModalProvider>
  );
}

export default App;
