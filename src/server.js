const express = require("express");
const app = express();
const path = require('path');
const fs = require("fs");

app.use(express.json()); // for parsing application/json
app.use(express.static(path.resolve('../public')));
const router = express.Router();
// console.log(path.resolve('../public'));
router.get('/guide',function(req,res){
  res.sendFile(path.resolve('../public/guide.html'));
});

//readfile in nodejs
let posts = fs.readFileSync(path.resolve("./src/payloads/posts.json"));
//convert buffer to json
posts = JSON.parse(posts);

app.get("/", (req, res) => {
  res.sendFile(path.resolve('../public/index.html'));
});

app.get("/api/posts", (req, res) => {
    res.sendFile(path.resolve('./src/payloads/posts.json'));
});
app.get("/api/posts/:id", (req, res) => {
  res.send(posts[parseInt(req.params.id) - 1]);
});

app.post("/api/posts", (req, res) => {
  posts.push(req.body);
  res.send(posts);
});

app.put("/api/posts/:id", (req, res) => {
  posts[req.params.id] = req.body;
  res.send(posts[req.params.id]);
});

app.delete("/api/posts/:id", (req, res) => {
  posts.splice(req.params.id, 1);
  res.send(posts[req.params.id]);
});

//rest api for comments
let comments = fs.readFileSync("./src/payloads/comments.json");
comments = JSON.parse(comments);

app.get("/api/comments", (req, res) => {
  res.sendFile(path.resolve('./src/payloads/comments.json'));
});
app.get("/api/comments/:id", (req, res) => {
  res.send(comments[parseInt(req.params.id) - 1]);
});

app.post("/api/comments", (req, res) => {
  comments.push(req.body);
  res.send(comments);
});

app.put("/api/comments/:id", (req, res) => {
  comments[req.params.id] = req.body;
  res.send(comments[req.params.id]);
});

app.delete("/api/comments/:id", (req, res) => {
  comments.splice(req.params.id, 1);
  res.send(comments[req.params.id]);
});

// rest api for todos
let todos = fs.readFileSync("./src/payloads/todos.json");
todos = JSON.parse(todos);

app.get("/api/todos", (req, res) => {
  res.sendFile(path.resolve('./src/payloads/todos.json'));
});
app.get("/api/todos/:id", (req, res) => {
  res.send(todos[parseInt(req.params.id) - 1]);
});

app.post("/api/todos", (req, res) => {
  todos.push(req.body);
  res.send(todos);
});

app.put("/api/todos/:id", (req, res) => {
  todos[req.params.id] = req.body;
  res.send(todos[req.params.id]);
});

app.delete("/api/todos/:id", (req, res) => {
  todos.splice(req.params.id, 1);
  res.send(todos[req.params.id]);
});

// rest api for albums
let albums = fs.readFileSync("./src/payloads/albums.json");
albums = JSON.parse(albums);

app.get("/api/albums", (req, res) => {
  res.sendFile(path.resolve('./src/payloads/albums.json'));
});
app.get("/api/albums/:id", (req, res) => {
  res.send(albums[parseInt(req.params.id) - 1]);
});

app.post("/api/albums", (req, res) => {
  albums.push(req.body);
  res.send(albums);
});

app.put("/api/albums/:id", (req, res) => {
  albums[req.params.id] = req.body;
  res.send(albums[req.params.id]);
});

app.delete("/api/albums/:id", (req, res) => {
  albums.splice(req.params.id, 1);
  res.send(albums[req.params.id]);
});

// rest api for photos
let photos = fs.readFileSync("./src/payloads/photos.json");
photos = JSON.parse(photos);

app.get("/api/photos", (req, res) => {
  res.sendFile(path.resolve('./src/payloads/photos.json'));
});
app.get("/api/photos/:id", (req, res) => {
  res.send(photos[parseInt(req.params.id) - 1]);
});

app.post("/api/photos", (req, res) => {
  photos.push(req.body);
  res.send(photos);
});

app.put("/api/photos/:id", (req, res) => {
  photos[req.params.id] = req.body;
  res.send(photos[req.params.id]);
});

app.delete("/api/photos/:id", (req, res) => {
  photos.splice(req.params.id, 1);
  res.send(photos[req.params.id]);
});

// rest api for users
let users = fs.readFileSync("./src/payloads/users.json");
users = JSON.parse(users);

app.get("/api/users", (req, res) => {
  res.sendFile(path.resolve('./src/payloads/users.json'));
});
app.get("/api/users/:id", (req, res) => {
  res.send(users[parseInt(req.params.id) - 1]);
});

app.post("/api/users", (req, res) => {
  users.push(req.body);
  res.send(users);
});

app.put("/api/users/:id", (req, res) => {
  users[req.params.id] = req.body;
  res.send(users[req.params.id]);
});

app.delete("/api/users/:id", (req, res) => {
  users.splice(req.params.id, 1);
  res.send(users[req.params.id]);
});

app.use('/', router);

app.get('*', (req, res)=>{
  res.send(`<center>What!!!  <h2>"${req.url}"</h2>   Seriously</center>`, 404);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
