import { Component } from "react";


import "./style.scss";

export default class DancingElementExercise extends Component {

  render() {
    return (
      <div className="dancingElement__container">
        <div className="dancingElement__wrapper">
          <div className="dancingElement">
            <div className="dancingElement__copyContainer">
              <h1 className="dancingElement__copy">Hello, world!</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
