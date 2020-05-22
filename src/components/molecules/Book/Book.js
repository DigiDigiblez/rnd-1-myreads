import "./Book.css";

import React from "react";
import { update } from "../../../BooksAPI";

const Book = ({ id, title, authors, cover, shelf, setLastBookChanged }) => {
  const baseclass = "book";

  const handleShelfChange = ({ target }) =>
    update(id, target.value).then(() => setLastBookChanged(id));

  return (
    <li key={id}>
      <div className={baseclass}>
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 190,
              backgroundImage: `url(${cover})`
            }}
          />
          <div className="book-shelf-changer">
            <select onChange={handleShelfChange}>
              <option value="move" disabled>
                Move to...
              </option>
              <option
                value="currentlyReading"
                selected={shelf === "Currently Reading"}
              >
                Currently Reading
              </option>
              <option value="wantToRead" selected={shelf === "Want to Read"}>
                Want to Read
              </option>
              <option value="read" selected={shelf === "Read"}>
                Read
              </option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors.map((author, i) => (
            <span key={author} className="author">
              {author}
              {/* Add comma only if more than one author and not last author */}
              {authors.length > 1 && i <= authors.length - 2 && ","}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
};

export default Book;
