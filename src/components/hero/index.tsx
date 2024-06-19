import React from 'react';
import { Helmet } from 'react-helmet';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import styles from './styles.module.css'; // Ensure the import path matches

export default function Hero() {
    return (
        <div className={styles.hero}>
            <Helmet>
                <meta name="address" content="760 Memorial Pkwy, Phillipsburg, NJ 08865" />
                <meta name="phone" content="(908) 768-3500" />
                <meta name="hours" content="Monday-Thursday: 11:00-9:00, Friday-Saturday: 11:00-10:00, Sunday: 12:00-8:00" />
            </Helmet>
            <div className={styles.orderNow}>
                <a href="https://mac3.hrpos.heartland.us/menu" className={styles.orderLink}>Order Now</a>            
            </div>
            <div className={styles.infoContainer}>
                <a href="tel:+1 9087683500" className={styles.infoItem}><FaPhoneAlt className={styles.icon} /> (908) 768-3500</a>
                <a href="https://www.google.com/maps/place/760+Memorial+Pkwy,+Phillipsburg,+NJ+08865" target="_blank" rel="noopener noreferrer" className={styles.infoItem}><FaMapMarkerAlt className={styles.icon} /> 760 Memorial Pkwy, Phillipsburg, NJ 08865</a>
                <div className={styles.infoItem}>
                    <FaClock className={styles.icon} />
                    <div className={styles.hours}>
                        <p>Monday-Thursday: 11:00-9:00</p>
                        <p>Friday-Saturday: 11:00-10:00</p>
                        <p>Sunday: 12:00-8:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
