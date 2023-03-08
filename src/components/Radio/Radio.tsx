import React from "react";

export interface RadioProps {
  size?: "sm" | "md";
  label: string;
  id: string;
  name: string;
  value: string;
  disabled?: true | false;
}

const Radio = ({
  size = "sm",
  label,
  id,
  name,
  value,
  disabled = false,
  ...props
}: RadioProps) => {
  if (name !== null && value === null) {
    value = name;
  }
  return (
    <div>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        className={[`radio-box--${size}`, "radio-box"].join(" ")}
        {...props}
      ></input>
      <label
        htmlFor={id}
        className={[`radio-text--${size}`, `radio-${disabled}`].join(" ")}
      >
        {label}
      </label>
    </div>
  );
};

export default Radio;
