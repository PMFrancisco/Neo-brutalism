import { Navigation } from '@/components/Navigation';
import { CafeMenu } from '@/components/CafeMenu';
import { DecorativeShape } from '@/components/DecorativeShape';
import styles from './menu.module.css';

export default function MenuPage() {
  return (
    <main className={styles.main}>
      {/* Decorative floating shapes */}
      <DecorativeShape shape="star" color="secondary" size={90} top="8%" left="5%" opacity={0.2} />
      <DecorativeShape shape="circle" color="green" size={105} top="22%" right="6%" opacity={0.15} />
      <DecorativeShape shape="pentagon" color="primary" size={80} top="48%" left="7%" opacity={0.18} />
      <DecorativeShape shape="blob" color="purple" size={115} bottom="25%" right="8%" opacity={0.15} />
      <DecorativeShape shape="hexagon" color="accent" size={95} top="68%" right="11%" opacity={0.2} />
      
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
