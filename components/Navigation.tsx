import React from 'react';
import Link from 'next/link';
import { Button } from './Button';
import styles from './Navigation.module.css';

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logo}>
            <h2>Art × Café</h2>
          </div>
        </Link>
        <div className={styles.links}>
          <Link href="/buttons">
            <Button variant="primary" size="small">Buttons</Button>
          </Link>
          <Link href="/cards">
            <Button variant="secondary" size="small">Cards</Button>
          </Link>
          <Link href="/components">
            <Button variant="accent" size="small">Components</Button>
          </Link>
          <Link href="/gallery">
            <Button variant="pink" size="small">Gallery</Button>
          </Link>
          <Link href="/menu">
            <Button variant="purple" size="small">Menu</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
