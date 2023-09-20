import React from "react";

export interface BoxProps {
  width?: string;
  height?: string;
  svg?: React.ReactNode;
}

const StyledBox: React.FC<BoxProps> = ({
  width = "32px",
  height = "32px",
  svg,
}) => {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: "8px",
        borderWidth: "2px",
        borderColor: "#45AC60",
      }}
    >
      {svg && svg}
    </div>
  );
};

export default StyledBox;
