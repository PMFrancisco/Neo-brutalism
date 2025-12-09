import React from 'react';
import Link from 'next/link';
import { Button } from './Button';
import styles from './Navigation.module.css';

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2>Art × Café</h2>
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/gallery">
            <Button variant="secondary" size="small">Gallery</Button>
          </Link>
          <Link href="/menu">
            <Button variant="accent" size="small">Menu</Button>
          </Link>
          <Link href="/showcase">
            <Button variant="pink" size="small">Components</Button>
          </Link>
          <Link href="/">
            <Button variant="purple" size="small">Home</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
