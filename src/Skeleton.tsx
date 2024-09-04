import React from 'react';
import './Skeleton.css';

export interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  rowCount?: number;
  randomWidth?: boolean;
  animated?: boolean;
  borderRadius?: string;
  backgroundColor?: string;
}

export const Skeleton = ({
  width = '100%',
  height = '1rem',
  rowCount = 1,
  randomWidth = false,
  animated = true,
  borderRadius = '8px',
  backgroundColor = '#e0e0e0',
}: SkeletonLoaderProps) => {
  const getRandomWidth = () => {
    const regex = /^(\d+(\.\d+)?)(px|em|rem|%)$/;
    const match = width.match(regex);

    if (match) {
      const value = parseFloat(match[1] ?? '');
      const unit = match[3];
      const minValue = value * 0.8;
      const randomValue = Math.random() * (value - minValue) + minValue;

      return `${randomValue}${unit}`;
    }

    return width;
  };

  return (
    <>
      {Array.from({ length: rowCount }).map((_, index) => (
        <span
          key={index}
          className={`rtsl-skeleton-loader ${animated ? 'animated' : ''}`}
          style={{
            width: randomWidth ? getRandomWidth() : width,
            height,
            borderRadius,
            backgroundColor,
          }}
        />
      ))}
    </>
  );
};
