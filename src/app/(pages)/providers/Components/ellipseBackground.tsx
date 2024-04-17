import React from 'react'

interface circlesGridProps {
  className?: string;
  color?: string;
  width?: string;
  height?: string;
}

const EllipseBackground: React.FC<circlesGridProps> = ({
  className = "",
  color = "sage",
  width = "257px",
  height = "235px",
}) => {

  return (
    <div className={`${className}`}>
      {/* 8x8 green circles in a grid pattern */}
      <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width}
      viewBox="0 0 257 235">
        <defs>
          <pattern id="a" width=".14" height=".14" patternContentUnits="objectBoundingBox">
            <circle cx=".01" cy=".01" r=".008" className={`fill-current text-${color}`} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#a)"/>
      </svg>
    </div>
  )
}

export default EllipseBackground
