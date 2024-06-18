import styles from './styles.module.css';

export default function TestimonialsModal() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Here's What Our Customers Have To Say</h1>
            <div className={styles.testimonialsWrapper}>
                <div className={styles.testimonialCard}>
                    <div className={styles.testimonialName}>Mozzarella Di Michael</div>
                    <div className={styles.testimonialQuote}>"Delicious and amazing pizza and wings. Highly recommend."</div>
                    <div className={styles.testimonialRating}>★★★★★</div>
                    <a 
                        href="https://www.facebook.com/share/p/peBjB3LetoKnyLqC/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.readMoreButton}>Read More</a>
                </div>

                <div className={styles.testimonialCard}>
                    <div className={styles.testimonialName}>Jennifer Zwier</div>
                    <div className={styles.testimonialQuote}>"Everyone here is friendly with great customer service. Great pizza and wings! They have an extensive vegan menu which makes it our go to spot for our family with different dietary needs."</div>
                    <div className={styles.testimonialRating}>★★★★★</div>
                    <a 
                        href="https://www.facebook.com/share/p/Xbew1Jm1kcizCHNM/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.readMoreButton}>Read More</a>
                </div>

                <div className={styles.testimonialCard}>
                    <div className={styles.testimonialName}>Missèé Bèé</div>
                    <div className={styles.testimonialQuote}>"Had the best cauliflower crust pizza, it was super crispy and the toppings were delish. If they have it and you are a chocolate lover you have to get their chocolate mousse! So good. Worth the hr drive."</div>
                    <div className={styles.testimonialRating}>★★★★★</div>
                    <a 
                        href="https://www.facebook.com/share/p/YEtj773Eoqp4mN95/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.readMoreButton}>Read More</a>
                </div>
            </div>
        </div>
    );
}
