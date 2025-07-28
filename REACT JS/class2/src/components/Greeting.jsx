import React, { Component } from 'react'

export class Greeting extends Component {
  render() {
    const {age} = this.props;
    return (
      <div className="container-fluid p-3">
        <div className="fs-4">your age is {age}</div>
      </div>
    )
  }
}

export default Greeting