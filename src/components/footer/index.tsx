import React, { useState, useEffect} from 'react';
import { FaFacebook } from 'react-icons/fa';
import styles from './styles.module.css';
import TermsOfService from '../tos';
import PrivacyPolicy from '../PrivacyPolicy';
// TODO:
// 1. style the modals better


export default function Footer() {
    const [showHours, setShowHours] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [showTerms, setShowTerms] = useState(false);


    useEffect(() => {
        if (showHours || showPrivacy || showTerms) {
            document.body.classList.add(styles.noScroll);
        } else {
            document.body.classList.remove(styles.noScroll);
        }
    }, [showHours, showPrivacy, showTerms]);

    return (
        <div className={styles.footer}>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <a
                        href="https://www.linkedin.com/company/g-macs-pizza-wings/jobs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        Careers
                    </a>
                </li>
                <li className={styles.listItem}>
                    <a
                        href="https://www.google.com/maps/place/760+Memorial+Pkwy,+Phillipsburg,+NJ+08865"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        Location
                    </a>
                </li>
                <li className={styles.listItem}>
                    <a href="tel:+9087683500" className={styles.link}>
                        Phone Number: 908-768-3500
                    </a>
                </li>
                <li className={styles.listItem}>
                    <li className={styles.link} onClick={() => setShowHours(true)}>
                        Hours
                    </li>
                </li>
                <li className={styles.listItem}>
                <li className={styles.link} onClick={() => setShowPrivacy(true)}>
                        Privacy Policy
                    </li>
                </li>
                <li className={styles.listItem}>
                <li className={styles.link} onClick={() => setShowTerms(true)}>
                        Terms of Service
                    </li>
                </li>
            </ul>
            <a
                href="https://www.facebook.com/macpizzawings3"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
            >
                <FaFacebook className={styles.icon} />
            </a>
            {showHours && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h2>Hours</h2>
                        <p>Monday - Thursday: 11 AM - 9 PM</p>
                        <p>Friday - Saturday: 11 AM - 10 PM</p>
                        <p>Sunday: 12 PM - 8 PM</p>
                        <button onClick={() => setShowHours(false)} className={styles.closeButton}>Close</button>
                    </div>
                </div>
            )}
            {showPrivacy && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                            <PrivacyPolicy />
                        <button onClick={() => setShowPrivacy(false)} className={styles.closeButton}>Close</button>
                    </div>
                </div>
            )}
            {showTerms && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <TermsOfService />
                        <button onClick={() => setShowTerms(false)} className={styles.closeButton}>Close</button>
                    </div>
                </div>
            )}
                        <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} G MAC Pizza & Wings
            </div>
        </div>
    );
}
