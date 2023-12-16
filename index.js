// We are importing the express package
// Package - A code file that contains lot of functions to support our development which maybe written by other developers
// We require express in the project
const express = require("express");
// We call the express and store it in variable app
const app = express();

const users = [
  {
    id: 0,
    email: "sid@gmail.com",
    type: "normal",
  },
  {
    id: 1,
    email: "arinay@gmail.com",
    type: "normal",
  },
  {
    id: 2,
    email: "namya@gmail.com",
    type: "normal",
  },
  {
    id: 3,
    email: "swayam@gmail.com",
    type: "normal",
  },
  {
    id: 4,
    email: "random@gmail.com",
    type: "normal",
  },
];

// localhost:4000 is your home route
app.get("/", (req, res) => {
  console.log(req.params);
  console.log(req.url);
  res.send("<h1>Home and the request made was </h1>" + req.params);
});

// localhost:4000/profile -> TO ACCESS ALL THE USER PROFILE ( Only for admin )
app.get("/profile", (req, res) => {
  if (user.type == "admin") {
    res.send("All the profiles are visible to you");
  } else {
    res.status(404).send("Page not found");
  }
});


// To make an route call it /profile/:id/changeEmail/:email ->
app.get("/profile/:id/changeEmail/:email", (req,res) => {
    console.log(req.params)
    res.send("hello")
})


// localhost:4000/profile/userID -> TO ACCESS THE SPECIFIC USER PROFILE
// :id means that you can access the parameter sent by the user.
app.get("/profile/:id", (req, res) => {
  //   console.log(req.params);
  //   res.send(req.params.id + " The id of specific user");

  // 1. Write a feature, that will search through the whole array for id
  // 2. If id is found send the data back to the user
  // 3. If id is not found send an error message

  for (user of users) {
    if (user.id == req.params.id) {
      res.send(`<h1> The email is : ${user.email} </h1>
                     <h3> The id is : ${user.id}
            `);
    }
  }

  res.send(`<h1 style="background:red;">User not found</h1>`);
});
 



const PORT = 4000;
// Whenever you go to localhost:4000 your server will respond you since its listening to the port
app.listen(PORT, () => {
  console.log("You server is running on port: " + PORT);
});
