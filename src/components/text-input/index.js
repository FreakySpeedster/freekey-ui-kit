import React from 'react';
import './freekey-text-input.css';

const TextInput = (props) => {
    const { primaryLabel, secondaryLabel, errorText, isError, isDisabled, placeholder } = props;
    return (
        <div className="textbox-container">
            <div className="labels-box">
                <label className="primary-label">{primaryLabel}</label>
                {secondaryLabel && <label className="secondary-label">{secondaryLabel}</label>}
            </div>
            <div className="input-wrapper">
                <input className={`textbox ${isError && 'textbox-error'} ${isDisabled && 'mod-disabled'}`} type='text' placeholder={placeholder} disabled={isDisabled} />
                {isError && <i class="icon"></i>}
            </div>
            <div className="error-text">{errorText}</div>
        </div>
    );
}
export default TextInput;
