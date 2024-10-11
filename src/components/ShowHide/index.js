// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstNameClicked: false, isLastNameClicked: false}

  // const {isFirstNameClicked,isLastNameClicked} = this.state

  renderFirstName = () => {
    const {isFirstNameClicked} = this.state
    if (isFirstNameClicked) {
      return (
        <div className="name-container mt-5 mr-5">
          <p className="text-center name-style">Joe</p>
        </div>
      )
    }
    return null
  }

  renderLastName = () => {
    const {isLastNameClicked} = this.state
    if (isLastNameClicked) {
      return (
        <div className="name-container mt-5 ml-5">
          <p className="text-center name-style">Jonas</p>
        </div>
      )
    }
    return null
  }

  onClickFirstName = () => {
    this.setState(prevState => ({
      isFirstNameClicked: !prevState.isFirstNameClicked,
    }))
  }

  onClickLastName = () => {
    this.setState(prevState => ({
      isLastNameClicked: !prevState.isLastNameClicked,
    }))
  }

  render() {
    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="btn-container">
            <div className="btn-name-container">
              <button className="btn" onClick={this.onClickFirstName}>
                Show/Hide Firstname
              </button>
              {this.renderFirstName()}
            </div>
            <div className="btn-name-container">
              <button className="btn" onClick={this.onClickLastName}>
                Show/Hide Lastname
              </button>
              {this.renderLastName()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
