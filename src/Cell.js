import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  updateColor = (props) => {
    this.setState({
      color: this.props.currentColor()
    })

  }

  render() {
    return (
      <div onClick={this.updateColor}className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
