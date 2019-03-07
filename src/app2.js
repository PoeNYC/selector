import React, {Component} from 'react';
import Shape from "./Shape.js";

class Selector extends Component {
  render () {
    return (
      <div className = "container">
        <div className = "navbar">
        <div>Selected: <span> What Goes Here ?!?!?! </span></div>
        </div>
        <div className = "shape-list">
        <Shape />
        <Shape />
        <Shape />
        </div>
      </div>
    )
  }
}
export default Selector;
