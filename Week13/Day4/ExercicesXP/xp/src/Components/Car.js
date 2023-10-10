import React, { useState } from "react";
import Garage from "./Garage";

const Car = (props) => {
    const [color] = useState("red")
  return(
  <div>
  <h1>This car is a {color} {props.model}</h1>
  <Garage size="small" />
  </div>
  ) 
}

export default Car