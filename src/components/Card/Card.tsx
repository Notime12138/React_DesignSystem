import React from "react";
import Icon from "@icon-park/react/es/all";

// @example
// <Card {...args}>
//   <div>Card content line 1</div>
//   <div>Card content line 2</div>
// </Card>

export interface CardProps {
  expanded?: true | false;
  icon?: true | false;
  moreAction?: true | false;
  moreFunc?: any;
  titleText?: string;
  footerText?: string;
  size?: "xs" | "s" | "m" | "l" | "xl";
  backgroundColor?: string;
  headerProps?: {};
  bodyProps?: {};
  footerProps?: {};
  children?: React.ReactChild | React.ReactChild[];
}

const expansionCard = (
  expanded: boolean,
  isOpen: boolean,
  open: { (value: React.SetStateAction<boolean>): void }
) => {
  open(!isOpen);
  return !expanded;
};

const Card = ({
  expanded = true,
  icon = true,
  moreAction = true,
  moreFunc = () => {},
  titleText = "TITLE OF THE CARD",
  footerText = "updated",
  size = "xs",
  backgroundColor,
  headerProps = {},
  bodyProps = {},
  footerProps = {},
  children,
  ...props
}: CardProps) => {
  const [isOpen, open] = React.useState(expanded);
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className={[`card-whole`, `card-${size}`].join(" ")}
    >
      {/* header */}
      <div className={[`card-header`].join(" ")} {...headerProps}>
        <div className={[`card-header-left`].join(" ")}>
          {icon ? (
            <Icon
              type="loading-one"
              className={[`card-icon-header-left`].join(" ")}
            />
          ) : null}
          <span className="card-title-text fr-text--sm medium">
            {titleText}
          </span>
        </div>
        <div className="card-header-right">
          <Icon
            type="more"
            className={moreAction ? "" : "hidden"}
            onClick={moreFunc}
          />
          <Icon
            type="minus"
            className={expanded ? "" : "hidden"}
            onClick={() => {
              expanded = expansionCard(expanded, isOpen, open);
            }}
          />
          <Icon
            type="plus"
            className={!expanded ? "" : "hidden"}
            onClick={() => {
              expanded = expansionCard(expanded, isOpen, open);
            }}
          />
        </div>
      </div>
      {/* body */}
      <div
        style={isOpen ? {} : { display: "none" }}
        className={[`card-body`, `${expanded ? "" : "hidden"}`].join(" ")}
        {...bodyProps}
      >
        {children}
      </div>
      {/* footer */}
      <div className="card-footer" {...footerProps}>
        <span className="fr-text-xs regular">{footerText}</span>
      </div>
    </div>
  );
};

export default Card;
