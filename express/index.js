const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

//mongodb setup
mongoose
  .connect("mongodb://127.0.0.1:27017/bookStore")
  .then(() => console.log("Connected"));

const Schema = mongoose.Schema;
const BookSchema = new Schema({
  title: {
    type: String,
    unique: true
  },

  isbn: Number,
});

const Book = mongoose.model("Book", BookSchema);

// app.get("/api/books", (req, res) => {
//   Book.find().then((data) => {
//     // console.log(data);
//     res.send(data);
//   });
// });

app.get("/api/books", async (req, res) => {
  let books = await Book.find();
  res.send(books);
})

app.post("/api/books", (req, res) => {
//   console.log(req.body);
let {title, isbn} = req.body;
  Book.create({
    title,
    isbn
  }).then((data) => {
    console.log(data);
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err);
  });
});

app.put("/api/books/:id", (req, res) => {
  let {title, isbn} = req.body;
  let { id } = req.params;
  Book.findByIdAndUpdate({_id: id}, {$set: {title, isbn}})
  .then(()=> {
    res.send('Updated');
  })
  .catch((err) => {
    res.send(err);
  });
});

app.delete("/api/books/:id", (req, res) => {
  let { id } = req.params;
  Book.deleteOne({_id: id}).then(() => {
    res.send({
      message: `document with id: ${id} successfully deleted`
    });
  })
  .catch((err) => {
    res.send(err);
  });
});

app.listen(8000, () => {
  console.log("Server has successfully started on PORT 8000");
});
