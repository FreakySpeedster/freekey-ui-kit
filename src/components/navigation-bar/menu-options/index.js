import React, { useState, useEffect } from 'react';
import '../freekey-navigation-bar.css';

const MenuOptions = (props) => {
    const [canShowMenuOptions, setCanShowMenuOptions] = useState(false);
    const { menuItem } = props;
    const handleClickMenuItem = () => {
        setCanShowMenuOptions(!canShowMenuOptions);
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
    }, [canShowMenuOptions]);

    const handleOutsideClick = (event) => {
        const menuItemElement = document.getElementById(menuItem.name);
        // const loginButton = document.getElementById('tynyfy-login-button');
        if (menuItemElement && !menuItemElement.contains(event.target)) {
            setCanShowMenuOptions(false);
        }
    };

    return (
        <>
            {menuItem.subMenuItems && (
                <div id={`${menuItem.name}`} className='menu-container' onClick={() => handleClickMenuItem()}>
                    <a className='menu-link' href={menuItem.link}>{menuItem.name}</a>
                    {menuItem.subMenuItems && <div className={`dropdown-content ${canShowMenuOptions && 'active'}`}>
                        {menuItem.subMenuItems.map((subMenuItem) => {
                            return (
                                <div className='menu-container'>
                                    <a className='menu-link' href={subMenuItem.link}>{subMenuItem.name}</a>
                                </div>
                            )
                        })}
                    </div>}
                </div>) 
            }
            {!menuItem.subMenuItems && (
                <div id={`${menuItem.name}`} className='menu-container'>
                    <a className='menu-link' href={menuItem.link}>{menuItem.name}</a>
                </div>
            )}
        </>
    )

}
export default MenuOptions;