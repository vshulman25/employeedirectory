import React from "react";
import "./style.css";


function SearchForm({handleInputChange}) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search"> </label>
        <input
          onChange={e => handleInputChange(e)}
          name="name"
          list="names"
          type="search"
          className="form-control"
          placeholder="Know who you're looking for? Try typing their name here..."
          id="search-by-name"
        />
      </div>
    </form>
  );
}

export default SearchForm;