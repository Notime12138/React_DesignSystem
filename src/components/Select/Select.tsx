import React from "react";
import Icon from "@icon-park/react/es/all";

export interface SelectProps {
  hint?: "none" | "normal" | "negative" | "positive";
  hintText?: string;
  disabled?: true | false;
  labelState?: true | false;
  labelInput?: string;
  size?: "md" | "lg";
  selectID?: string;
  children?: React.ReactChild | React.ReactChild[];
}

const chooseIcon = (hint: string) => {
  switch (hint) {
    case "normal":
      return "Attention";
    case "negative":
      return "CloseOne";
    case "positive":
      return "CheckOne";
    default:
      return "Attention";
  }
};

const Select = ({
  hint = "normal",
  hintText = "Hint Text",
  disabled = false,
  labelState = true,
  labelInput = "Field Title",
  size = "md",
  selectID = "test",
  children,
  ...props
}: SelectProps) => {
  const [text, setText] = React.useState("");
  let open = false;
  return (
    <div {...props}>
      <label
        htmlFor={selectID}
        className={labelState ? `select-label select-${disabled}` : "hidden"}
      >
        {labelInput}
      </label>
      <br />
      <select
        id={selectID}
        name={selectID}
        disabled={disabled}
        className={["select-custom", `select-custom-${size}`].join(" ")}
      >
        {children}
      </select>
      <br />
      {hint === "none" ? null : (
        <div className={["select-hint", `select-hint-${hint}`].join(" ")}>
          <Icon type={chooseIcon(hint)} style={{ marginRight: 8 }} />

          {hintText}
        </div>
      )}
    </div>
  );
};

export default Select;
