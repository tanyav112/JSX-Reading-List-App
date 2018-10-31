module.exports = app => {
  // require('./bookRoutes')

  app.get("/", (req, res) => res.render("index"))
  app.get("/books", (req, res) => res.render("books"));
  app.get("/forms", (req, res) => res.render("form"))

}
