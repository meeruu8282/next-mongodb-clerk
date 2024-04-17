import React from 'react'

interface backgroundRectProps {
  color?: string;
}

export const BgLeftRectandTriangle: React.FC<backgroundRectProps> = ({ color = "sage" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 1192 267" fill="none">
      <path d="M843 0H1060.3L1258 189.284V373L843 0Z"
      className={`fill-current text-${color} opacity-[0.05]`} />
      <path d="M1061 0H1258V189.5L1061 0Z"
      className={`fill-current text-${color} opacity-[0.13]`} />
    </svg>
  )
}

export const BgRightRectandTriangle: React.FC<backgroundRectProps> = ({ color = "sage" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 1192 267" fill="none">
      <path d="M415 373H197.699L-3.05176e-05 183.716V0L415 373Z"
      className={`fill-current text-${color} opacity-[0.05]`} />
      <path d="M197 373H0V183.5L197 373Z"
      className={`fill-current text-${color} opacity-[0.15]`} />
    </svg>
  )
}
