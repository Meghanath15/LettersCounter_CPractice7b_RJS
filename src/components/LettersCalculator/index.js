// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeText = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-container">
        <div className="calculator-display-container">
          <h1 className="heading">
            Calculate the
            <br /> Letters you <br />
            enter
          </h1>

          <label htmlFor="searchInput" className="label-text">
            Enter the phrase
          </label>
          <input
            className="letters-input"
            id="searchInput"
            type="text"
            label="Enter the phrase"
            onChange={this.onChangeText}
          />
          <div className="count-container">
            <p className="count">No.of letters: {count}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="calculator-image"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
