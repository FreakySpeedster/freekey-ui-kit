import React from 'react';
import './freekey-checkbox.css';


const Checkbox = (props) => {
    const { label,  isDisabled, isChecked } = props;
    const [checked, setChecked] = React.useState(isChecked);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <div>
            <label className={`container ${isDisabled && 'mod-disabled'}`}>{label}
                <input type="checkbox" checked={checked} disabled={isDisabled} onChange={handleChange}/>
                <span className="checkmark"></span>
            </label>
        </div>
    );
}
export default Checkbox;