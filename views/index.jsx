const React = require('react')
// const Form = require('./form')

const Page = () => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <title>Reading List App</title>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>
    <body>
      <div className="container">
        <div className="jumbotron">
          <h1 className="text-center">
            <span className="fa fa-book" /> Reading List App
          </h1>
          <hr />
          <h2 className="text-center">
            Create and manage your reading list here!
          </h2>
          <br />
          <div className="text-center">
            <a href="/books">
              <button className="btn btn-lg btn-primary">
                <span className="fa fa-list-alt" /> View Books
              </button>
            </a>
            <a href="/forms">
              <button className="btn btn-lg btn-success">
                <span className="fa fa-book" /> Add Books
              </button>
            </a>
          </div>
          
        </div>
      </div>
      <script src="/index.js" />
    </body>
  </html>
);

module.exports = Page