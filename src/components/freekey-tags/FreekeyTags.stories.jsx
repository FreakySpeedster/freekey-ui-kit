import React from 'react';

import FreekeyTags from '.';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UiKit/FreekeyTags',
  component: FreekeyTags,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FreekeyTags {...args} />;

export const WithValuePath = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithValuePath.args = {
    tags: [{id: 1, name: 'Wow'}, {id: 2, name: 'Excellent'}, {id: 3, name: 'Marvellous'}, {id: 4, name: 'Awesome'}],
    containerClass: 'adjust-size',
    valuePath:'name'
};

export const WithoutValuePath = Template.bind({});
WithoutValuePath.args = {
    tags: ['Wow', 'Excellent', 'Marvellous', 'Awesome'],
    containerClass: 'adjust-size'
};