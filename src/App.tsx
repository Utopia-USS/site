import React from 'react';
import AppTheme from './AppTheme';
import { NavBar } from './components/nav-bar/NavBar';
import AboutUsSection from './components/sections/about-us/AboutUsSection';
import ContactSection from './components/sections/contact/ContactSection';
import GallerySection from './components/sections/gallery/GallerySection';
import OfferSection from './components/sections/offer/OfferSection';

function App() {

  return (
    <AppTheme>
      <React.Fragment>
        <NavBar/>
        <OfferSection/>
        <GallerySection/>
        <AboutUsSection/>
        <ContactSection/>
      </React.Fragment>
    </AppTheme>
  );
}

export default App;
