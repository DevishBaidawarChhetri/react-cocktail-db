import React from "react";

export default function SearchForm ( { setSearchTerm } ) {
  const searchValue = React.useRef( '' );
  React.useEffect( () => {
    searchValue.current.focus();
  }, [] );
  const handleSubmit = ( event ) => {
    event.preventDefault();
  }
  const searchCocktail = () => {
    setSearchTerm( searchValue.current.value );
  }
  return (
    <section className="section search-bg">
      <h2 className="section-title white">search cocktails</h2>
      <form className="form search-form" onSubmit={ handleSubmit }>
        <div className="form-control">
          <label htmlFor="name">search your cocktail</label>
          <input type="text" id="name" name="name" placeholder="Margarita" onChange={ searchCocktail } ref={ searchValue } />
        </div>
      </form>
    </section>
  );
}
