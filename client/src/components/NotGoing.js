import React, { Component } from 'react'
import { connect } from 'react-redux'
import { notgoing } from '../actions/people'
import { Link } from 'react-router-dom'
import '../styles/notgoing.css'


class NotGoing extends Component {
    componentDidMount() {
        notgoing()
    }
    render() {
        let showNotGoing = this.props.notgoing.map(y => (
            <div key={"notgoing" + y.id}>
                <ul>
                    <li><img src = {y.picture} /></li>
                    <li>{y.fname} {y.lname}</li>
                    <li>{y.email}</li>
                    <li>{y.phone}</li>
                </ul>
          </div>
        ))
        return (
            <div>
                {showNotGoing}
                <Link to = "/"><div>Home</div></Link>
            </div>
        )
    }
}



function mapStateToProps(appState) {
    return {
      notgoing: appState.notgoingReducer.notgoing
    }
  }

export default connect(mapStateToProps)(NotGoing)