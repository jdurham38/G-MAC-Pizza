import React, { useState } from 'react';
import styles from './styles.module.css';
import Modal from './modal';
import wings from '../../images/gmac-3.jpeg';
import gPizza from './gPizza.jpg';
import cheese from './cheese.jpg';
import nonna from './nonna.jpg';

interface Dish {
    name: string;
    image: string;
    description: string;
}

export default function Dishes() {
    const dishes: Dish[] = [
        { name: 'Grandma\'s Pizza', image: nonna, description: 'A delicious Grandma\'s Pizza with fresh ingredients and a crispy crust.' },
        { name: 'Oven Roasted Wings', image: wings, description: 'Oven Roasted Wings, perfectly seasoned and cooked to perfection.' },
        { name: 'Nonna\'s Pie', image: gPizza, description: 'Nonna\'s Pie, a traditional Italian pizza with a modern twist.' },
        { name: 'Award Winning Cheese Pizza', image: cheese, description: 'Award Winning Cheese Pizza, loved by everyone for its cheesy goodness.' },
    ];

    const [showModal, setShowModal] = useState(false);
    const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleReadMore = (dish: Dish, index: number) => {
        setSelectedDish(dish);
        setSelectedIndex(index);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedDish(null);
        setSelectedIndex(null);
    };

    return (
        <div>
            <h1 className={styles.title}>Customer Favorites</h1>
            <div className={styles.dishesContainer}>
                {dishes.map((dish, index) => (
                    <div key={index} className={styles.dishCard}>
                        <img src={dish.image} alt={dish.name} className={styles.dishImage} />
                        <div className={styles.dishDetails}>
                            <p className={styles.dishName}>{dish.name}</p>
                            <button onClick={() => handleReadMore(dish, index)} className={styles.readMoreButton}>Details</button>
                        </div>
                    </div>
                ))}
            </div>
            {showModal && selectedDish !== null && (
                <Modal show={showModal} onClose={handleCloseModal} title={selectedDish.name} index={selectedIndex}>
                    <p>{selectedDish.description}</p>
                </Modal>
            )}
        </div>
    );
}
