import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#fff'
    };
  }


  getSelectedColor = () => this.state.selectedColor;

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getSelectedColorCallback={this.getSelectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  setSelectedColor = (color) => {
    this.setState(
      {
        selectedColor: color
      }
    )
  }


  render() {
    return (
      <div id="app">
        <ColorSelector setSelectCallback={this.setSelectedColor} />
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
