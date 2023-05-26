import React from 'react';

import TextInput from '.';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UiKit/TextInput',
  component: TextInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primaryLabel: 'Name',
    isDisabled: false,
    isError: false,
    errorText:'',
    placeholder:'Enter Full Name'
};

export const Error = Template.bind({});
Error.args = {
    primaryLabel: 'Email',
    isDisabled: false,
    isError: true,
    errorText:'Please enter a valid email id',
    placeholder:'Enter email id'
};
