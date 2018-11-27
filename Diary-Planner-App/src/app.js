


// JSX - JavaScript XHL
//********Exercises
var appObject ={
   title: "Lets learn react",
   subtitle: "Learning React is challanging",

}

var template = (
<div>
        <h1>{appObject.title} </h1>
          <p>{appObject.subtitle} </p>
         <ol>
            <li>Our servives </li>
            <li>Our brothers </li>
          </ol>
</div>);
var user = {
  name: "Godsgift",
  age: 36,
  location: "Sydney"
};

function getLocation(location)
{ 
  if (location){
    return <p>Location:{location}</p>;
    
  }
}



var templateTwo =(
  <div>
  <h1>{user.name  ? user.name : "Anomynous"}</h1>
  <p>Age :{user.age}</p>
  {getLocation(user.location)}
</div>

);


/* var template = React.createElement(
  "h1",
  { id: "someId" },
  "Welcome to Abolga Meet and Greet"
); */

var appRoot = document.getElementById("app");



ReactDOM.render(templateTwo, appRoot);

