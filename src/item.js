import React, { Component } from "react";
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { el } = this.props;
    return (
      <div className="item-container">
        <div>
          <h3>{el.title}</h3>
          <p>{el.text} </p>
        </div>
      </div>
    );
  }
}

export default Item;
