import React from 'react';
import styles from './App.module.css';
import { Helmet } from 'react-helmet';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import ScrollToTopButton from './components/scrollToTop';
import Dishes from './components/dishes';

function App() {
  return (
    <div>            
      <Helmet>
          <title>G Mac Pizza & Wings</title>
          <meta name="description" content="Homeade pizza made fresh in Phillipsburg, NJ" />
          <meta name="keywords" content="Pizza, italian, wings, homeade, fresh" />
      </Helmet>
      <Header />
      <div id="hero" className={styles.section}><Hero /></div>
      <ScrollToTopButton />
      <div id="about" className={styles.section}><About /></div>
      <div id="dishes" className={styles.section}><Dishes /></div>
      <div id="contact" className={styles.section}><Contact /></div>
      <Footer />
    </div>
  );
}


export default App;
