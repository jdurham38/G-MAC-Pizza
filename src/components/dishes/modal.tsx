import React, { ReactNode } from 'react';
import styles from './modal.module.css';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
    index: number | null;
}

export default function Modal({ show, onClose, title, children, index }: ModalProps) {
    if (!show || index === null) {
        return null;
    }

    const closeButtonClass = `${styles.closeButton} ${styles[`closeButton${(index % 4) + 1}`]}`;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <h2>{title}</h2>
                    <button onClick={onClose} className={closeButtonClass}>&times;</button>
                </div>
                <div className={styles.modalBody}>
                    {children}
                </div>
            </div>
        </div>
    );
}
