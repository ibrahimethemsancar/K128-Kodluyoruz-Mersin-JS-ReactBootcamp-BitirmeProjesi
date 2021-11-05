import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Head from './Head';


export default {
  title: 'HepsiBurada/Header',
  component: Head,
 
} as ComponentMeta<typeof Head>;

const Template: ComponentStory<typeof Head> = (args) => <Head {...args} />;

export const TopImg = Template.bind({});
TopImg.args = {
   


};