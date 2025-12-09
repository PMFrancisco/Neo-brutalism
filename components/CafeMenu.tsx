import React from 'react';
import { Card } from './Card';
import styles from './CafeMenu.module.css';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: 'coffee' | 'food' | 'dessert';
  icon: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Artisan Espresso',
    description: 'Single origin, bold & smooth',
    price: '$4.50',
    category: 'coffee',
    icon: '☕',
  },
  {
    id: 2,
    name: 'Rainbow Latte',
    description: 'Colorful butterfly pea magic',
    price: '$6.00',
    category: 'coffee',
    icon: '🌈',
  },
  {
    id: 3,
    name: 'Cold Brew',
    description: 'Smooth, refreshing, perfect',
    price: '$5.50',
    category: 'coffee',
    icon: '🧊',
  },
  {
    id: 4,
    name: 'Avocado Toast',
    description: 'Sourdough, cherry tomatoes, feta',
    price: '$12.00',
    category: 'food',
    icon: '🥑',
  },
  {
    id: 5,
    name: 'Croissant Sandwich',
    description: 'Ham, cheese, arugula',
    price: '$10.50',
    category: 'food',
    icon: '🥐',
  },
  {
    id: 6,
    name: 'Gallery Salad',
    description: 'Mixed greens, nuts, vinaigrette',
    price: '$11.00',
    category: 'food',
    icon: '🥗',
  },
  {
    id: 7,
    name: 'Velvet Cake',
    description: 'Rich, colorful, decadent',
    price: '$7.50',
    category: 'dessert',
    icon: '🍰',
  },
  {
    id: 8,
    name: 'Matcha Tiramisu',
    description: 'Green tea twist on classic',
    price: '$8.00',
    category: 'dessert',
    icon: '🍵',
  },
];

const categoryColors: Record<MenuItem['category'], 'secondary' | 'primary' | 'pink'> = {
  coffee: 'secondary',
  food: 'primary',
  dessert: 'pink',
};

export const CafeMenu: React.FC = () => {
  const categories: MenuItem['category'][] = ['coffee', 'food', 'dessert'];

  return (
    <section className={styles.menu}>
      <div className={styles.header}>
        <h2>Café Menu</h2>
        <p className={styles.subtitle}>Fuel your creativity with our vibrant offerings</p>
      </div>

      {categories.map((category) => (
        <div key={category} className={styles.category}>
          <h3 className={styles.categoryTitle}>{category}</h3>
          <div className={styles.items}>
            {menuItems
              .filter((item) => item.category === category)
              .map((item) => (
                <Card
                  key={item.id}
                  color={categoryColors[category]}
                  shadowSize="small"
                  className={styles.menuCard}
                >
                  <div className={styles.menuItem}>
                    <div className={styles.icon}>{item.icon}</div>
                    <div className={styles.details}>
                      <div className={styles.namePrice}>
                        <h4 className={styles.itemName}>{item.name}</h4>
                        <span className={styles.itemPrice}>{item.price}</span>
                      </div>
                      <p className={styles.description}>{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};
