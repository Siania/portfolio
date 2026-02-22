import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import ThemeSwitcher from './components/ThemeSwitcher';
import ContactFloatingButton from './components/ContactFloatingButton';
import HomePage from './pages/HomePage';

const sectionRoutes = ['about', 'legal', 'events', 'marketing', 'certifications', 'contact'];

function App() {
  return (
    <>
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
          {sectionRoutes.map((section) => (
            <Route
              key={section}
              path={`/${section}`}
              element={<Navigate to={`/#${section}`} replace />}
            />
          ))}
        </Routes>
      </main>
    </>
  );
}

export default App;
