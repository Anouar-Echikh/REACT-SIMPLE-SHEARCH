import React, { Component } from "react";
import Item from "./item";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { news } = this.props;
    return (
      <div className="list-container">
        {news.map((el, index) => (
          <Item key={index} el={el} />
        ))}
      </div>
    );
  }
}
export default List;
