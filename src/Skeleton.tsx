import React from 'react';
import './Skeleton.css';

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  rowCount?: number;
  animated?: boolean;
  backgroundColor?: string;
}

export const Skeleton = ({
  width = '100%',
  height = '1rem',
  borderRadius = '8px',
  rowCount = 1,
  animated = true,
  backgroundColor = '#e0e0e0',
}: SkeletonLoaderProps) => {
  return (
    <>
      {Array.from({ length: rowCount }).map((_, index) => (
        <span
          key={index}
          className={`rtsl-skeleton-loader ${animated ? 'animated' : ''}`}
          style={{
            width,
            height,
            borderRadius,
            backgroundColor,
          }}
        />
      ))}
    </>
  );
};
