import React from 'react';
import Hero from './Hero';
import About from './About';
import Collection from './Collection';
import Features from './Features';
import Community from './Community';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Collection />
      <Features />
      <Community />
    </>
  );
};

export default HomePage;
