import React from 'react';
import { Button } from './Button';
import { Card } from './Card';
import styles from './ComponentShowcase.module.css';

export const ComponentShowcase: React.FC = () => {
  return (
    <section className={styles.showcase}>
      <div className={styles.container}>
        <h2>Component Library</h2>
        <p className={styles.intro}>
          Explore our neobrutalist design system with vibrant colors and bold elements
        </p>

        {/* Buttons Section */}
        <div className={styles.section}>
          <h3>Buttons</h3>
          <div className={styles.row}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="pink">Pink</Button>
            <Button variant="purple">Purple</Button>
            <Button variant="green">Green</Button>
          </div>
          
          <div className={styles.row}>
            <Button variant="primary" size="small">Small</Button>
            <Button variant="secondary" size="medium">Medium</Button>
            <Button variant="accent" size="large">Large</Button>
          </div>
        </div>

        {/* Cards Section */}
        <div className={styles.section}>
          <h3>Cards</h3>
          <div className={styles.cardGrid}>
            <Card color="white" shadowSize="small">
              <h4>White Card</h4>
              <p>Clean and minimal with small shadow</p>
            </Card>
            
            <Card color="primary" shadowSize="medium">
              <h4>Primary Card</h4>
              <p>Bold orange with medium shadow</p>
            </Card>
            
            <Card color="secondary" shadowSize="medium">
              <h4>Secondary Card</h4>
              <p>Bright yellow with medium shadow</p>
            </Card>
            
            <Card color="accent" shadowSize="medium">
              <h4>Accent Card</h4>
              <p>Electric cyan with medium shadow</p>
            </Card>
            
            <Card color="pink" shadowSize="large">
              <h4>Pink Card</h4>
              <p>Vibrant pink with large shadow</p>
            </Card>
            
            <Card color="purple" shadowSize="large">
              <h4>Purple Card</h4>
              <p>Deep purple with large shadow</p>
            </Card>
            
            <Card color="green" shadowSize="medium">
              <h4>Green Card</h4>
              <p>Fresh green with medium shadow</p>
            </Card>
            
            <Card color="blue" shadowSize="medium">
              <h4>Blue Card</h4>
              <p>Cool blue with medium shadow</p>
            </Card>
            
            <Card color="orange" shadowSize="large">
              <h4>Orange Card</h4>
              <h4>Warm orange with large shadow</h4>
            </Card>
          </div>
        </div>

        {/* Color Palette */}
        <div className={styles.section}>
          <h3>Color Palette</h3>
          <div className={styles.colorGrid}>
            <div className={styles.colorSwatch}>
              <div className={`${styles.color} ${styles.colorPrimary}`}></div>
              <span>Primary</span>
              <code>#FF6B35</code>
            </div>
            
            <div className={styles.colorSwatch}>
              <div className={`${styles.color} ${styles.colorSecondary}`}></div>
              <span>Secondary</span>
              <code>#FFD23F</code>
            </div>
            
            <div className={styles.colorSwatch}>
              <div className={`${styles.color} ${styles.colorAccent}`}></div>
              <span>Accent</span>
              <code>#00E5FF</code>
            </div>
            
            <div className={styles.colorSwatch}>
              <div className={`${styles.color} ${styles.colorPink}`}></div>
              <span>Pink</span>
              <code>#FF006E</code>
            </div>
            
            <div className={styles.colorSwatch}>
              <div className={`${styles.color} ${styles.colorPurple}`}></div>
              <span>Purple</span>
              <code>#8338EC</code>
            </div>
            
            <div className={styles.colorSwatch}>
              <div className={`${styles.color} ${styles.colorGreen}`}></div>
              <span>Green</span>
              <code>#06FFA5</code>
            </div>
            
            <div className={styles.colorSwatch}>
              <div className={`${styles.color} ${styles.colorBlue}`}></div>
              <span>Blue</span>
              <code>#3A86FF</code>
            </div>
            
            <div className={styles.colorSwatch}>
              <div className={`${styles.color} ${styles.colorOrange}`}></div>
              <span>Orange</span>
              <code>#FB5607</code>
            </div>
          </div>
        </div>

        {/* Design Principles */}
        <div className={styles.section}>
          <h3>Neobrutalism Design Principles</h3>
          <div className={styles.principles}>
            <Card color="white" shadowSize="medium">
              <div className={styles.principle}>
                <div className={styles.principleIcon}>🎨</div>
                <h4>Bold Borders</h4>
                <p>Thick 4px black borders on all elements create strong visual boundaries</p>
              </div>
            </Card>
            
            <Card color="white" shadowSize="medium">
              <div className={styles.principle}>
                <div className={styles.principleIcon}>💫</div>
                <h4>Vibrant Colors</h4>
                <p>High-saturation colors that demand attention and express energy</p>
              </div>
            </Card>
            
            <Card color="white" shadowSize="medium">
              <div className={styles.principle}>
                <div className={styles.principleIcon}>📦</div>
                <h4>Hard Shadows</h4>
                <p>Offset box shadows in black create depth without blur or subtlety</p>
              </div>
            </Card>
            
            <Card color="white" shadowSize="medium">
              <div className={styles.principle}>
                <div className={styles.principleIcon}>✨</div>
                <h4>No Gradients</h4>
                <p>Flat solid colors only - simplicity and directness over smoothness</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
