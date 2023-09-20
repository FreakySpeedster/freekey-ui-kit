import React from 'react';

import NavigationBar from '.';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UiKit/NavigationBar',
  component: NavigationBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <NavigationBar {...args} />;

export const Nested = Template.bind({});
Nested.args = {
    logo: 'https://www.freekeyapp.com/assets/images/logo.png',
    menuItems: [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            subMenuItems: [
                {
                    name: 'Product 1',
                    link: '/product1'
                },
                {
                    name: 'Product 2',
                    link: '/product2'
                },
            ]
        },
        {
            name: 'Contact',
            link: '/contact-us'
        },
        {
            name: 'More Options',
            subMenuItems: [
                {
                    name: 'Expertise',
                    link: '/expertise'
                },
                {
                    name: 'Help?',
                    link: '/help'
                },
                ]
            }
        ],
    user: {
        name: 'John Doe',
        email: 'johndoe@johndoe.com'
    }
};

export const Flat = Template.bind({});
Flat.args = {
    logo: 'https://www.freekeyapp.com/assets/images/logo.png',
    menuItems: [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Contact',
            link: '/contact-us'
        },
        {
            name: 'More Options',
            link: '/more-options'
        }
        ],
    user: {
        name: 'John Doe',
        email: 'johndoe@johndoe.com'
    }
};