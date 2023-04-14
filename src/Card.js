import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(id, name, email, image) {
    super(id, name, email, image);
    this.id = id;
    this.name = name;
    this.email = email;
    this.image = image;
  }
  render() {
    return (
      <div className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow5">
        <img
          src={`https://robohash.org/${this.props.image}?200x200`}
          alt="robots"
        />
        <div>
          <h2>{this.props.name}</h2>
          <p>{this.props.email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
