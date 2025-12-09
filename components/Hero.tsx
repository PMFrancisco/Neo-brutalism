import React from 'react';
import { Button } from './Button';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>
            Where Art Meets
            <br />
            <span className={styles.highlight}>Coffee Culture</span>
          </h1>
          <p className={styles.description}>
            Experience bold flavors and even bolder artworks in our vibrant gallery café. 
            A space where creativity flows as freely as our artisan coffee.
          </p>
          <div className={styles.buttons}>
            <Button variant="primary" size="large">Explore Gallery</Button>
            <Button variant="secondary" size="large">View Menu</Button>
          </div>
        </div>
        
        <div className={styles.decorativeBoxes}>
          <div className={`${styles.box} ${styles.box1}`}></div>
          <div className={`${styles.box} ${styles.box2}`}></div>
          <div className={`${styles.box} ${styles.box3}`}></div>
          <div className={`${styles.box} ${styles.box4}`}></div>
        </div>
      </div>
    </section>
  );
};
