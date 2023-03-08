import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Link from "./Link";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Link",
  component: Link,
  decorators: [withDesign],
} as ComponentMeta<typeof Link>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const LinkInstance = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LinkInstance.parameters = {
  design: [
    {
      type: "figma",
      url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=100%3A12480",
    },
    {
      type: "figma",
      url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=270%3A47096",
    },
  ],
};
LinkInstance.args = {
  label: "Link Instance !",
};
