import React from 'react';
import { ReactComponent as AvatarBoy } from '../../assets/avatar-boy.svg';
import { ReactComponent as AvatarGirl } from '../../assets/avatar-girl.svg';
import { ReactComponent as AvatarMan } from '../../assets/avatar-man.svg';
import { ReactComponent as AvatarWoman } from '../../assets/avatar-woman.svg';
import './freekey-avatar.css';

const Avatar = (props) => {
    const { gender, age } = props;
    return (
    <div className="avatar-size">
        {gender === 'MALE' ?  
            age < 25 ? <AvatarBoy /> : <AvatarMan /> : 
            age < 25 ? <AvatarGirl /> : <AvatarWoman />}
    </div>);
}

export default Avatar;
