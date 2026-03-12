import { Navigation } from '@/components/Navigation';
import { ArtGallery } from '@/components/ArtGallery';
import styles from '../page.module.css';

export default function GalleryPage() {
  return (
    <main className={styles.main}>
      <Navigation />
      <ArtGallery />
      
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
