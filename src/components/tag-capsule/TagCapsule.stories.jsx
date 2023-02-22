import React from 'react';

import TagCapsule from '.';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UiKit/TagCapsule',
  component: TagCapsule,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TagCapsule {...args} />;

export const WithIconLeft = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithIconLeft.args = {
    text: 'Important',
    showCloseIcon: true,
    iconPosition: 'LEFT'
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
    text: 'Dark',
    showCloseIcon: true,
    iconPosition: 'RIGHT'
};

export const NoIcon = Template.bind({});
NoIcon.args = {
    text: 'Inspiring',
    showCloseIcon: false
};
