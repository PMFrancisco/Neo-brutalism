import { Navigation } from '@/components/Navigation';
import { ComponentShowcase } from '@/components/ComponentShowcase';
import styles from './components.module.css';

export default function ComponentsPage() {
  return (
    <main className={styles.main}>
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
