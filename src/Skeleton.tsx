import React from 'react';
import './Skeleton.css';

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  circle?: boolean;
  animated?: boolean;
  shineColor?: string;
  backgroundColor?: string;
  style?: React.CSSProperties & {
    '--skeleton-background'?: string;
    '--skeleton-shine'?: string;
  };
}

export const Skeleton = ({
  width = '100%',
  height = '1rem',
  circle = false,
  animated = true,
  shineColor = '#f0f0f0',
  backgroundColor = '#e0e0e0',
  style,
}: SkeletonLoaderProps) => {
  const borderRadius = circle ? '50%' : '8px';

  return (
    <span
      className={`rtsl-skeleton-loader ${animated ? 'animated' : ''}`}
      style={{
        width,
        height,
        borderRadius,
        '--skeleton-background': backgroundColor,
        '--skeleton-shine': shineColor,
        ...style,
      }}
    />
  );
};
