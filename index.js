import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});




// These are the two methods you need to define bruh.
// Dont confuse get methods with post methods let this be your lesson
app.post("/register", async (req, res) => {
  const password = req.body.password;
  const username = req.body.username;
  console.log(username);
  console.log(password);
  res.render("secrets.ejs");
});

app.post("/login", async (req, res) => {
  const password = req.body.password;
  const  username = req.body.username;
  console.log(username);
  console.log(password);
  res.render("secrets.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
