import React from "react";
import { Link } from "react-router-dom";

export default function Cocktail ( { id, name, image, info, glass, instructions } ) {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={ image } alt={ name } />
      </div>
      <div className="cocktail-footer">
        <h3>{ name }</h3>
        <h4>{ glass }</h4>
        <p>{ info }</p>
        <p style={ { textAlign: "justify" } }>{ instructions }</p>
        <div style={ { marginTop: "20px" }}>
          <Link to={ `/cocktail/${ id }` } className="btn btn-primary">details</Link>
        </div>
      </div>
    </article>
  );
}
