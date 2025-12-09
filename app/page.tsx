import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ComponentShowcase } from '@/components/ComponentShowcase';
import { ArtGallery } from '@/components/ArtGallery';
import { CafeMenu } from '@/components/CafeMenu';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <Hero />
      
      <div className={styles.divider}>
        <div className={styles.dividerLine}></div>
      </div>
      
      <ComponentShowcase />
      
      <div className={styles.divider}>
        <div className={styles.dividerLine}></div>
      </div>
      
      <ArtGallery />
      
      <div className={styles.divider}>
        <div className={styles.dividerLine}></div>
      </div>
      
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
