import React, { useState } from 'react';
import axios from 'axios';

const AutocompleteInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value.length > 0) {
      try {
        const response = await axios.get(`/autocomplete/${value}`);
        const parser = new DOMParser();
        const xml = parser.parseFromString(response.data, 'application/xml');
        const suggestionsArray = Array.from(xml.querySelectorAll('suggestion')).map((node) => node.getAttribute('data'));
        setSuggestions(suggestionsArray);
      } catch (error) {
        console.error(error);
      }
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default AutocompleteInput;
