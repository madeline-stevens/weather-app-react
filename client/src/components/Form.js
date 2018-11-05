import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.weatherAPIcall}>
        <input type="text" name="city" placeholder="city or zipcode" />
        <button>Search</button>
      </form>
    );
  }
}

export default Form;
