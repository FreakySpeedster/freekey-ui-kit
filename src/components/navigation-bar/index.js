import React, {useState} from 'react';
import './freekey-navigation-bar.css';
import Avatar from '../avatar';
import MenuOptions from './menu-options';

const examplePayloadFormat = {
    logo: 'https://img.freepik.com/premium-vector/key-logo-design-template-secure-symbol_18099-4057.jpg?w=40',
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
}

const NavigationBar = (props) => {
    // const [showSubmenu, setShowSubmenu] = useState(false);
    props = examplePayloadFormat;

    return (
        <div className='navigation-bar'>
            <div className='navigation-bar__logo'>
                <img src={props.logo} alt='logo' />
            </div>
            <div className='navigation-bar__menu'>
                {props.menuItems.map((menuItem) => {
                    return <MenuOptions menuItem={menuItem} />
                })}
            </div>
            <div className='navigation-bar__user'>
                <Avatar name={'John Doe'} showInitials={false} gender={'MALE'}/>
            </div>
        </div>

    );
}
export default NavigationBar;