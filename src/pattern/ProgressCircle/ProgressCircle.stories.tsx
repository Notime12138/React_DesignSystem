import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProgressCircle from "./ProgressCircle";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/ProgressCircle",
  component: ProgressCircle,
  decorators: [withDesign],
} as ComponentMeta<typeof ProgressCircle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProgressCircle> = (args) => (
  <ProgressCircle {...args} />
);

export const ProgressCircleInstance = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ProgressCircleInstance.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=125%3A25260",
  },
};
ProgressCircleInstance.args = {};
