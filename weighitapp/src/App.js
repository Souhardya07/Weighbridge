// src/App.js
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductShowcase from './components/ProductShowcase';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Services />
      <ProductShowcase />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

