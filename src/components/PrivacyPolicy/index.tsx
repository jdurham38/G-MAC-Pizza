import React from 'react';
import styles from './styles.module.css';

function PrivacyPolicy() {
    return (
        <div className={styles.modalStyle}>
            <h1 className={styles.modalHeader}>Privacy Policy for G MAC Pizza & Wings</h1>
            <p className={styles.modalParagraph}>
                <strong>Introduction</strong>: We at G MAC Pizza & Wings take your privacy seriously. This Privacy Policy describes how we collect, use, and handle your information when you use our services.
            </p>
            <p className={styles.modalParagraph}>
                <strong>Information Collection and Use</strong>: We collect information directly from you when you access our site. This may include your name, email address, and physical address. We use this information to determine the best way to improve your experience and communicate with you.
            </p>
            <p className={styles.modalParagraph}>
                <strong>Cookies and Tracking Technologies</strong>: We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
            <p className={styles.modalParagraph}>
                <strong>Third-Party Services</strong>: We may employ third-party companies and individuals to facilitate our Service, provide the Service on our behalf, perform Service-related services or assist us in analyzing how our Service is used. These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            <p className={styles.modalParagraph}>
                <strong>Data Analytics</strong>: We use PostHog to analyze traffic to our website. This helps us understand user behavior and improve our service offerings, ensuring a better experience for our customers.
            </p>
            <p className={styles.modalParagraph}>
                <strong>Data Security</strong>: We strive to use commercially acceptable means to protect your Personal Information, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.
            </p>
            <p className={styles.modalParagraph}>
                <strong>Changes to This Privacy Policy</strong>: We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className={styles.modalParagraph}>
                <strong>Contact Us</strong>: If you have any questions about this Privacy Policy, please contact us.
            </p>
            <p className={styles.modalParagraph}>
                <strong>Effective Date</strong>: This policy is effective as of June 31, 2024.
            </p>
        </div>
    );
}

export default PrivacyPolicy;
