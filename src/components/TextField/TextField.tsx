import React from "react";
import Icon from "@icon-park/react/es/all";

export interface TextFieldProps {
  hint?: "none" | "normal" | "negative" | "positive";
  hintText?: string;
  icon?: true | false;
  disabled?: true | false;
  labelState?: true | false;
  labelInput?: string;
  placeHolder?: string;
  size?: "md" | "lg";
  textInputID?: string;
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

const TextField = ({
  hint = "normal",
  hintText = "Hint Text",
  icon = true,
  disabled = false,
  labelState = true,
  labelInput = "Field Title",
  placeHolder = "Text",
  size = "md",
  textInputID = "test",
  ...props
}: TextFieldProps) => {
  const [text, setText] = React.useState("");
  return (
    <div {...props}>
      <label
        htmlFor={textInputID}
        className={
          labelState
            ? `fr-text-xs regular textField-label textField-${disabled}`
            : "hidden"
        }
      >
        {labelInput}
      </label>
      <br />
      <input
        id={textInputID}
        name={textInputID}
        type="text"
        placeholder={placeHolder}
        disabled={disabled}
        value={text}
        onChange={(event) => setText(event.target.value)}
        className={[
          "fr-text",
          "textField-input",
          `textField-input-${size}`,
        ].join(" ")}
      />
      <Icon
        type="close-one"
        size={14}
        className={icon ? "textField-icon-close" : "hidden"}
        onClick={() => {
          setText("");
        }}
      />
      <br />
      {hint === "none" ? null : (
        <div
          className={[
            "fr-text-xs",
            "textField-hint",
            `textField-hint-${hint}`,
          ].join(" ")}
        >
          <Icon type={chooseIcon(hint)} style={{ marginRight: 8 }} />
          {hintText}
        </div>
      )}
    </div>
  );
};

export default TextField;
