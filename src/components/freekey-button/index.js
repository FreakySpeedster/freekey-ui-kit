import React from 'react';
import { BUTTON_TYPES } from '../../common/data/freekey-button';
import './freekey-button.css';

const FreekeyButton = (props) => {
    const { type, text, isInProgress, inProgressText, icon, iconPosition, isDisabled } = props;
    const getButtonClass = () => {
        switch (type) {
            case BUTTON_TYPES.PRIMARY:
                return 'primaryBtn btn';
            case BUTTON_TYPES.SECONDARY:
                return 'secondaryBtn btn';
            default:
                return 'tertiaryBtn';
        } 
    }
    const getDisabledClass = () => {
        return isInProgress || isDisabled ? 'disabledBtn' : '';
    }
    return (
        <div className={`${getButtonClass()} ${getDisabledClass()}`} onClick={props.buttonClick} >
            {icon && iconPosition === 'LEFT' && icon}
            {isInProgress ? inProgressText : text}
            {icon && iconPosition === 'RIGHT' && icon}
        </div>
    );
}

export default FreekeyButton;