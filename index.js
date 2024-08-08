import express from "express";
import bodyParser from "body-parser";
import pg from "pg"
const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "Password*",
});

db.connect();

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
  const email = req.body.username;
  const password = req.body.password;
  // Use the pg query to create a new user and then insert them into the database
  try{
    await db.query("INSERT INTO secrets (username, password) VALUES ($1, $2)", [email, password]);
  } catch(err){
    console.log(err);
  }
  res.render("secrets.ejs");
});

app.post("/login", async (req, res) => {
  const  email = req.body.username;
  const password = req.body.password;
  res.render("secrets.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
