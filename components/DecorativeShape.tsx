import React from 'react';
import styles from './DecorativeShape.module.css';

interface DecorativeShapeProps {
  shape?: 'circle' | 'square' | 'triangle' | 'hexagon' | 'blob' | 'star' | 'diamond' | 'pentagon';
  color?: 'primary' | 'secondary' | 'accent' | 'pink' | 'purple' | 'green' | 'blue' | 'orange';
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotate?: number;
  opacity?: number;
  animate?: boolean;
}

export const DecorativeShape: React.FC<DecorativeShapeProps> = ({
  shape = 'circle',
  color = 'primary',
  size = 100,
  top,
  left,
  right,
  bottom,
  rotate = 0,
  opacity = 0.3,
  animate = true,
}) => {
  const style: React.CSSProperties = {
    width: size,
    height: size,
    top,
    left,
    right,
    bottom,
    transform: `rotate(${rotate}deg)`,
    opacity,
  };

  return (
    <div
      className={`${styles.shape} ${styles[shape]} ${styles[color]} ${animate ? styles.animate : ''}`}
      style={style}
    />
  );
};
