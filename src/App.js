// App.js

import React from 'react';
import './App.css'; // Import CSS file for global styles
import Header from './components/header/Header';
import  Hero from './components/hero/Hero';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />

      <About />

      {/* Add other components and content here */}
    </div>
  );
}

export default App;
