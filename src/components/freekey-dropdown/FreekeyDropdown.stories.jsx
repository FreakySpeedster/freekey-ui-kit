import React from 'react';

import FreekeyDropdown from '.';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UiKit/FreekeyDropdown',
  component: FreekeyDropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FreekeyDropdown {...args} />;

export const Dropdown = Template.bind({});
Dropdown.args = {
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