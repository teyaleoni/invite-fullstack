import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeACall, changeStatus } from '../actions/people'

class Home extends Component {
  componentDidMount() {
    makeACall()
  }
  
  going = (e) => {
    e.preventDefault()
    changeStatus(this.props.people.id, "going")
  }

  notgoing = (e) => {
    e.preventDefault()
    changeStatus(this.props.people.id, "notgoing")
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
          <div>
            <ul>
              <li><img src = {this.props.people.picture} /></li>
              <li>{this.props.people.fname} {this.props.people.lname}</li>
              <li>{this.props.people.email}</li>
              <li>{this.props.people.phone}</li>
            </ul>
            <button onClick={this.going}>Going</button>
            <button onClick={this.notgoing}>Not Going</button>

          </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    people: appState.peopleReducer.people
  }
}

export default connect(mapStateToProps)(Home)