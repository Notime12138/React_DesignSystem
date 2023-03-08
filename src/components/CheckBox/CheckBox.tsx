import React from "react";

export interface CheckBoxProps {
  size?: "sm" | "md";
  label: string;
  id: string;
  name: string;
  value: string;
  disabled?: true | false;
}

const CheckBox = ({
  size = "sm",
  label,
  id,
  name,
  value,
  disabled = false,
  ...props
}: CheckBoxProps) => {
  if (name !== null && value === null) {
    value = name;
  }
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        className={[`checkbox-box--${size}`, "checkbox-box"].join(" ")}
        {...props}
      ></input>
      <label
        htmlFor={id}
        className={[`checkbox-text--${size}`, `checkbox-${disabled}`].join(" ")}
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
