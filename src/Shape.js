import React from 'react';
import '.app2.css';

var Shape = (props) => {
  var shape = props.shape;
  var selectShape = props.selectShape

  return (
    <div className = {props.shape} onClick = {() => selectShape (shape)}/>
    )
}

export default Shape
