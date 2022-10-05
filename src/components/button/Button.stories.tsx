import { Meta, Story } from "@storybook/react"
import Button, { IButton } from "./Button";

export default {
  title: "Button",
  component: Button
} as Meta;

export const Primary: Story<IButton> = (args: IButton) => <Button {...args} />
Primary.args = {
  children: "Test",
  type: "outline",
  color: "grey"
};