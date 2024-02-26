let todos = [{ id: 1, title: "html" }, { id: 2, title: "css" }, { id: 3, title: "js" }];
let loggedIn = true;
let isValidRole = true;

function checkAuthentication(req, res, next) {
  // req.body = {
  //     title: "react"
  // }
  if (!loggedIn) {
    res.status(401).send();
  }
  // console.log("checkAuthentication");
  next();
}

function hasValidRole(req, res, next) {
  if (!isValidRole) {
    return res.status(403).send();
  }
  next();
}

function validData(req, res, next) {
  if (req.body.title?.trim() == "") {
    return res.status(400).send({
      message: "Please don't send an empty string",
    });
  }
  next();
}

function duplicateEntry(req, res, next) {
// let duplicate = false;
// let duplicateTitle = todos.find((todo) => todo.title == req.body.title);
// if (duplicateTitle != undefined) {
  //   duplicate = true;
  // }
  
  // if (duplicate) {
    //   return res.status(400).send({
      //     message: "duplicate entry",
      //   });
      // }
  let duplicate = false;
  duplicate = todos.some(todo => todo.title == req.body.title);
  if(duplicate) {
    return res.status(400).send({
      message: "duplicate entry"
    });
  }

  next();
}



module.exports = {
  checkAuthentication,
  hasValidRole,
  validData,
  duplicateEntry,
  todos,
};
