import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { search } from "../../../BooksAPI";
import Container from "../../atoms/Container";
import Book from "../../molecules/Book/Book";
import { ROUTES } from "../../pages/Routes/route";
import Chrome from "../../templates/Chrome";
import noCover from "../../../icons/fallback-thumbnail.png";

const Search = () => {
  const baseclass = "search";

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = event => {
    setSearchQuery(event.target.value);
  };

  const [state, setState] = useState({
    books: []
  });

  useEffect(() => {
    (searchQuery &&
      search(searchQuery)
        .then(books => {
          if (books.error) {
            setState({
              ...state,
              books: []
            });

            return books.error;
          }
          if (books) {
            setState({
              ...state,
              books
            });
          }
        })
        .catch(err => {})) ||
      setState({
        ...state,
        books: []
      });
  }, [searchQuery]);

  return (
    <Chrome>
      <Container className={baseclass}>
        <div className="search-books">
          <div className="search-books-bar">
            <NavLink to={ROUTES.LIST}>
              <button className="close-search">Close</button>
            </NavLink>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                onChange={handleSearchQuery}
                value={searchQuery}
                placeholder="Search by title or author"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {state.books && state.books.length > 0
                ? state.books.map(book => (
                    <li key={book.id}>
                      <Book
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        authors={book.authors}
                        cover={
                          (book.imageLinks && book.imageLinks.thumbnail) ||
                          noCover
                        }
                      />
                    </li>
                  ))
                : "No books match the current search."}
            </ol>
          </div>
        </div>
      </Container>
    </Chrome>
  );
};

export default Search;
