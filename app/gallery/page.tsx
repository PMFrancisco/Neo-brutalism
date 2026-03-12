import { Navigation } from '@/components/Navigation';
import { ArtGallery } from '@/components/ArtGallery';
import styles from './gallery.module.css';

export default function GalleryPage() {
  return (
    <main className={styles.main}>
      <Navigation />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Art Gallery</h1>
          <p className={styles.description}>
            Discover unique pieces from talented emerging artists. Each artwork is a bold statement in our neobrutalist showcase.
          </p>
        </div>
        
        <ArtGallery />
      </div>
      
      <footer className={styles.footer}>
        <p>© 2025 Art Gallery & Café - Gallery</p>
      </footer>
    </main>
  );
}
