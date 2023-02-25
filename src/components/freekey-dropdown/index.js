import React, { useState } from 'react';
import './freekey-dropdown.css';

const noResults ={value: '', label: 'No results found'};

const FreekeyDropdown = (props) => {
  const { errorText, isError, isDisabled, placeholder, options } = props;
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [canShowOptions, setCanShowOptions] = useState(false);
  const [animatorClass, setAnimatorClass ] = useState('');

  const handleOptionClick = (option) => {
    let newValue = option;
    setSelectedOption(newValue);
    setSearchTerm(newValue.label);
    hideOptions();
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOptions = options ? options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  const showOptions = () => {
    setCanShowOptions(true);
    addAnimatorClass('rotate');
  };

  const hideOptions = () => {
    setCanShowOptions(false);
    addAnimatorClass('rotate-reverse');
  };

  const addAnimatorClass = (animationClassName) => {
    setAnimatorClass(animationClassName);
  };

  return (
    <div>
      <div onFocus={showOptions}>
        <div className="dropdown-input-wrapper">
          <input 
            className={`dropdown-input ${isError && 'dropdown-input_error'} ${isDisabled && 'mod-dropdown-disabled'}`} 
            type="text" 
            placeholder={placeholder} 
            onChange={handleSearchChange} 
            value={searchTerm} 
            disabled={isDisabled}
          />
          <i class={`dropdown-icon ${animatorClass}`}></i>
          {isError && <div className="dropdown-input_error-text">{errorText}</div>}
        </div>
        {canShowOptions && <div className="dropdown-options">
          {filteredOptions.length > 0 && filteredOptions.map((option) => (
            <option className='option' key={option.value} value={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </option>
          ))}
          {filteredOptions.length === 0 && <div className='option' key={noResults.value} value={noResults.value}>
              {noResults.label}
            </div>}
        </div>}
      </div>
    </div>
  );
}

export default FreekeyDropdown;