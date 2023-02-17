import React from 'react';

import FreekeyButton from '.';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UiKit/FreekeyButton',
  component: FreekeyButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FreekeyButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    type: 'PRIMARY',
    text: 'Login',
    inProgressText: 'Logging In',
    isInProgress: false,
    isDisabled: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'SECONDARY',
  text: 'Delete',
  inProgressText: 'Deleting',
  isInProgress: true,
  isDisabled: true
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'TERTIARY',
  text: 'Reset',
  inProgressText: '',
  isInProgress: false,
  isDisabled: false
};

export const ButtonWithIconLeft = Template.bind({});
ButtonWithIconLeft.args = {
  type: 'PRIMARY',
  text: 'Login',
  inProgressText: 'Logging In',
  isInProgress: true,
  isDisabled: false,
  iconPosition: 'LEFT',
  icon: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <line x1="12" y1="6" x2="12" y2="3" />
          <line x1="16.25" y1="7.75" x2="18.4" y2="5.6" />
          <line x1="18" y1="12" x2="21" y2="12" />
          <line x1="16.25" y1="16.25" x2="18.4" y2="18.4" />
          <line x1="12" y1="18" x2="12" y2="21" />
          <line x1="7.75" y1="16.25" x2="5.6" y2="18.4" />
          <line x1="6" y1="12" x2="3" y2="12" />
          <line x1="7.75" y1="7.75" x2="5.6" y2="5.6" />
        </svg>
};

export const ButtonWithIconRight = Template.bind({});
ButtonWithIconRight.args = {
  type: 'PRIMARY',
  text: 'Login',
  inProgressText: 'Logging In',
  isInProgress: true,
  isDisabled: false,
  iconPosition: 'RIGHT',
  icon: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <line x1="12" y1="6" x2="12" y2="3" />
          <line x1="16.25" y1="7.75" x2="18.4" y2="5.6" />
          <line x1="18" y1="12" x2="21" y2="12" />
          <line x1="16.25" y1="16.25" x2="18.4" y2="18.4" />
          <line x1="12" y1="18" x2="12" y2="21" />
          <line x1="7.75" y1="16.25" x2="5.6" y2="18.4" />
          <line x1="6" y1="12" x2="3" y2="12" />
          <line x1="7.75" y1="7.75" x2="5.6" y2="5.6" />
        </svg>
};
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
