import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BreadCrumbs from "./BreadCrumbs";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/BreadCrumbs",
  component: BreadCrumbs,
  decorators: [withDesign],
} as ComponentMeta<typeof BreadCrumbs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BreadCrumbs> = (args) => (
  <BreadCrumbs {...args} />
);

export const BreadCrumbsInstance = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BreadCrumbsInstance.parameters = {
  design: [
    {
      type: "figma",
      url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=188%3A38358",
    },
    {
      type: "figma",
      url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=264%3A47090",
    },
  ],
};
BreadCrumbsInstance.args = {
  label: "Hello world!",
};
