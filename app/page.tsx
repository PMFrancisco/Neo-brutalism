import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <Hero />
      
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Explore Our Showcase</h2>
          <p className={styles.sectionDescription}>
            Browse through our complete collection of pages and components
          </p>
          
          <div className={styles.pageGrid}>
            <Card color="primary" shadowSize="large">
              <div className={styles.pageCard}>
                <div className={styles.pageIcon}>🎨</div>
                <h3>Buttons</h3>
                <p>Explore our vibrant button collection with multiple variants and sizes</p>
                <Link href="/buttons">
                  <Button variant="primary">View Buttons</Button>
                </Link>
              </div>
            </Card>
            
            <Card color="secondary" shadowSize="large">
              <div className={styles.pageCard}>
                <div className={styles.pageIcon}>📦</div>
                <h3>Cards</h3>
                <p>Discover our neobrutalist card designs with bold shadows and colors</p>
                <Link href="/cards">
                  <Button variant="secondary">View Cards</Button>
                </Link>
              </div>
            </Card>
            
            <Card color="accent" shadowSize="large">
              <div className={styles.pageCard}>
                <div className={styles.pageIcon}>⚡</div>
                <h3>Components</h3>
                <p>Full component library with design principles and color palette</p>
                <Link href="/components">
                  <Button variant="accent">View Components</Button>
                </Link>
              </div>
            </Card>
            
            <Card color="pink" shadowSize="large">
              <div className={styles.pageCard}>
                <div className={styles.pageIcon}>🖼️</div>
                <h3>Gallery</h3>
                <p>Browse our curated art collection and exhibition pieces</p>
                <Link href="/gallery">
                  <Button variant="pink">View Gallery</Button>
                </Link>
              </div>
            </Card>
            
            <Card color="purple" shadowSize="large">
              <div className={styles.pageCard}>
                <div className={styles.pageIcon}>☕</div>
                <h3>Menu</h3>
                <p>Check out our café menu with delicious drinks and treats</p>
                <Link href="/menu">
                  <Button variant="purple">View Menu</Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
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
