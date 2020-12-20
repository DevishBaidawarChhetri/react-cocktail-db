import React from "react";

export default function Footer () {

  return (
    <React.Fragment>
      <section className="footer">
        <p>&copy; <a href="https://www.devish.com.np">Cocktail DB</a> { new Date().getFullYear() }. All Rights Reserved. </p>
      </section>
    </React.Fragment>
  )
}