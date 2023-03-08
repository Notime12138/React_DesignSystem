import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tabs from "./Tabs";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Tabs",
  component: Tabs,
  decorators: [withDesign],
} as ComponentMeta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const TabsInstance = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TabsInstance.parameters = {
  design: [
    {
      type: "figma",
      url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=174%3A36975",
    },
    {
      type: "figma",
      url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=270%3A47094",
    },
  ],
};
TabsInstance.args = {
  num: 2,
  label: ["tabsLabel1", "tabsLabel2"],
  href: ["tabsHref1", "tabsHref2"],
};
