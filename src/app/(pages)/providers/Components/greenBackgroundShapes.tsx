import React from 'react'

interface backgroundRectProps {
  color?: string;
  opacityRectangle?: number;
  opacityTriangle?: number;
}

export const BgRightRectandTriangle: React.FC<backgroundRectProps> = ({
  color = "sage",
  opacityRectangle = 0.05,
  opacityTriangle = 0.13
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" fill="none"
    viewBox="0 0 425 382">
      <path className={`fill-current text-${color} opacity-[${opacityRectangle}]`}
      d="M0 0h222.545l202.469 193.85V382L0 0Z"/>
      <path className={`fill-current text-${color} opacity-[${opacityTriangle}]`}
      d="M425.431 0H222.545l202.469 193.85c.417-82.868.417-193.85.417-193.85Z"/>
    </svg>
  )
}

export const BgLeftRectandTriangle: React.FC<backgroundRectProps> = ({
  color = "sage",
  opacityRectangle = 0.05,
  opacityTriangle = 0.15
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" fill="none"
    viewBox="0 0 425 382">
      <g transform="rotate(180 212.5 191)">
        <path className={`fill-current text-${color} opacity-[${opacityRectangle}]`}
        d="M0 0h222.545l202.469 193.85V382L0 0Z"/>
        <path className={`fill-current text-${color} opacity-[${opacityTriangle}]`}
        d="M425.431 0H222.545l202.469 193.85c.417-82.868.417-193.85.417-193.85Z"/>
      </g>
    </svg>
  )
}
