import React, { Component } from "react";
class Header extends Component {
  sendToParent = e => {
    this.props.filtredNews(e.target.value);
    console.log(e.target.value);
    // cette fonction est utiliser pour envoyer les donnees au PARENT
  };

  render() {
    return (
      <div className="header-container">
        <h1>LOGO</h1>
        <input type="text" onChange={this.sendToParent} />
      </div>
    );
  }
}
export default Header;
