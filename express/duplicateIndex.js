const express = require("express");
const app = express();
const {
  checkAuthentication,
  hasValidRole,
  validData,
  duplicateEntry,
  todos,
} = require("./middleware/auth.js");

// app.use(checkAuthentication); //global middleware i.e works for all get, post, delete request etc
// app.use(hasValidRole); //global

app.use(express.json()); //sets up req.body -> { return (req, res, next) => {req.body = postman or post body}}
app.get("/api/todos", (req, res) => {
  // console.log("response todos hello");
  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then((response) => response.json())
  // .then((json) => {
  //   res.send(json);
  // });
  res.send(todos);
  //   res.send(todos);
  // res.json(todos)
});

app.post(
  "/api/todos",
  checkAuthentication,
  hasValidRole,
  validData,
  duplicateEntry,
  (req, res) => {
    // if(loggedIn) {
    //     todos.push('git');
    //     console.log('response todos hello');
    //     return res.send('todos created');
    // }
      let currentTime = new Date();
      let maxId = Math.max(...todos.map((el) => el.id), 0);
      let object = {
        id: maxId + 1,
        title: req.body.title,
        createdAt: currentTime.toLocaleString().substring(0, 9)
      }

  

    // console.log(req.body.title);
    todos.push(object);

    return res.send(`The object with title ${req.body.title} has been created`);

    // res.status(401).send({
    //     message: 'unauthorized'
    // });
  }
);

app.delete("/api/todos/reset", (req, res) => {
  //   if (loggedIn) {
  //   todos = [];
  //   return res.send('Todos reset');
  // return res.status(204).send();
  //   }

  // res.status(401).send({
  //     message: 'unauthorized'
  // }); note: not needed because you are using middleware
  res.send({
    message: "delete request",
  });
});

app.put('/api/todos/update/:title', (req, res) => {
  const title = req.params.title;
  const update = req.body;
  console.log(title);
  const todo = todos.find((el) => {
    return el.title == title;
  });
  todo.title= update.title;
  res.send({
    message: `${title} updated to ${update.title}`
  });
});

app.listen(8000, () => {
  console.log("Server started in port 8000");
});
