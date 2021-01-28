import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Loader, { Props } from 'components/Loader/Loader';

export default {
  title: 'CMS/Loader',
  component: Loader,
} as Meta;

const Template: Story<Props> = args => <Loader {...args}>Button</Loader>;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
