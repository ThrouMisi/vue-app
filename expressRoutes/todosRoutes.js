const express = require("express");
const todosRoutes = express.Router();
const todos = require("../models/todos");

todosRoutes.route("/").get(async function(req, res) {
  await todos.find(function(err, todos) {
    if (err) {
      console.log(err);
    } else {
      return res.json(todos);
    }
  });
});

todosRoutes.route("/update/:id").post(async function(req, res) {
  await todos.findOneAndUpdate({ "_id": req.params.id },{$set: {"name": req.body.name,"description": req.body.description, "isComplete": req.body.isComplete}},{new: true, useFindAndModify: false})
    .then(todo => {
      return res.json(todo)
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
      return err
    });


});

todosRoutes.route("/add").post(async function (req, res) {
  const todo = new todos(req.body);
  await todo
    .save()
    .then(todo => {
      return res.json(todo)
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
      return err
    });
});

todosRoutes.route("/delete/:id").get(async function (req, res) {
  await todos.findOneAndDelete({ _id: req.params.id})
    .then(todo => {
      return res.json(todo)
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
      return err
    });
});
module.exports = todosRoutes;
