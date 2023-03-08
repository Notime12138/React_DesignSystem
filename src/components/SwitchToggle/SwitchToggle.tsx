import React from "react";
import Icon, { IconType } from "@icon-park/react/es/all";

export interface SwitchToggleProps {
  id: string;
  size?: "md" | "lg";
  disabled?: true | false;
}
const SwitchToggle = ({
  id,
  size = "md",
  disabled,
  ...props
}: SwitchToggleProps) => {
  let sizeNum;
  size === "md" ? (sizeNum = 12) : (sizeNum = 16);
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        className={"switchToggle-input"}
        {...props}
      />
      <label
        className={[`switchToggle-label`, `switchToggle-label--${size}`].join(
          " "
        )}
        htmlFor={id}
      >
        <Icon
          type={"check-small"}
          style={{
            position: "relative",
            display: "inline-block",
            color: "white",
          }}
          size={sizeNum}
          className={`switchToggle-check--${size}`}
        />
        <Icon
          type={"close-small"}
          style={{
            position: "relative",
            color: "white",
          }}
          size={sizeNum}
          className={`switchToggle-close--${size}`}
        />
      </label>
    </div>
  );
};

export default SwitchToggle;
