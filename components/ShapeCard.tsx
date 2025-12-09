import React from 'react';
import styles from './ShapeCard.module.css';

interface ShapeCardProps {
  children: React.ReactNode;
  shape?: 'circle' | 'hexagon' | 'diamond' | 'triangle' | 'blob' | 'star' | 'pentagon';
  color?: 'primary' | 'secondary' | 'accent' | 'pink' | 'purple' | 'green' | 'blue' | 'orange' | 'white';
  shadowSize?: 'small' | 'medium' | 'large';
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export const ShapeCard: React.FC<ShapeCardProps> = ({
  children,
  shape = 'circle',
  color = 'white',
  shadowSize = 'medium',
  className = '',
  size = 'medium',
}) => {
  return (
    <div className={`${styles.shapeCard} ${styles[shape]} ${styles[color]} ${styles[`shadow-${shadowSize}`]} ${styles[`size-${size}`]} ${className}`}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};
