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
    hideOptions(newValue.label);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOptions = options ? options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  const showOptions = () => {
    setCanShowOptions(true);
    setSearchTerm('')
    addAnimatorClass('rotate');
  };

  const hideOptions = (newValue = {}) => {
    if (newValue) {
      setSearchTerm(newValue);
    }
    setCanShowOptions(false);
    addAnimatorClass('rotate-reverse');
  };

  const addAnimatorClass = (animationClassName) => {
    setAnimatorClass(animationClassName);
  };

  const isSelectedOption = (option) => {
    if (option.value === selectedOption?.value) {
      return true;
    }
    return '';
  };

  const SelectedSvg = () => (
    <svg className="selected-icon" width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#ffffff"></path> </g></svg>
  )

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
            <div className={`option ${isSelectedOption(option) && 'selected'}`} key={option.value} value={option.value} onClick={() => handleOptionClick(option)}>
              {option.label} {isSelectedOption(option) && <SelectedSvg/>}
            </div>
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