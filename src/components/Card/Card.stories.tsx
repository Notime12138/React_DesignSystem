import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card, { CardProps } from "./Card";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Card",
  component: Card,
  decorators: [withDesign],
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (
  args: JSX.IntrinsicAttributes & CardProps
) => (
  <Card {...args}>
    <div>Card content line 1</div>
    <div>Card content line 2</div>
  </Card>
);

export const CardInstance = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardInstance.parameters = {
  design: [
    {
      type: "figma",
      url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=164%3A26796",
    },
    {
      type: "figma",
      url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=264%3A47092",
    },
  ],
};
CardInstance.args = {};
