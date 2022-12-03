import React from 'react';
import { BUTTON_TYPES } from '../../common/data/freekey-button';
import './freekey-button.css';

// class FreekeyButton extends Component {
//     constructor(props){  
//         super(props);
//         this.getButtonClass = this.getButtonClass.bind(this);
//         this.getBtnDisabledState = this.getBtnDisabledState.bind(this);
//     }
    
//     getButtonClass() {
//         switch (this.props.type) {
//             case BUTTON_TYPES.PRIMARY:
//                 return 'primaryBtn btn';
//             case BUTTON_TYPES.SECONDARY:
//                 return 'secondaryBtn btn';
//             default:
//                 return 'tertiaryBtn';
//         } 
//     }
//     getBtnDisabledState() {
//         return this.props.isInProgress || this.props.isDisabled ? true : false;
//     }
//     render() {
//         return (
//             <button className={`${this.getButtonClass()}`} disabled={this.getBtnDisabledState()} onClick={this.props.buttonClick} >
//                 {this.props.icon && this.props.iconPosition === 'LEFT' && this.props.icon}
//                 {this.props.isInProgress ? this.props.inProgressText : this.props.text}
//                 {this.props.icon && this.props.iconPosition === 'RIGHT' && this.props.icon}
//             </button>
//         );
//     }
// }
// export default FreekeyButton;

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
    const getBtnDisabledState = () => {
        return isInProgress || isDisabled ? true : false;
    }
    return (
        <button className={`${getButtonClass()}`} disabled={getBtnDisabledState()} onClick={props.buttonClick} >
            {icon && iconPosition === 'LEFT' && icon}
            {isInProgress ? inProgressText : text}
            {icon && iconPosition === 'RIGHT' && icon}
        </button>
    );
}
export default FreekeyButton;
