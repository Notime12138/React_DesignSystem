import React from "react";
import Icon from "@icon-park/react/es/all";

export interface TabsProps {
  num: 1 | 2 | 3 | 4 | 5 | 6;
  label: string[];
  href: string[];
  size?: "md" | "lg";
  icon?: true | false;
  fitted?: true | false;
}

const tabElement = (
  num: number,
  label: string[],
  href: string[],
  size: string,
  icon: boolean
) => {
  let tabElements = [];
  for (let i = 0; i < num; i++) {
    tabElements.push(
      icon ? (
        <a
          className={[`tabElement`, `tabElement-${size}`].join(" ")}
          href={href[i]}
        >
          <Icon type={"ListTwo"} size={14} style={{ paddingRight: 8 }} />
          {label[i]}
        </a>
      ) : (
        <a
          className={[`tabElement`, `tabElement-${size}`].join(" ")}
          href={href[i]}
        >
          {label[i]}
        </a>
      )
    );
  }
  return tabElements;
};

const Tabs = ({
  num,
  label,
  href,
  size = "md",
  icon = true,
  fitted = true,
  ...props
}: TabsProps) => {
  return (
    <div className="tabs" {...props}>
      <div
        className="tabElements"
        style={fitted ? { display: "flex" } : { display: "inline-flex" }}
      >
        {tabElement(num, label, href, size, icon)}
      </div>
      <hr />
    </div>
  );
};

export default Tabs;
