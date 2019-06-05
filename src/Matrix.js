import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedColor: null,
      values: props.values
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} chosenColor={this.chosenColor}/>)
  )

  genMatrix = () => (
    this.state.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  setColor = (color) => {
    this.setState({
      selectedColor: color
    })
  }

  chosenColor = () => {
    return this.state.selectedColor
  }

  render() {
    return (
      <div id="app">
        <ColorSelector setColor={this.setColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
