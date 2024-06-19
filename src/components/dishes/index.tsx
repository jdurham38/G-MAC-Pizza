import React, { useState } from 'react';
import styles from './styles.module.css';
import Modal from './modal';
import wings from '../../images/gmac-3.jpeg';
import gPizza from './gPizza.jpg';
import cheese from './cheese.jpg';
import nonna from './nonna.jpg';
import confetti from 'canvas-confetti';

interface Dish {
    name: string;
    image: string;
    description: string;
    isAwardWinning?: boolean;
}

export default function Dishes() {
    const dishes: Dish[] = [
        { name: 'Grandma\'s Pizza', image: gPizza, description: 'On our house-made airy Sicilian shells with our creamy white garlic sauce, aged mozzarella cheese, topped with marinara sauce, and finished with a drizzle of pesto sauce, Parmesan, and fresh mozzarella.' },
        { name: 'Oven Roasted Wings', image: wings, description: 'Oven roasted wings, never fried! Choose from 13 wing sauces/rubs or have them plain!\n\n- Extra Mild Wing Sauce\n- Buffalo Sauce (GF)\n- Host Sauce (GF)\n- Garlic Parm (GF)\n- BBQ (GF)\n- Sweet Red Chili Sauce\n- Mango Habanero (GF)\n- Sweet Teriyaki\n- Kickin\' Bourbon (GF)\n- Korean BBQ\n- Jamaican Jerk (GF)\n- Honey Mustard\n- Lemon Pepper Rub\n- Plain' },
        { name: 'Nonna\'s Pie', image: nonna, description: 'A thin crust scullion base with house tomato sauce, fresh mozzarella, topped with hand-crushed tomatoes, fresh basil, garlic olive oil, and finished with Parmesan.' },
        { name: 'Award Winning Cheese Pizza', image: cheese, description: 'A 16” pizza with our house-made tomato sauce and our blend of aged mozzarella cheese. Topped with fresh mozzarella.', isAwardWinning: true },
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

    const handleMouseEnter = (isAwardWinning: boolean | undefined) => {
        if (isAwardWinning) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { x:0.75, y: 0.7 }
            });
        }
    };

    return (
        <div>
            <h1 className={styles.title}>Customer Favorites</h1>
            <div className={styles.dishesContainer}>
                {dishes.map((dish, index) => (
                    <div key={index} className={styles.dishCard} onMouseEnter={() => handleMouseEnter(dish.isAwardWinning)}>
                        <img src={dish.image} alt={dish.name} className={styles.dishImage} />
                        <div className={styles.dishDetails}>
                            <p className={dish.isAwardWinning ? styles.awardWinningDishName : styles.dishName}>{dish.name}</p>
                            <button onClick={() => handleReadMore(dish, index)} className={styles.readMoreButton}>Details</button>
                        </div>
                    </div>
                ))}
            </div>
            {showModal && selectedDish !== null && (
                <Modal show={showModal} onClose={handleCloseModal} title={selectedDish.name} index={selectedIndex}>
                    <p>{selectedDish.description.split('\n').map((line, index) => <span key={index}>{line}<br /></span>)}</p>
                </Modal>
            )}
        </div>
    );
}
