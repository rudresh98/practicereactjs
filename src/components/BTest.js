import React, { Component } from "react";

class BTest extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <h1>I'm a B component</h1>
        <button onClick={this.handleClick}>
          Clicked {this.state.count} times
        </button>
      </>
    );
  }
}

export default BTest;
