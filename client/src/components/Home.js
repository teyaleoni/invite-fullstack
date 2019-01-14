import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeACall, changeStatus } from '../actions/people'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import 'font-awesome/css/font-awesome.css'

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
      <div className = "homeContainer">
        <div className = "links">
          <Link to = "./Going"><p className="link">Going </p></Link>
          <Link to = "./NotGoing"><p className="link">Not Going</p></Link>
        </div>
        <div className="picture"><img src = {this.props.people.picture} /></div>

            <div className = "content">
              <ul>
                <li>Name: {this.props.people.fname} {this.props.people.lname}</li>
                <li>Email: {this.props.people.email}</li>
                <li>Phone: {this.props.people.phone}</li>
              </ul>
                <div class="buttons">
                  <button onClick={this.going} className="butt" id="red"><i class="fa fa-times"></i></button>
                  <button onClick={this.notgoing} className="butt" id="green"><i class="fa fa-check"></i></button>
                </div>
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