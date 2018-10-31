const React = require("react");

const addBook = props => (
  <form>
    <div className="form-group">
      <label htmlFor="book-name">Book Title</label>
      <input type="text" className="form-control" id="book-name" />
    </div>
    <div className="form-group">
      <label htmlFor="author">Author</label>
      <input type="text" className="form-control" id="author" />
    </div>
    <div className="form-group">
      <label htmlFor="pageCount">Number of Pages</label>
      <input type="text" className="form-control" id="page-count" />
    </div>
    <div className="form-group">
      <label htmlFor="currentPage">Current Page</label>
      <input type="text" className="form-control" id="currentPage" />
    </div>
    <div className="form-check">
      <input type="checkbox" className="form-check-input" id="readBefore" />
      <label className="form-check-label" htmlFor="readBefore">
        Book has been read?
      </label>
    </div>
    {props.title ? (
      <button type="submit" id="editBook" className="btn btn-warning">
        Edit Book
      </button>
    ) : (
      <button type="submit" id="addBook" className="btn btn-success">
        Add Book
      </button>
    )}
  </form>
);

module.exports = addBook;
