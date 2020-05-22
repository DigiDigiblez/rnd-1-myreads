import React from "react";
import { NavLink } from "react-router-dom";

import Container from "../../atoms/Container";
import { ROUTES } from "../../pages/Routes/route";
import Chrome from "../../templates/Chrome";

const Search = () => {
  const baseclass = "search";

  return (
    <Chrome>
      <Container className={baseclass}>
        <div className="search-books">
          <div className="search-books-bar">
            <NavLink to={ROUTES.LIST}>
              <button className="close-search">Close</button>
            </NavLink>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid" />
          </div>
        </div>
      </Container>
    </Chrome>
  );
};

export default Search;
