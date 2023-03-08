import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextField, { TextFieldProps } from "./TextField";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/TextField",
  component: TextField,
  decorators: [withDesign],
} as ComponentMeta<typeof TextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const TextFieldInstance = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextFieldInstance.parameters = {
  design: [
    {
      type: "figma",
      url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=132%3A21482",
    },
    {
      type: "figma",
      url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=266%3A47089",
    },
  ],
};
TextFieldInstance.args = {};
