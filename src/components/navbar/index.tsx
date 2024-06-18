/* Navbar.tsx */
import React from 'react';
import OrderNow from "../orderNow";
import styles from './styles.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <a href="#about" className={styles.link}>About Us</a>
            <a href="#dishes" className={styles.link}>Dishes</a>
            <a href="#contact" className={styles.link}>Contact Us</a>
            <OrderNow />

        </nav>
    );
}