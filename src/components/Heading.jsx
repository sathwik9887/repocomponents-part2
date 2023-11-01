import React from "react";

const date = new Date();
const currentTime = date.getHours();

let greetings;
let customColor = {
  color: ""
};

function Heading() {
  if (currentTime < 12) {
    greetings = "Good Morning";
    customColor.color = "red";
  } else if (currentTime < 18) {
    greetings = "Good Evening";
    customColor.color = "blue";
  } else {
    greetings = "Good Night";
    customColor.color = "green";
  }

  return (
    <div style={{ color: customColor.color }}>
      <h1>{greetings}</h1>
    </div>
  );
}

export default Heading;
