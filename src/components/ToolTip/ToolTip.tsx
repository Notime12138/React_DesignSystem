import React from "react";

export interface ToolTipProps {
  size?: "sm" | "md";
  mode?: "dark" | "light";
  color?: string;
  backgroundColor?: string;
  label: string;
}

const ToolTip = ({
  size = "md",
  mode = "light",
  color,
  backgroundColor,
  label,
  ...props
}: ToolTipProps) => {
  return (
    <a>
      <span
        style={{ backgroundColor: backgroundColor, color: color }}
        className={[`tooltip`, `tooltip-${mode}`, `tooltip-${size}`].join(" ")}
        {...props}
      >
        {label}
      </span>
    </a>
  );
};

export default ToolTip;
