import React from 'react';

import FreekeyNumberbox from '.';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UiKit/FreekeyNumberbox',
  component: FreekeyNumberbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FreekeyNumberbox {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primaryLabel: 'Quantity',
    isDisabled: false,
    isError: false,
    errorText:'',
    placeholder:'Enter Required Quantity'
};

export const Error = Template.bind({});
Error.args = {
    primaryLabel: 'How many tickets do you need?',
    isDisabled: false,
    isError: true,
    errorText:'Maximum 10 tickets can be booked at a time',
    placeholder:'Enter ticket count'
};
