import React from "react";

export interface BadgeProps {
  num: string;
  mode?: "dark" | "light";
  context?: "informative" | "positive" | "negative";
  color?: string;
  backgroundColor?: string;
}

const Badge = ({
  num,
  color,
  backgroundColor,
  mode = "light",
  context = "negative",
  ...props
}: BadgeProps) => {
  return (
    <a {...props}>
      <span
        style={{ backgroundColor: backgroundColor, color: color }}
        className={[
          `badge-custom`,
          `badge-${mode}-${context}`,
          "fr-text--xxs",
          "semibold",
        ].join(" ")}
      >
        {num}
      </span>
    </a>
  );
};

export default Badge;
