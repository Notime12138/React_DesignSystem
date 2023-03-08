import React from "react";
import Icon, { IconType } from "@icon-park/react/es/all";

export interface LinkProps {
  types?: "primary" | "secondary";
  icon?: "without" | "right" | "left" | "both" | "only";
  stat?: "default" | "disable";
  context?: "default" | "critical";
  size?: "sm" | "md" | "lg";
  label: string;
  iconType?: IconType;
  href: string;
}

const Link = ({
  types = "primary",
  icon = "without",
  stat = "default",
  context = "default",
  size = "sm",
  label = "link",
  iconType = "SettingTwo",
  href = "",
  ...props
}: LinkProps) => {
  const disable = stat === "disable";
  switch (icon) {
    case "without":
      return (
        <a
          role="link"
          aria-disabled={disable}
          href={disable ? undefined : href}
          className={[
            `link`,
            `link-${stat}`,
            `link-${types}-${context}`,
            `link-${size}`,
          ].join(" ")}
          {...props}
        >
          {label}
        </a>
      );
    case "right":
      return (
        <a
          role="link"
          aria-disabled={disable}
          href={disable ? undefined : href}
          className={[
            `link`,
            `link-${stat}`,
            `link-${types}-${context}`,
            `link-${size}`,
          ].join(" ")}
          {...props}
        >
          {label}
          <Icon style={{ paddingLeft: 8 }} type={"RightSmall"} />
        </a>
      );
    case "left":
      return (
        <a
          role="link"
          aria-disabled={disable}
          href={disable ? undefined : href}
          className={[
            `link`,
            `link-${stat}`,
            `link-${types}-${context}`,
            `link-${size}`,
          ].join(" ")}
          {...props}
        >
          <Icon style={{ paddingRight: 8 }} type={iconType} />
          {label}
        </a>
      );
    case "both":
      return (
        <a
          role="link"
          aria-disabled={disable}
          href={disable ? undefined : href}
          className={[
            `link`,
            `link-${stat}`,
            `link-${types}-${context}`,
            `link-${size}`,
          ].join(" ")}
          {...props}
        >
          <Icon style={{ paddingRight: 8 }} type={iconType} />
          {label}
          <Icon style={{ paddingLeft: 8 }} type={"RightSmall"} />
        </a>
      );

    case "only":
      return (
        <a
          role="link"
          aria-disabled={disable}
          href={disable ? undefined : href}
          className={[
            `link`,
            `link-${stat}`,
            `link-${types}-${context}`,
            `link-${icon}-${size}`,
            `link-${size}`,
          ].join(" ")}
          {...props}
        >
          <Icon type={"RightSmall"} />
        </a>
      );
  }
};

export default Link;
