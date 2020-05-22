import "./Book.css";

import React from "react";

const Book = ({ title, authors, cover }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 150,
              height: 200,
              backgroundImage: `url(${cover})`
            }}
          />
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors.map((author, i) => (
            <span className="author">
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
