import React, { useState } from "react";

const FreekeySearch = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // code for performing search based on searchTerm
  //   // and updating searchResults state with the results
  //   setSearchResults([...resultsFromSearch]);
  // };

  return (
    <div>
      <form >
        <label>
          Search:
          <input type="text" value={searchTerm} onChange={handleInputChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FreekeySearch;