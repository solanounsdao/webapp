import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Docs from './components/Docs';
import BrandKit from './components/BrandKit';
import DeveloperTools from './components/DeveloperTools';
import NFTPlayground from './components/NFTPlayground';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/brand-kit" element={<BrandKit />} />
            <Route path="/developer-tools" element={<DeveloperTools />} />
            <Route path="/playground" element={<NFTPlayground />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
