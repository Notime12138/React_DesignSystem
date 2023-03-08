import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProgressBar from "./ProgressBar";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/ProgressBar",
  component: ProgressBar,
  decorators: [withDesign],
} as ComponentMeta<typeof ProgressBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const ProgressBarInstance = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ProgressBarInstance.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=199%3A39887",
  },
};
ProgressBarInstance.args = {};
