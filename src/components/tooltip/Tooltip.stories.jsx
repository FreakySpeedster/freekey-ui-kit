import React from 'react';

import Tooltip from '.';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UiKit/Tooltip',
  component: Tooltip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Tooltip {...args} />;

export const Left = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Left.args = {
    text: 'Mr. Nambi Naray...',
    tooltipText: 'Mr. Nambi Narayanan',
    position: 'LEFT'
};

export const Right = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Right.args = {
    text: 'Mr. Nambi Naray...',
    tooltipText: 'Mr. Nambi Narayanan',
    position: 'RIGHT'
};

export const Top = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Top.args = {
    text: 'Mr. Nambi Naray...',
    tooltipText: 'Mr. Nambi Narayanan',
    position: 'TOP'
};

export const Bottom = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Bottom.args = {
    text: 'Mr. Nambi Naray...',
    tooltipText: 'Mr. Nambi Narayanan',
    position: 'BOTTOM'
};
