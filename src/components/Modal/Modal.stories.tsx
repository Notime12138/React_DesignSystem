import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal, { ModalProps } from "./Modal";
import { withDesign } from "storybook-addon-designs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Modal",
  component: Modal,
  decorators: [withDesign],
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (
  args: JSX.IntrinsicAttributes & ModalProps
) => (
  <Modal {...args}>
    <div>Modal content line 1</div>
    <div>Modal content line 2</div>
  </Modal>
);

export const ModalInstance = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ModalInstance.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/uB5hSC62i8Sw70an91N7PX/FTL-Design-System-v.1-Production?node-id=134%3A91957",
  },
};
ModalInstance.args = {};
