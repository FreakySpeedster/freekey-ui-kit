import React from 'react';

import FreekeyTagsInput from '.';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UiKit/FreekeyTagsInput',
  component: FreekeyTagsInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FreekeyTagsInput {...args} />;

export const WithValuePath = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithValuePath.args = {
    containerClass: '',
    valuePath:'name'
};