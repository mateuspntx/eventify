import { Story, Meta } from '@storybook/react/types-6-0';
import { FiGrid } from 'react-icons/fi';

import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
} as Meta;

type TypedStory = Story<ButtonProps>;

const Template: TypedStory = (args) => <Button {...args} />;

export const Primary: TypedStory = Template.bind({});
Primary.args = {
  title: 'Primary Button',
};

export const Secondary: TypedStory = Template.bind({});
Secondary.args = {
  title: 'Secondary Button',
  variant: 'secondary',
};

export const Outline: TypedStory = Template.bind({});
Outline.args = {
  title: 'Outline Button',
  variant: 'outline',
};

export const WithIcon: TypedStory = Template.bind({});
WithIcon.args = {
  title: 'With Icon Button',
  variant: 'primary',
  icon: FiGrid,
};

export const OnlyIcon: TypedStory = Template.bind({});
OnlyIcon.args = {
  icon: FiGrid,
};
