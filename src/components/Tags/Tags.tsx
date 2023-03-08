import React from "react";
import Icon, { IconType } from "@icon-park/react/es/all";

export interface TagsProps {
  size?: "sm" | "md" | "lg";
  use?: "click" | "status" | "parameter" | "personalisation";
  color?: string;
  style?: "icon" | "text" | "right" | "left" | "both";
  label: string;
  iconLeft?: IconType;
  iconRight?: IconType; // default icon for style "icon"
}
const Tags = ({
  size = "md",
  use = "click",
  color,
  style = "left",
  label,
  iconLeft = "RightSmall",
  iconRight = "CloseSmall",
  ...props
}: TagsProps) => {
  switch (style) {
    case "icon":
      return (
        <a
          style={{
            backgroundColor: color,
          }}
          className={[
            `tags`,
            `tags-text--${size}`,
            `tags-${size}`,
            `tags-${use}`,
          ].join(" ")}
          {...props}
        >
          <Icon type={iconRight} />
        </a>
      );
    case "text":
      return (
        <a
          style={{
            backgroundColor: color,
          }}
          className={[
            `tags`,
            `tags-text--${size}`,
            `tags-${size}`,
            `tags-${use}`,
          ].join(" ")}
          {...props}
        >
          <span>{label}</span>
        </a>
      );
    case "left":
      return (
        <a
          style={{
            backgroundColor: color,
          }}
          className={[
            `tags`,
            `tags-text--${size}`,
            `tags-${size}`,
            `tags-${use}`,
          ].join(" ")}
          {...props}
        >
          <Icon style={{ paddingRight: 8 }} type={iconLeft} />
          <span>{label}</span>
        </a>
      );
    case "right":
      return (
        <a
          style={{
            backgroundColor: color,
          }}
          className={[
            `tags`,
            `tags-text--${size}`,
            `tags-${size}`,
            `tags-${use}`,
          ].join(" ")}
          {...props}
        >
          <span>{label}</span>
          <Icon style={{ paddingLeft: 8 }} type={iconRight} />
        </a>
      );
    case "both":
      return (
        <a
          style={{
            backgroundColor: color,
          }}
          className={[
            `tags`,
            `tags-text--${size}`,
            `tags-${size}`,
            `tags-${use}`,
          ].join(" ")}
          {...props}
        >
          <Icon style={{ paddingRight: 8 }} type={iconLeft} />
          <span>{label}</span>
          <Icon style={{ paddingLeft: 8 }} type={iconRight} />
        </a>
      );
  }
};

export default Tags;
