import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ToolTip from "./ToolTip";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/ToolTip",
  component: ToolTip,
  decorators: [withDesign],
} as ComponentMeta<typeof ToolTip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToolTip> = (args) => (
  <ToolTip {...args} />
);

export const ToolTipInstance = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ToolTipInstance.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=802%3A50976",
  },
};
ToolTipInstance.args = {
  label: "ToolTipLabel1",
};
