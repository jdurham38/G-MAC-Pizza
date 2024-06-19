import React from 'react';
import styles from './styles.module.css';
import wings from '../../images/gmac-3.jpeg';
import gPizza from './gPizza.jpg';
import cheese from './cheese.jpg';
import nonna from './nonna.jpg';

export default function Dishes() {
    const dishes = [
        { name: 'Grandma\'s Pizza', image: nonna },
        { name: 'Oven Roasted Wings', image: wings },
        { name: 'Nonna\'s Pie', image: gPizza },
        { name: 'Award Winning Cheese Pizza', image: cheese },
    ];

    return (
        <div><h1 className={styles.title}>Customer Favorites</h1>
        <div className={styles.dishesContainer}>
            
            {dishes.map((dish, index) => (
                <div key={index} className={styles.dishCard}>
                    <img src={dish.image} alt={dish.name} className={styles.dishImage} />
                    <p className={styles.dishName}>{dish.name}</p>
                </div>
            ))}
        </div>
        </div>
    );
}
