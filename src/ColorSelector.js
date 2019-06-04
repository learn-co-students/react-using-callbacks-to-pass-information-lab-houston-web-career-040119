import React, { Component } from 'react';

export default class ColorSelector extends Component {
  constructor(props) {
    super(props)
    this.state=({
      selectedColor: this.props.selectColor
    })
  }
  
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} id={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  handleClick = (event) => {
    let colorPool = ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"]
    console.log(colorPool[event.target.id])
    this.props.selectColor(colorPool[event.target.id])
    this.setState({
      selectedColor: colorPool[event.target.id]
    })
  }
  
  render() {
    return (
      <div id="colorSelector" onClick={this.handleClick}>
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
