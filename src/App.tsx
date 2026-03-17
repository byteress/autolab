import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Promo from './components/Promo';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div data-bs-spy="scroll" data-bs-target="#navbarNav">
      <Navbar />
      <Hero />
      <Services />
      <Promo />
      <Gallery />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default App;
