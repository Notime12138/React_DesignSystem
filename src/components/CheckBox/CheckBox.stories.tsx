import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CheckBox from "./CheckBox";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/CheckBox",
  component: CheckBox,
  decorators: [withDesign],
} as ComponentMeta<typeof CheckBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const CheckBoxInstance = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CheckBoxInstance.parameters = {
  design: [
    {
      type: "figma",
      url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=185%3A39005",
    },
    {
      type: "figma",
      url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=265%3A47085",
    },
  ],
};
CheckBoxInstance.args = {
  label: "CheckBox Instance !",
};
