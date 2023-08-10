import React from "react";

function Search({search, handleSearch}) {
// want to be able to take the original fetched arrayState .filter( pokemon => { pokemon.name.toLowerCase().contains( initialSearchState.toLowerCase() ) } )

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={(e) => handleSearch(e.target.value)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
