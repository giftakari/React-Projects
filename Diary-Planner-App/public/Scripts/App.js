"use strict";

// JSX - JavaScript XHL
//********Exercises
var appObject = {
  title: "Lets learn react",
  subtitle: "Learning React is challanging"

};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    appObject.title,
    " "
  ),
  React.createElement(
    "p",
    null,
    appObject.subtitle,
    " "
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Our servives "
    ),
    React.createElement(
      "li",
      null,
      "Our brothers "
    )
  )
);
var user = {
  name: "Godsgift",
  age: 36,
  location: "Sydney"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location:",
      location
    );
  }
}

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anomynous"
  ),
  React.createElement(
    "p",
    null,
    "Age :",
    user.age
  ),
  getLocation(user.location)
);

/* var template = React.createElement(
  "h1",
  { id: "someId" },
  "Welcome to Abolga Meet and Greet"
); */

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
