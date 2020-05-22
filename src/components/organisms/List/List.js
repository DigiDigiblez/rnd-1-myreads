import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { getAll } from "../../../BooksAPI";
import Container from "../../atoms/Container";
import { ROUTES } from "../../pages/Routes/route";
import Chrome from "../../templates/Chrome";
import Bookshelf from "../Bookshelf/Bookshelf";
import Book from "../../molecules/Book/Book";

const List = () => {
  const baseclass = "list";

  const [lastBookChanged, setLastBookChanged] = useState();

  const [state, setState] = useState({
    books: {
      "Currently Reading": [],
      "Want to Read": [],
      Read: []
    }
  });

  useEffect(() => {
    getAll().then(books => {
      const currentlyReading = [];
      const wantToRead = [];
      const read = [];

      books.map(book => {
        switch (book.shelf) {
          case "currentlyReading": {
            currentlyReading.push(book);
            break;
          }
          case "wantToRead": {
            wantToRead.push(book);
            break;
          }
          case "read": {
            read.push(book);
            break;
          }
          default: {
            break;
          }
        }

        setState({
          ...state,
          books: {
            ...state.books,
            "Currently Reading": currentlyReading,
            "Want to Read": wantToRead,
            Read: read
          }
        });
      });
    });

    // Resetting the flag allows for moving the same book multiple times.
    setLastBookChanged(null);
  }, [lastBookChanged]);

  return (
    <Container className={baseclass}>
      <Chrome>
        <div className="list-books">
          <div className="list-books-content">
            <div>
              {Object.keys(state.books).map(bookshelfTitle => (
                <Bookshelf key={bookshelfTitle} title={bookshelfTitle}>
                  {state.books[bookshelfTitle].map(book => (
                    <Book
                      key={book.id}
                      id={book.id}
                      title={book.title}
                      authors={book.authors}
                      cover={book.imageLinks.thumbnail}
                      shelf={bookshelfTitle}
                      setLastBookChanged={id => setLastBookChanged(id)}
                    />
                  ))}
                </Bookshelf>
              ))}
            </div>
          </div>
          <div className="open-search">
            <NavLink to={ROUTES.SEARCH}>
              <button>Add a book</button>
            </NavLink>
          </div>
        </div>
      </Chrome>
    </Container>
  );
};

export default List;
