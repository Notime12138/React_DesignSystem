import React from "react";
import Icon, { IconType } from "@icon-park/react/es/all";

export interface MessageProps {
  headerWithClose?: true | false;
  withBody?: true | false;
  bodyContentWithButton?: true | false;
  context?: "notice" | "informative" | "negative" | "positive";
  message: string;
  label: string;
}

const chooseIcon = (context: string) => {
  switch (context) {
    case "notice":
      return "Caution";
    case "informative":
      return "Info";
    case "negative":
      return "CloseOne";
    case "positive":
      return "CheckOne";
    default:
      return "Info";
  }
};

const Message = ({
  headerWithClose = true,
  withBody = true,
  bodyContentWithButton = true,
  context = "informative",
  message,
  label,
  ...props
}: MessageProps) => {
  const [isOpen, open] = React.useState(true);
  return (
    <div className={"message"} {...props}>
      <div
        className={[
          "message-header",
          `message-header-${context}`,
          "fr-text",
          "medium",
        ].join(" ")}
        onClick={() => open(!isOpen)}
      >
        <Icon type={chooseIcon(context)} style={{ marginRight: 16 }} />
        {message}
        {headerWithClose ? (
          <div className={"message-icon-close"}>
            <Icon type={"CloseSmall"} />
          </div>
        ) : null}
      </div>
      {withBody ? (
        <div
          className={["message-body", "fr-text-xs"].join(" ")}
          style={isOpen ? {} : { display: "none" }}
        >
          {label}
          <br />
          {bodyContentWithButton ? (
            <button
              className={["message-copy-button", "fr-text--sm"].join(" ")}
              onClick={() => navigator.clipboard.writeText(label)}
            >
              <Icon type={"Copy"} size={16} style={{ marginRight: 8 }} />
              Copy this message
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Message;
