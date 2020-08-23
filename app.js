const express = require("express"),
      body_parser = require("express"),
      ejs = require("ejs"),
      date = require(__dirname + "/exports/date.js");

const app = express();
app.use(express.static("public"));
app.use(body_parser.urlencoded({extended: true}));
app.set("view engine", "ejs");

const items = [];

app.get("/", (req, res) => {
    const params = {
        day: date.getDay(),
        yearMonth: date.getMonth() + ", " + date.getYear(),
        items: items
    };
    res.render("list", params);
});

app.post("/", (req, res) => {
    items.push(req.body.newItem);
    res.redirect("/");
});

app.listen(8080, () => {
    console.log("Server running in port 8080!");
});