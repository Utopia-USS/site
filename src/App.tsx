import React from 'react';
import { Box, Container, CssBaseline } from '@material-ui/core';
import AppTheme from './AppTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { NavBar } from './components/nav-bar/NavBar';
import OfferSection from './components/sections/offer/OfferSection';
import GallerySection from './components/sections/gallery/GallerySection';
import AboutUsSection from './components/sections/about-us/AboutUsSection';
import ContactSection from './components/sections/contact/ContactSection';
import SexiDotAnime from './components/miscelanous/SexiDotAnime';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "1200px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppTheme>
        <React.Fragment>
        <CssBaseline />
        <NavBar/>
        <Container className={classes.main}>
          <SexiDotAnime/>
          <OfferSection/>
          <GallerySection/>
          <AboutUsSection/>
          <ContactSection/>
        </Container>
        </React.Fragment>
      </AppTheme>
    </React.Fragment>
  );
}

export default App;
