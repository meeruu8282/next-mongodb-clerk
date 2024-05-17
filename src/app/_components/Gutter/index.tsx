import React, { forwardRef, Ref } from 'react';
import classes from './index.module.scss';

type Props = {
  left?: boolean;
  right?: boolean;
  className?: string;
  children: React.ReactNode;
  innerRef?: Ref<HTMLDivElement>; // Renamed from `ref` to `innerRef`
};

export const Gutter: React.FC<Props> = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { left = true, right = true, className, children, innerRef } = props; // Changed `ref` to `innerRef`

  return (
    <div
      ref={innerRef} // Changed `ref` to `innerRef`
      className={[
        classes.gutter,
        left && classes.gutterLeft,
        right && classes.gutterRight,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
});

Gutter.displayName = 'Gutter';
