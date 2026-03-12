import { Navigation } from '@/components/Navigation';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import styles from './cards.module.css';

export default function CardsPage() {
  return (
    <main className={styles.main}>
      <Navigation />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Card Showcase</h1>
          <p className={styles.description}>
            Discover our neobrutalist card designs with bold colors, hard shadows, and striking borders
          </p>
        </div>

        {/* Color Variants */}
        <section className={styles.section}>
          <h2>Color Variants</h2>
          <div className={styles.cardGrid}>
            <Card color="white" shadowSize="medium">
              <div className={styles.cardContent}>
                <h3>White Card</h3>
                <p>Clean and minimal design with a white background</p>
                <code>color="white"</code>
              </div>
            </Card>
            
            <Card color="primary" shadowSize="medium">
              <div className={styles.cardContent}>
                <h3>Primary Card</h3>
                <p>Bold orange color perfect for primary actions</p>
                <code>color="primary"</code>
              </div>
            </Card>
            
            <Card color="secondary" shadowSize="medium">
              <div className={styles.cardContent}>
                <h3>Secondary Card</h3>
                <p>Bright yellow for secondary elements</p>
                <code>color="secondary"</code>
              </div>
            </Card>
            
            <Card color="accent" shadowSize="medium">
              <div className={styles.cardContent}>
                <h3>Accent Card</h3>
                <p>Electric cyan for accent highlights</p>
                <code>color="accent"</code>
              </div>
            </Card>
            
            <Card color="pink" shadowSize="medium">
              <div className={styles.cardContent}>
                <h3>Pink Card</h3>
                <p>Vibrant pink for eye-catching content</p>
                <code>color="pink"</code>
              </div>
            </Card>
            
            <Card color="purple" shadowSize="medium">
              <div className={styles.cardContent}>
                <h3>Purple Card</h3>
                <p>Deep purple for elegant displays</p>
                <code>color="purple"</code>
              </div>
            </Card>
            
            <Card color="green" shadowSize="medium">
              <div className={styles.cardContent}>
                <h3>Green Card</h3>
                <p>Fresh green for success messages</p>
                <code>color="green"</code>
              </div>
            </Card>
            
            <Card color="blue" shadowSize="medium">
              <div className={styles.cardContent}>
                <h3>Blue Card</h3>
                <p>Cool blue for informational content</p>
                <code>color="blue"</code>
              </div>
            </Card>
            
            <Card color="orange" shadowSize="medium">
              <div className={styles.cardContent}>
                <h3>Orange Card</h3>
                <p>Warm orange for attention-grabbing elements</p>
                <code>color="orange"</code>
              </div>
            </Card>
          </div>
        </section>

        {/* Shadow Sizes */}
        <section className={styles.section}>
          <h2>Shadow Sizes</h2>
          <div className={styles.shadowGrid}>
            <Card color="white" shadowSize="small">
              <div className={styles.shadowCard}>
                <h3>Small Shadow</h3>
                <p>Subtle depth with a 4px offset</p>
                <code>shadowSize="small"</code>
              </div>
            </Card>
            
            <Card color="white" shadowSize="medium">
              <div className={styles.shadowCard}>
                <h3>Medium Shadow</h3>
                <p>Balanced depth with an 8px offset</p>
                <code>shadowSize="medium"</code>
              </div>
            </Card>
            
            <Card color="white" shadowSize="large">
              <div className={styles.shadowCard}>
                <h3>Large Shadow</h3>
                <p>Bold depth with a 12px offset</p>
                <code>shadowSize="large"</code>
              </div>
            </Card>
          </div>
        </section>

        {/* Cards with Content */}
        <section className={styles.section}>
          <h2>Rich Content Cards</h2>
          <div className={styles.contentGrid}>
            <Card color="primary" shadowSize="large">
              <div className={styles.richCard}>
                <div className={styles.cardIcon}>🎨</div>
                <h3>Art Exhibition</h3>
                <p>Join us for our monthly art showcase featuring local artists and their incredible works</p>
                <Button variant="primary">Learn More</Button>
              </div>
            </Card>
            
            <Card color="secondary" shadowSize="large">
              <div className={styles.richCard}>
                <div className={styles.cardIcon}>☕</div>
                <h3>Coffee Tasting</h3>
                <p>Experience the finest coffee blends from around the world in our weekly tasting sessions</p>
                <Button variant="secondary">Book Now</Button>
              </div>
            </Card>
            
            <Card color="accent" shadowSize="large">
              <div className={styles.richCard}>
                <div className={styles.cardIcon}>🎭</div>
                <h3>Live Performance</h3>
                <p>Enjoy live music and performances every Friday evening in our cozy café space</p>
                <Button variant="accent">View Schedule</Button>
              </div>
            </Card>
            
            <Card color="pink" shadowSize="large">
              <div className={styles.richCard}>
                <div className={styles.cardIcon}>🍰</div>
                <h3>Dessert Special</h3>
                <p>Try our chef's special desserts made fresh daily with premium ingredients</p>
                <Button variant="pink">See Menu</Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Nested Cards Demo */}
        <section className={styles.section}>
          <h2>Layered Design</h2>
          <Card color="purple" shadowSize="large">
            <div className={styles.nestedDemo}>
              <h3>Cards can contain other cards!</h3>
              <p>Create interesting layouts by nesting cards within cards</p>
              
              <div className={styles.nestedGrid}>
                <Card color="white" shadowSize="small">
                  <div className={styles.miniCard}>
                    <strong>Card 1</strong>
                    <p>Nested inside</p>
                  </div>
                </Card>
                
                <Card color="white" shadowSize="small">
                  <div className={styles.miniCard}>
                    <strong>Card 2</strong>
                    <p>Nested inside</p>
                  </div>
                </Card>
                
                <Card color="white" shadowSize="small">
                  <div className={styles.miniCard}>
                    <strong>Card 3</strong>
                    <p>Nested inside</p>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </section>
      </div>
      
      <footer className={styles.footer}>
        <p>© 2025 Art Gallery & Café - Card Showcase</p>
      </footer>
    </main>
  );
}
