import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar, { AvatarProps } from "./Avatar";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Avatar",
  component: Avatar,
  decorators: [withDesign],
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (
  args: JSX.IntrinsicAttributes & AvatarProps
) => <Avatar {...args} />;

export const AvatarInstance = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AvatarInstance.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=169%3A29391",
  },
};
AvatarInstance.args = {};
