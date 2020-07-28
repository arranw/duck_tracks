const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/feedings", require("./routes/feeding"));

// Serve Static Assests in Production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  console.log("Duck Tracks\n " + " Production Environment Starting");

  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = app;
