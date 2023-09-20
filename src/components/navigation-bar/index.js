import React, {useState} from 'react';
import './freekey-navigation-bar.css';
import Avatar from '../avatar';
import MenuOptions from './menu-options';

const NavigationBar = (props) => {

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