import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="random-container">
        <div className="card-container">
          <h1 className="random-heading"> Random Number </h1>
          <p className="range-text">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="submit"
            onClick={this.generateRandomNumber}
            className="generate-btn"
          >
            Generate
          </button>
          <p className="random-number"> {number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
