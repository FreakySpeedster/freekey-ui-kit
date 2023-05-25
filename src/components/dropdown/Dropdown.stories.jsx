import React from 'react';

import Dropdown from '.';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UiKit/Dropdown',
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Dropdown {...args} />;

export const SingleSelect = Template.bind({});
SingleSelect.args = {
    isError: false,
    errorText: 'Invalid Selection',
    isDisabled: false,
    placeholder: 'Search City',
    options: [
        { value: 'default', label: '-----'},
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
      ]
};

export const DropdownWithError = Template.bind({});
DropdownWithError.args = {
    isError:true,
    errorText: 'Invalid Selection',
    isDisabled: false,
    placeholder: 'Search City',
    options:[
        { value: 'default', label: '-----'},
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
      ]
};

export const DropdownDisabled = Template.bind({});
DropdownDisabled.args = {
    isError:false,
    errorText: 'Invalid Selection',
    isDisabled: true,
    placeholder: 'Search City',
    options:[
        { value: 'default', label: '-----'},
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
      ]
};