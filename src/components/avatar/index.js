import React from 'react';
import { ReactComponent as AvatarBoy } from '../../assets/avatar-boy.svg';
import { ReactComponent as AvatarGirl } from '../../assets/avatar-girl.svg';
import { ReactComponent as AvatarMan } from '../../assets/avatar-man.svg';
import { ReactComponent as AvatarWoman } from '../../assets/avatar-woman.svg';
import './freekey-avatar.css';

const Avatar = (props) => {
    const { gender, age, color, showInitials, name } = props;
    const getDarkColor = () => {
        if (color) {
            return color;
        }
        var newColor = '#';
        for (var i = 0; i < 6; i++) {
            newColor += Math.floor(Math.random() * 10);
        }
        return newColor;
    }
    const getInitialsFromName = () => {
        var initials = name.match(/\b\w/g) || [];
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        return initials;
    }

    return (
    <>
        {showInitials ? 
            (<div className='avatar-initial-container'>
                <div style={{backgroundColor: getDarkColor()}} className="avatar-initials">{getInitialsFromName()}</div>
            </div>) :
        (<div className="avatar-size">
            {gender && (gender === 'MALE' ?  
                age < 25 ? <AvatarBoy style={{color: getDarkColor()}}/> : <AvatarMan style={{color: getDarkColor()}}/> : 
                age < 25 ? <AvatarGirl style={{color: getDarkColor()}}/> : <AvatarWoman style={{color: getDarkColor()}}/>)}
        </div>)}
    </>
    );
}

export default Avatar;
