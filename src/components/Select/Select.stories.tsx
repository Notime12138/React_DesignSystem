import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select, { SelectProps } from "./Select";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Select",
  component: Select,
  decorators: [withDesign],
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (
  args: JSX.IntrinsicAttributes & SelectProps
) => (
  <Select {...args}>
    <option value={""}>Please select one option</option>
    <option value={"option1"}>option 1</option>
    <option value={"option2"}>option 2</option>
  </Select>
);

export const SelectInstance = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SelectInstance.parameters = {
  design: [
    {
      type: "figma",
      url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=185%3A39005",
    },
    {
      type: "figma",
      url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=270%3A47090",
    },
  ],
};
SelectInstance.args = {};
