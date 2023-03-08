import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Message from "./Message";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Message",
  component: Message,
  decorators: [withDesign],
} as ComponentMeta<typeof Message>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Message> = (args) => (
  <Message {...args} />
);

export const MessageInstance = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MessageInstance.parameters = {
  design: [
    {
      type: "figma",
      url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=187%3A152945",
    },
    {
      type: "figma",
      url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=270%3A47100",
    },
  ],
};
MessageInstance.args = {
  message: "Message Instance",
  label: "message content",
};
