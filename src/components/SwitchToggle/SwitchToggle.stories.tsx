import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SwitchToggle from "./SwitchToggle";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/SwitchToggle",
  component: SwitchToggle,
  decorators: [withDesign],
} as ComponentMeta<typeof SwitchToggle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SwitchToggle> = (args) => (
  <SwitchToggle {...args} />
);

export const SwitchToggleInstance = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SwitchToggleInstance.parameters = {
  design: [
    {
      type: "figma",
      url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=192%3A37684",
    },
    {
      type: "figma",
      url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=266%3A47087",
    },
  ],
};
SwitchToggleInstance.args = {
  id: "switchToggleId",
};
