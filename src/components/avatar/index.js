import React from 'react';
import { ReactComponent as AvatarBoy } from '../../assets/avatar-boy.svg';
import { ReactComponent as AvatarGirl } from '../../assets/avatar-girl.svg';
import { ReactComponent as AvatarMan } from '../../assets/avatar-man.svg';
import { ReactComponent as AvatarWoman } from '../../assets/avatar-woman.svg';
import './freekey-avatar.css';

const Avatar = (props) => {
    const { gender, age } = props;
    const getDarkColor = () => {
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += Math.floor(Math.random() * 10);
        }
        return color;
    }
    return (
    <div className="avatar-size">
        {gender === 'MALE' ?  
            age < 25 ? <AvatarBoy style={{color: getDarkColor()}}/> : <AvatarMan style={{color: getDarkColor()}}/> : 
            age < 25 ? <AvatarGirl style={{color: getDarkColor()}}/> : <AvatarWoman style={{color: getDarkColor()}}/>}
    </div>);
}

export default Avatar;
