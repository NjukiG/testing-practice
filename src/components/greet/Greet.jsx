import React from "react";

const Greet = (props) => {
  
  return (
    <div>Hello {props.name ? props.name : "Guest"}.</div>
  )
};

export default Greet;
