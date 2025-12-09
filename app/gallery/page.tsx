import { Navigation } from '@/components/Navigation';
import { ArtGallery } from '@/components/ArtGallery';
import { DecorativeShape } from '@/components/DecorativeShape';
import styles from './gallery.module.css';

export default function GalleryPage() {
  return (
    <main className={styles.main}>
      {/* Decorative floating shapes */}
      <DecorativeShape shape="blob" color="pink" size={130} top="12%" left="5%" opacity={0.15} />
      <DecorativeShape shape="circle" color="accent" size={90} top="25%" right="8%" opacity={0.2} />
      <DecorativeShape shape="star" color="secondary" size={75} top="55%" left="7%" opacity={0.18} />
      <DecorativeShape shape="hexagon" color="purple" size={110} bottom="18%" right="6%" opacity={0.15} />
      <DecorativeShape shape="triangle" color="orange" size={85} top="70%" right="12%" opacity={0.2} />
      
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
