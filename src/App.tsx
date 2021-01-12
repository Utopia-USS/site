import React from 'react';
import { Box, Container, CssBaseline } from '@material-ui/core';
import AppTheme from './AppTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { NavBar } from './components/nav-bar/NavBar';
import OfferSection from './components/sections/offer/OfferSection';
import GallerySection from './components/sections/gallery/GallerySection';
import AboutUsSection from './components/sections/about-us/AboutUsSection';
import ContactSection from './components/sections/contact/ContactSection';
import SexiDotAnime from './components/miscelanous/sexi-dot-anime/SexiDotAnime';

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
