import React from "react";
import Icon, { IconType } from "@icon-park/react/es/all";

export interface ButtonProps {
  types?: "primary" | "secondary";
  icon?: "without" | "right" | "left" | "both" | "only";
  stat?: "default" | "disable";
  context?: "default" | "critical";
  size?: "sm" | "md" | "lg";
  mode?: "light";
  label: string;
  iconType?: IconType;
  onClick?: any;
}

const Button = ({
  types = "primary",
  icon = "without",
  stat = "default",
  context = "default",
  size = "sm",
  mode = "light",
  label,
  iconType = "SettingTwo",
  onClick = () => {},
  ...props
}: ButtonProps) => {
  const disable = stat === "disable";
  switch (icon) {
    case "without":
      return (
        <button
          disabled={disable}
          className={[`button-${types}-${context}`, `button-${size}`].join(" ")}
          onClick={onClick}
          {...props}
        >
          {label}
        </button>
      );
    case "right":
      return (
        <button
          disabled={disable}
          className={[`button-${types}-${context}`, `button-${size}`].join(" ")}
          onClick={onClick}
          {...props}
        >
          {label}
          <Icon
            style={{ paddingLeft: 8 }}
            type={iconType}
            className={`button-${types}-${context}--${stat}`}
          />
        </button>
      );
    case "left":
      return (
        <button
          disabled={disable}
          className={[`button-${types}-${context}`, `button-${size}`].join(" ")}
          onClick={onClick}
          {...props}
        >
          <Icon
            style={{ paddingRight: 8 }}
            type={iconType}
            className={`button-${types}-${context}--${stat}`}
          />
          {label}
        </button>
      );
    case "both":
      return (
        <button
          disabled={disable}
          className={[`button-${types}-${context}`, `button-${size}`].join(" ")}
          onClick={onClick}
          {...props}
        >
          <Icon
            style={{ paddingRight: 8 }}
            type={iconType}
            className={`button-${types}-${context}--${stat}`}
          />
          {label}
          <Icon
            style={{ paddingLeft: 8 }}
            type={iconType}
            className={`button-${types}-${context}--${stat}`}
          />
        </button>
      );

    case "only":
      return (
        <button
          disabled={disable}
          className={[
            `button-${types}-${context}`,
            `button-${icon}-${size}`,
            `button-${size}`,
          ].join(" ")}
          onClick={onClick}
          {...props}
        >
          <Icon
            type={iconType}
            className={`button-${types}-${context}--${stat}`}
          />
        </button>
      );
  }
};

export default Button;
