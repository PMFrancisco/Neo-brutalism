import { Navigation } from '@/components/Navigation';
import { Card } from '@/components/Card';
import { ShapeCard } from '@/components/ShapeCard';
import { DecorativeShape } from '@/components/DecorativeShape';
import { Button } from '@/components/Button';
import styles from './cards.module.css';

export default function CardsPage() {
  return (
    <main className={styles.main}>
      {/* Decorative floating shapes */}
      <DecorativeShape shape="circle" color="primary" size={80} top="10%" left="5%" opacity={0.2} />
      <DecorativeShape shape="triangle" color="secondary" size={60} top="20%" right="8%" opacity={0.15} />
      <DecorativeShape shape="hexagon" color="accent" size={100} top="50%" left="3%" opacity={0.2} />
      <DecorativeShape shape="blob" color="pink" size={120} bottom="15%" right="5%" opacity={0.15} />
      <DecorativeShape shape="star" color="purple" size={70} top="70%" left="10%" opacity={0.2} />
      <DecorativeShape shape="diamond" color="orange" size={90} top="35%" right="12%" opacity={0.15} />
      
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

        {/* Shape Cards */}
        <section className={styles.section}>
          <h2>Dynamic Shapes</h2>
          <p className={styles.sectionSubtitle}>Not just squares! Explore our diverse shape collection</p>
          
          <div className={styles.shapesGrid}>
            <ShapeCard shape="circle" color="primary" shadowSize="large" size="large">
              <div className={styles.shapeContent}>
                <div className={styles.shapeIcon}>⭕</div>
                <h3>Circle</h3>
                <p>Round & smooth</p>
              </div>
            </ShapeCard>
            
            <ShapeCard shape="hexagon" color="secondary" shadowSize="large" size="large">
              <div className={styles.shapeContent}>
                <div className={styles.shapeIcon}>⬡</div>
                <h3>Hexagon</h3>
                <p>Six-sided geometry</p>
              </div>
            </ShapeCard>
            
            <ShapeCard shape="diamond" color="accent" shadowSize="large" size="large">
              <div className={styles.shapeContent}>
                <div className={styles.shapeIcon}>◆</div>
                <h3>Diamond</h3>
                <p>Sharp & angular</p>
              </div>
            </ShapeCard>
            
            <ShapeCard shape="triangle" color="pink" shadowSize="large" size="large">
              <div className={styles.shapeContent}>
                <div className={styles.shapeIcon}>▲</div>
                <h3>Triangle</h3>
                <p>Three points</p>
              </div>
            </ShapeCard>
            
            <ShapeCard shape="blob" color="purple" shadowSize="large" size="large">
              <div className={styles.shapeContent}>
                <div className={styles.shapeIcon}>💧</div>
                <h3>Blob</h3>
                <p>Organic morph</p>
              </div>
            </ShapeCard>
            
            <ShapeCard shape="star" color="orange" shadowSize="large" size="large">
              <div className={styles.shapeContent}>
                <div className={styles.shapeIcon}>⭐</div>
                <h3>Star</h3>
                <p>Five points</p>
              </div>
            </ShapeCard>
            
            <ShapeCard shape="pentagon" color="green" shadowSize="large" size="large">
              <div className={styles.shapeContent}>
                <div className={styles.shapeIcon}>⬟</div>
                <h3>Pentagon</h3>
                <p>Five sides</p>
              </div>
            </ShapeCard>
          </div>
        </section>

        {/* Mixed Shapes Gallery */}
        <section className={styles.section}>
          <h2>Shape Combinations</h2>
          <p className={styles.sectionSubtitle}>Create playful layouts by mixing different shapes</p>
          
          <div className={styles.mixedShapesGrid}>
            <ShapeCard shape="circle" color="pink" shadowSize="medium" size="small">
              <div className={styles.miniShapeContent}>
                <div className={styles.miniIcon}>🎨</div>
                <strong>Art</strong>
              </div>
            </ShapeCard>
            
            <ShapeCard shape="hexagon" color="blue" shadowSize="medium" size="medium">
              <div className={styles.miniShapeContent}>
                <div className={styles.miniIcon}>☕</div>
                <strong>Coffee</strong>
                <p>Fresh daily</p>
              </div>
            </ShapeCard>
            
            <ShapeCard shape="triangle" color="secondary" shadowSize="medium" size="small">
              <div className={styles.miniShapeContent}>
                <div className={styles.miniIcon}>🎵</div>
                <strong>Music</strong>
              </div>
            </ShapeCard>
            
            <ShapeCard shape="star" color="accent" shadowSize="medium" size="medium">
              <div className={styles.miniShapeContent}>
                <div className={styles.miniIcon}>✨</div>
                <strong>Events</strong>
                <p>Every Friday</p>
              </div>
            </ShapeCard>
            
            <ShapeCard shape="blob" color="green" shadowSize="medium" size="small">
              <div className={styles.miniShapeContent}>
                <div className={styles.miniIcon}>🌿</div>
                <strong>Nature</strong>
              </div>
            </ShapeCard>
            
            <ShapeCard shape="diamond" color="purple" shadowSize="medium" size="small">
              <div className={styles.miniShapeContent}>
                <div className={styles.miniIcon}>💎</div>
                <strong>Premium</strong>
              </div>
            </ShapeCard>
            
            <ShapeCard shape="pentagon" color="orange" shadowSize="medium" size="medium">
              <div className={styles.miniShapeContent}>
                <div className={styles.miniIcon}>🏆</div>
                <strong>Awards</strong>
                <p>2025 winner</p>
              </div>
            </ShapeCard>
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
