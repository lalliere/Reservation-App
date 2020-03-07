// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const tables = require("./tables");
const waitlist = require("./waitlist");


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3200;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(`${__dirname}/reserve.html`);
});

app.get("/tables", function(req, res) {
  res.sendFile(`${__dirname}/tables.html`);
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });


app.listen(PORT, function() {
    console.log("WOrking on " + PORT)
})