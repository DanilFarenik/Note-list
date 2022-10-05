import { Meta, Story } from "@storybook/react"
import Icon, { IIcon } from "./Icon";

export default {
  title: "Icon",
  component: Icon
} as Meta;

export const Primary: Story<IIcon> = (args: IIcon) => <Icon {...args} />
Primary.args = {
  name: "task",
  type: "cube",
  color: "grey"
};