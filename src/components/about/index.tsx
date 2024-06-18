import TestimonialsModal from '../testimonials/modal';
import styles from './styles.module.css';
import Slideshow from '../Slideshow';

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.aboutHeader}>About Us</h1>
            <div className={styles.aboutContent}>
                <div className={styles.aboutLeft}>
                    <p className={styles.aboutText}>
                        Striving for fresh food the way our grandparents used to make it, we bring back old Italian traditions into the modern age. Our journey began with a passion for authentic, home-cooked Italian cuisine, passed down through generations.
                    </p>
                    <p className={styles.aboutText}>
                        We take pride in sourcing the freshest ingredients, ensuring that every dish we serve is a testament to quality and taste. Our menu is a celebration of Italy's rich culinary heritage, featuring a blend of classic favorites and innovative creations. From our hand-tossed pizzas, topped with the finest cheeses and freshest toppings, to our succulent wings, marinated and cooked to perfection, every bite is a journey back to the warmth and comfort of our grandparents' kitchen.
                    </p>

                    <p className={styles.aboutText}>
                        Thank you for being a part of our story. We look forward to serving you and sharing the joy of Italian cuisine with every visit.
                    </p>
                </div>
                <div className={styles.aboutRight}>
                    <Slideshow />
                </div>
            </div>
            <TestimonialsModal />
        </div>
    );
}
