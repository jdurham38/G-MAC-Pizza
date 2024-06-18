import React from 'react';
import styles from './styles.module.css'; // Import the styles

export default function Logo() {
    return (
        <div className={styles.logoContainer}>
            <img src="/images/gmac-logo.jpeg" alt="G Mac Logo" className={styles.logoImage} />
            <div>
                <h1 className={styles.logoTitle}>G Mac</h1>
                <h2 className={styles.logoTitle}>Pizza & Wings</h2>
            </div>
        </div>
    );
}
