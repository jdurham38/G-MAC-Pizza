import React from 'react';
import styles from './styles.module.css';

function TermsOfService() {
    return (
        <div className={styles.modalStyle}>
            <h1 className={styles.modalHeader}>Terms of Service for G MAC Pizza & Wings</h1>
            <p className={styles.modalParagraph}><strong>Introduction</strong>: Welcome to G Mac's Pizza & Wings. By accessing our website or using our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, please do not use our services.</p>
            <p className={styles.modalParagraph}><strong>Ownership</strong>: https://gmacpizzawings.com is a trademark domain name and all information on this site is under ownership of G MAC Pizza & Wings.</p>
            <p className={styles.modalParagraph}><strong>Use of Our Services</strong>: You may use our website and services for personal, non-commercial purposes. The use of our services does not give you ownership of any intellectual property rights in our services or the content you access.</p>
            <p className={styles.modalParagraph}><strong>Online Ordering</strong>: Orders can be placed through our website, with payments completed at the time of order via accepted payment methods. For order modifications, refunds, or cancellations, please call as all orders are situational.</p>
            <p className={styles.modalParagraph}><strong>Privacy and Data Use</strong>: We collect personal information in accordance with our Privacy Policy and use PostHog to analyze website traffic to improve our services.</p>
            <p className={styles.modalParagraph}><strong>Changes to Terms</strong>: We reserve the right to modify these terms at any time. Significant changes will be communicated in advance.</p>
            <p className={styles.modalParagraph}><strong>Contact Us</strong>: If you have questions about these terms, please contact us through the provided communication channels.</p>
            <p className={styles.modalParagraph}><strong>Links To Other Websites</strong>: Our Service may contain links to third-party web sites or services that are not owned or controlled by G MAC Pizza & Wings. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.</p>
            <p className={styles.modalParagraph}><strong>Effective Date</strong>: June 31, 2024</p>
        </div>
    );
}

export default TermsOfService;
