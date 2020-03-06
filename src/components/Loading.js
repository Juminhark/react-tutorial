import React, { Component } from 'react'

export default class Loading extends Component {
  state = {
    isLoading: true
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? "Loading..." : "we are ready"}</div>
    )
  }
}
