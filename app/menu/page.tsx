import { Navigation } from '@/components/Navigation';
import { CafeMenu } from '@/components/CafeMenu';
import styles from '../page.module.css';

export default function MenuPage() {
  return (
    <main className={styles.main}>
      <Navigation />
      <CafeMenu />
      
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h3>Art × Café</h3>
          <p>Where creativity meets coffee culture</p>
          <p className={styles.copyright}>© 2025 Art Gallery & Café. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
