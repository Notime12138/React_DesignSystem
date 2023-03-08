import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EmptyState from "./EmptyState";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/EmptyState",
  component: EmptyState,
  decorators: [withDesign],
} as ComponentMeta<typeof EmptyState>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EmptyState> = (args) => (
  <EmptyState {...args} />
);

export const EmptyStateInstance = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EmptyStateInstance.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=211%3A42127",
  },
};
EmptyStateInstance.args = {
  title: "Page not found",
};
