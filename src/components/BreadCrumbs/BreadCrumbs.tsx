import React from "react";
import Icon, { IconType } from "@icon-park/react/es/all";

export interface BreadCrumbsProps {
  size?: "md" | "lg";
  icon?: "without" | "right" | "left";
  more?: true | false; // whether replaced by '...'
  href?: string;
  label: string;
  iconType?: IconType;
  tail?: true | false; // whether is the last breadcrumbs
  color?: string; // color of text
}

const BreadCrumbs = ({
  size = "md",
  icon = "without",
  more = false,
  href,
  label,
  iconType = "Link",
  tail,
  color,
  ...props
}: BreadCrumbsProps) => {
  if (more) {
    return (
      <div className={`breadcrumbs`} {...props}>
        <a
          className={`breadcrumbs-text--${size}`}
          href={href}
          style={{ color: color }}
        >
          ...
        </a>
        {tail ? null : (
          <Icon type="Right" fill={color} style={{ marginRight: 8 }} />
        )}
      </div>
    );
  } else {
    switch (icon) {
      case "without":
        return (
          <div className={`breadcrumbs`} {...props}>
            <a
              className={[`breadcrumbs-text--${size}`].join(" ")}
              href={href}
              style={{ color: color }}
            >
              {label}
            </a>
            {tail ? null : (
              <Icon type="Right" fill={color} style={{ marginRight: 8 }} />
            )}
          </div>
        );
      case "left":
        return (
          <div className={`breadcrumbs`} {...props}>
            <a
              className={[`breadcrumbs-text--${size}`].join(" ")}
              href={href}
              style={{ color: color }}
            >
              <Icon type={iconType} style={{ paddingRight: 8 }} />
              {label}
            </a>
            {tail ? null : (
              <Icon type="Right" fill={color} style={{ marginRight: 8 }} />
            )}
          </div>
        );
      case "right":
        return (
          <div className={`breadcrumbs`} {...props}>
            <a
              className={[`breadcrumbs-text--${size}`].join(" ")}
              href={href}
              style={{ color: color }}
            >
              {label}
              <Icon type={iconType} style={{ paddingLeft: 8 }} />
            </a>
            {tail ? null : (
              <Icon type="Right" fill={color} style={{ marginRight: 8 }} />
            )}
          </div>
        );
    }
  }
};

export default BreadCrumbs;
