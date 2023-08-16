import React from 'react';

import Avatar from '.';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UiKit/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Avatar {...args} />;

export const Girl = Template.bind({});
Girl.args = {
    gender: 'FEMALE',
    age: 15
};

export const Boy = Template.bind({});
Boy.args = {
    gender: 'MALE',
    age: 20
};

export const Woman = Template.bind({});
Woman.args = {
    gender: 'FEMALE',
    age: 55
};

export const Man = Template.bind({});
Man.args = {
    gender: 'MALE',
    age: 45
};

export const InitialsOnly = Template.bind({});
InitialsOnly.args = {
    name: 'John',
    showInitials: true
};
