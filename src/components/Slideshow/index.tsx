import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './styles.module.css'; // Import your CSS module

import image1 from '../../images/gmac-1.jpeg';
import image2 from '../../images/gmac-2.jpeg';
import image3 from '../../images/gmac-4.jpeg';
import image4 from '../../images/gmac-5.jpeg';
import image5 from '../../images/gmac-6.jpeg';
import image6 from '../../images/gmac-7.jpeg';

function Slideshow() {
  return (
    <div className={styles.carouselContainer}> {/* Use CSS module for container styling */}
      <Carousel controls={false} indicators={false} interval={4000} pause={'hover'}>
        <Carousel.Item>
          <img className={styles.carouselImage} src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={styles.carouselImage} src={image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={styles.carouselImage} src={image3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={styles.carouselImage} src={image4} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={styles.carouselImage} src={image5} alt="Fifth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={styles.carouselImage} src={image6} alt="Sixth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slideshow;
