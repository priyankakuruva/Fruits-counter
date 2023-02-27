// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mangoCount = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  bananaCount = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span className="span-element">{mango}</span> mangoes{' '}
            <span className="span-element">{banana}</span> bananas
          </h1>
          <div className="img-container">
            <div className="img-button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
                className="img"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.mangoCount}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="img-button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
                className="img"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.bananaCount}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
