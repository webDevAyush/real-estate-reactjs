import './App.css';
import React from "react"
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Best from './components/Best/Best';
import Featured from './components/Featured/Featured';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Best />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
