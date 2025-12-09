import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'accent' | 'pink' | 'purple' | 'green' | 'blue' | 'orange' | 'white';
  shadowSize?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  color = 'white',
  shadowSize = 'medium',
  className = '',
}) => {
  return (
    <div className={`${styles.card} ${styles[color]} ${styles[`shadow-${shadowSize}`]} ${className}`}>
      {children}
    </div>
  );
};
