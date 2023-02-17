import React from 'react';

import FreekeyCheckbox from '.';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UiKit/FreekeyCheckbox',
  component: FreekeyCheckbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FreekeyCheckbox {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    label: 'Agree to terms and conditions',
    isDisabled: false,
    isChecked: true,
};
