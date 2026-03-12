import { Navigation } from '@/components/Navigation';
import { CafeMenu } from '@/components/CafeMenu';
import styles from './menu.module.css';

export default function MenuPage() {
  return (
    <main className={styles.main}>
      <Navigation />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Café Menu</h1>
          <p className={styles.description}>
            Fuel your creativity with our carefully curated selection of artisan coffee, fresh food, and delightful desserts.
          </p>
        </div>
        
        <CafeMenu />
      </div>
      
      <footer className={styles.footer}>
        <p>© 2025 Art Gallery & Café - Menu</p>
      </footer>
    </main>
  );
}
