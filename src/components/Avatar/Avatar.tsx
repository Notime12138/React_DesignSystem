import React from "react";
import Icon from "@icon-park/react/es/all";
// @ts-ignore
import imageFile from "./default/avatar.jpg";

export interface AvatarProps {
  type?: "guest" | "without-photo" | "with-photo";
  size?: "sm" | "md" | "lg";
  iconText?: string; // as first letter of the name
  imageSource?: string; // as URL of the image
}

const Avatar = ({
  type = "guest",
  size = "lg",
  iconText = "Abc",
  imageSource = imageFile,
  ...props
}: AvatarProps) => {
  switch (type) {
    case "guest":
      return (
        <div
          className={[`avatar-${type}`, `avatar-${size}`].join(" ")}
          {...props}
        >
          <Icon
            type="Avatar"
            className={[`avatar-icon-${type}`, `avatar-icon-${size}`].join(" ")}
          />
        </div>
      );

    case "without-photo":
      return (
        <div
          className={[`avatar-${type}`, `avatar-${size}`].join(" ")}
          {...props}
        >
          {iconText.slice(0, 1).toUpperCase()}
        </div>
      );
    case "with-photo":
      return (
        <div
          style={{ backgroundImage: `url(${imageSource})` }}
          className={[`avatar-${type}`, `avatar-${size}`].join(" ")}
          {...props}
        ></div>
      );
  }
};

export default Avatar;
