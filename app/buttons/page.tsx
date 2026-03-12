'use client';

import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import styles from './buttons.module.css';

export default function ButtonsPage() {
  return (
    <main className={styles.main}>
      <Navigation />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Button Showcase</h1>
          <p className={styles.description}>
            Explore our collection of neobrutalist buttons with vibrant colors and bold designs
          </p>
        </div>

        {/* Button Variants */}
        <section className={styles.section}>
          <h2>Button Variants</h2>
          <Card color="white" shadowSize="medium">
            <div className={styles.buttonGroup}>
              <div className={styles.buttonItem}>
                <Button variant="primary">Primary Button</Button>
                <code>variant="primary"</code>
              </div>
              <div className={styles.buttonItem}>
                <Button variant="secondary">Secondary Button</Button>
                <code>variant="secondary"</code>
              </div>
              <div className={styles.buttonItem}>
                <Button variant="accent">Accent Button</Button>
                <code>variant="accent"</code>
              </div>
              <div className={styles.buttonItem}>
                <Button variant="pink">Pink Button</Button>
                <code>variant="pink"</code>
              </div>
              <div className={styles.buttonItem}>
                <Button variant="purple">Purple Button</Button>
                <code>variant="purple"</code>
              </div>
              <div className={styles.buttonItem}>
                <Button variant="green">Green Button</Button>
                <code>variant="green"</code>
              </div>
            </div>
          </Card>
        </section>

        {/* Button Sizes */}
        <section className={styles.section}>
          <h2>Button Sizes</h2>
          <div className={styles.sizeGrid}>
            <Card color="primary" shadowSize="medium">
              <div className={styles.sizeCard}>
                <h3>Small</h3>
                <Button variant="primary" size="small">Small Button</Button>
                <code>size="small"</code>
              </div>
            </Card>
            
            <Card color="secondary" shadowSize="medium">
              <div className={styles.sizeCard}>
                <h3>Medium (Default)</h3>
                <Button variant="secondary" size="medium">Medium Button</Button>
                <code>size="medium"</code>
              </div>
            </Card>
            
            <Card color="accent" shadowSize="medium">
              <div className={styles.sizeCard}>
                <h3>Large</h3>
                <Button variant="accent" size="large">Large Button</Button>
                <code>size="large"</code>
              </div>
            </Card>
          </div>
        </section>

        {/* All Combinations */}
        <section className={styles.section}>
          <h2>Size × Variant Matrix</h2>
          <Card color="white" shadowSize="large">
            <div className={styles.matrix}>
              <div className={styles.matrixRow}>
                <h4>Small</h4>
                <Button variant="primary" size="small">Primary</Button>
                <Button variant="secondary" size="small">Secondary</Button>
                <Button variant="accent" size="small">Accent</Button>
                <Button variant="pink" size="small">Pink</Button>
                <Button variant="purple" size="small">Purple</Button>
                <Button variant="green" size="small">Green</Button>
              </div>
              
              <div className={styles.matrixRow}>
                <h4>Medium</h4>
                <Button variant="primary" size="medium">Primary</Button>
                <Button variant="secondary" size="medium">Secondary</Button>
                <Button variant="accent" size="medium">Accent</Button>
                <Button variant="pink" size="medium">Pink</Button>
                <Button variant="purple" size="medium">Purple</Button>
                <Button variant="green" size="medium">Green</Button>
              </div>
              
              <div className={styles.matrixRow}>
                <h4>Large</h4>
                <Button variant="primary" size="large">Primary</Button>
                <Button variant="secondary" size="large">Secondary</Button>
                <Button variant="accent" size="large">Accent</Button>
                <Button variant="pink" size="large">Pink</Button>
                <Button variant="purple" size="large">Purple</Button>
                <Button variant="green" size="large">Green</Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Interactive Demo */}
        <section className={styles.section}>
          <h2>Interactive Buttons</h2>
          <Card color="purple" shadowSize="large">
            <div className={styles.interactiveDemo}>
              <h3>Click Me!</h3>
              <div className={styles.interactiveGrid}>
                <Button variant="primary" onClick={() => alert('Primary clicked!')}>
                  Alert Primary
                </Button>
                <Button variant="secondary" onClick={() => console.log('Secondary clicked')}>
                  Console Log
                </Button>
                <Button variant="accent" onClick={() => alert('🎉 Accent clicked!')}>
                  Alert with Emoji
                </Button>
                <Button variant="pink" onClick={() => alert('💖 Pink power!')}>
                  Pink Power
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </div>
      
      <footer className={styles.footer}>
        <p>© 2025 Art Gallery & Café - Button Showcase</p>
      </footer>
    </main>
  );
}
