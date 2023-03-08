import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Radio from "./Radio";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Radio",
  component: Radio,
  decorators: [withDesign],
} as ComponentMeta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const RadioInstance = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RadioInstance.parameters = {
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
RadioInstance.args = {
  label: "Hello world!",
};
