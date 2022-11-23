import React from 'react';
import './freekey-checkbox.css';


const FreekeyCheckbox = (props) => {
    const { label,  isDisabled } = props;
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const getBtnDisabledState = () => {
        return isDisabled;
    }
    return (
        <div>
            <label class="container">{label}
                <input type="checkbox" checked={checked} onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
        </div>
    );
}
export default FreekeyCheckbox;