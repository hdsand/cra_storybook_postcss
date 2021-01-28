import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { Props } from 'components/Button/Button';

export default {
  title: 'CMS/Button1',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Props> = args => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
};

export const Ghost = Template.bind({});
Ghost.args = {
  ghost: true,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  primary: true,
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  primary: true,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  primary: true,
};

export const Link = Template.bind({});
Link.args = {
  href: 'https://site.com/',
};
