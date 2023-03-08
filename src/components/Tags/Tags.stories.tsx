import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tags from "./Tags";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Tags",
  component: Tags,
  decorators: [withDesign],
} as ComponentMeta<typeof Tags>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tags> = (args) => <Tags {...args} />;

export const TagsInstance = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TagsInstance.parameters = {
  design: [
    {
      type: "figma",
      url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=114%3A31014",
    },
    {
      type: "figma",
      url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=270%3A47092",
    },
  ],
};
TagsInstance.args = {
  label: "tagsLabel",
};
