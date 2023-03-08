import React from "react";
import Button from "./../../components/Button/Button";
// @ts-ignore
import spotIcon from "../../assets/spoticon.svg";
// @ts-ignore
import illustration from "../../assets/illustration.svg";

export interface EmptyStateProps {
  smallScreen?: true | false;
  type?: "default" | "systemIcon" | "illustration";
  button?: "without" | "left" | "both";
  title: string;
  content?: string;
  leftButtonLabel?: string;
  rightButtonLabel?: string;
  leftButtonFunc?: any;
  rightButtonFunc?: any;
}

const EmptyState = ({
  smallScreen = false,
  type = "systemIcon",
  button = "both",
  title,
  content,
  leftButtonLabel = "Try again",
  leftButtonFunc = () => {},
  rightButtonLabel = "Back to the home page",
  rightButtonFunc = () => {},
  ...props
}: EmptyStateProps) => {
  content = "Email the account owner to get access to this page.";
  return (
    <div
      className={["emptystate", `emptystate-${smallScreen}`].join(" ")}
      {...props}
    >
      <div className={type === "default" ? "hidden" : "emptystate-icon"}>
        <img
          src={type === "systemIcon" ? spotIcon : illustration}
          alt={"emptystate icon"}
        />
      </div>
      <div className={"emptystate-text-container"}>
        <div className={"emptystate-text-title"}>{title}</div>
        <div className={"emptystate-text-content"}>{content}</div>
      </div>
      {button === "without" ? null : (
        <div
          className={"emptystate-buttons"}
          style={
            button === "both" && smallScreen === false
              ? { display: "flex", marginTop: 24, width: 450 }
              : { marginTop: 24 }
          }
        >
          <Button
            label={leftButtonLabel}
            onClick={leftButtonFunc}
            // @ts-ignore
            style={{ flex: 1 }}
          />
          {button === "both" && smallScreen === false ? (
            <Button
              label={rightButtonLabel}
              types={"secondary"}
              onClick={rightButtonFunc}
              // @ts-ignore
              style={{ flex: 1 }}
            />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default EmptyState;
