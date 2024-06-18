// ScrollToTopButton.tsx
import React, { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
//Style the button 

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 100) { // Adjust 500 based on when you want the button to appear
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <button onClick={scrollToTop} style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            height: '50px',
            width: '50px',
            fontSize: '24px',
            zIndex: 1000,
            cursor: 'pointer',
            borderRadius: '50%',
            border: 'none',
            outline: 'none',
            backgroundColor: '#000',
            color: '#fff'
        }}>↑</button>
    );
}

export default ScrollToTopButton;
