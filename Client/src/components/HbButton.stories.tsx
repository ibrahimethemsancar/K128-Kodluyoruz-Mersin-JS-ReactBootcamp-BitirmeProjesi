import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HbButton from './HbButton'
import  location  from './assets/location.svg';
import Profile from './assets/Profile.svg'


export default {
  title: 'Hb/Button',
  component: HbButton,
 
} as ComponentMeta<typeof HbButton>;

const Template: ComponentStory<typeof HbButton> = (args) => <HbButton {...args} />;

export const LocationButton = Template.bind({});
LocationButton.args = {
   
    src:location,
    text:'Konum',
    text2:'İstanbul'
    
    
};
export const EntryButton = Template.bind({});
EntryButton.args = {
    src:Profile,
    text:'Giriş Yap',
    text2:'veya üye ol'
    
};
