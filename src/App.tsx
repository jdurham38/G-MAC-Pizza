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
        <meta name="description" content="Homemade pizza made fresh in Phillipsburg, NJ" />
        <meta name="keywords" content="Pizza, Italian, wings, homemade, fresh" />
        <script>{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MRNHRDFM');
        `}</script>
      </Helmet>
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-MRNHRDFM"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }} 
          title="Google Tag Manager"
        ></iframe>
      </noscript>
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
