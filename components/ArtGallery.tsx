import React from 'react';
import { Card } from './Card';
import { Button } from './Button';
import styles from './ArtGallery.module.css';

interface ArtPiece {
  id: number;
  title: string;
  artist: string;
  price: string;
  color: 'primary' | 'secondary' | 'accent' | 'pink' | 'purple' | 'green' | 'blue' | 'orange';
}

const artPieces: ArtPiece[] = [
  { id: 1, title: 'Sunset Dreams', artist: 'Luna Park', price: '$450', color: 'primary' },
  { id: 2, title: 'Urban Jungle', artist: 'Max Verde', price: '$680', color: 'green' },
  { id: 3, title: 'Electric Soul', artist: 'Neon Kim', price: '$520', color: 'accent' },
  { id: 4, title: 'Pink Paradise', artist: 'Rose Chen', price: '$590', color: 'pink' },
  { id: 5, title: 'Purple Haze', artist: 'Violet Storm', price: '$750', color: 'purple' },
  { id: 6, title: 'Citrus Blast', artist: 'Sunny Day', price: '$420', color: 'secondary' },
  { id: 7, title: 'Ocean Wave', artist: 'Marina Blue', price: '$640', color: 'blue' },
  { id: 8, title: 'Fire Dance', artist: 'Ember Fox', price: '$710', color: 'orange' },
];

export const ArtGallery: React.FC = () => {
  return (
    <section className={styles.gallery}>
      <div className={styles.header}>
        <h2>Featured Artworks</h2>
        <p className={styles.subtitle}>Bold expressions from emerging artists</p>
      </div>
      
      <div className={styles.grid}>
        {artPieces.map((piece) => (
          <Card key={piece.id} color={piece.color} shadowSize="medium" className={styles.artCard}>
            <div className={styles.artImage}>
              <div className={styles.placeholder}>🎨</div>
            </div>
            <div className={styles.artInfo}>
              <h3 className={styles.artTitle}>{piece.title}</h3>
              <p className={styles.artist}>by {piece.artist}</p>
              <div className={styles.artFooter}>
                <span className={styles.price}>{piece.price}</span>
                <Button size="small" variant="secondary">Inquire</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
