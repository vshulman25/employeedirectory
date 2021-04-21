import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm({handleInputChange}) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Search by Name:</label>
        <input
          onChange={e => handleInputChange(e)}
          name="name"
          list="names"
          type="search"
          className="form-control"
          placeholder="Type in the name of an Employee to begin"
          id="search-by-name"
        />
      </div>
    </form>
  );
}

export default SearchForm;