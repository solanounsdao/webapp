import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Collection from './components/Collection';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <Hero />
        <About />
        <Collection />
        <Features />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
