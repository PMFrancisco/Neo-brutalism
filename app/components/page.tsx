import { Navigation } from '@/components/Navigation';
import { ComponentShowcase } from '@/components/ComponentShowcase';
import { DecorativeShape } from '@/components/DecorativeShape';
import styles from './components.module.css';

export default function ComponentsPage() {
  return (
    <main className={styles.main}>
      {/* Decorative floating shapes */}
      <DecorativeShape shape="hexagon" color="accent" size={100} top="14%" left="4%" opacity={0.18} />
      <DecorativeShape shape="diamond" color="pink" size={85} top="26%" right="9%" opacity={0.15} />
      <DecorativeShape shape="blob" color="orange" size={120} top="52%" left="6%" opacity={0.2} />
      <DecorativeShape shape="circle" color="blue" size={90} bottom="18%" right="7%" opacity={0.15} />
      <DecorativeShape shape="pentagon" color="green" size={75} top="72%" right="13%" opacity={0.18} />
      
      <Navigation />
      
      <div className={styles.header}>
        <h1>Component Library</h1>
        <p className={styles.description}>
          Complete neobrutalist design system with components, colors, and design principles
        </p>
      </div>
      
      <ComponentShowcase />
      
      <footer className={styles.footer}>
        <p>© 2025 Art Gallery & Café - Component Library</p>
      </footer>
    </main>
  );
}
