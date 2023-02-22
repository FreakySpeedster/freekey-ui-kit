import React, { useState } from 'react';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];

// Refer : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown_filter

const FreekeyDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleSearchChange} />
      <select value={selectedOption} onChange={(event) => handleOptionChange(event.target.value)}>
        <option value="">Select an option</option>
        {filteredOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FreekeyDropdown;