import React from 'react';
import { Button } from './Button';
import styles from './Navigation.module.css';

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Art × Café</h2>
        </div>
        <div className={styles.links}>
          <Button variant="secondary" size="small">Gallery</Button>
          <Button variant="accent" size="small">Menu</Button>
          <Button variant="pink" size="small">Events</Button>
          <Button variant="purple" size="small">Contact</Button>
        </div>
      </div>
    </nav>
  );
};
