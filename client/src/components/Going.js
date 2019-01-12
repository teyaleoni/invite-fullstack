import React, { Component } from 'react'
import { connect } from 'react-redux'
import { going } from '../actions/people'



class Going extends Component {
    componentDidMount() {
        going()
    }
    render() {
        let showGoing = this.props.going.map(x => (
            <div key={"going" + x.id}>
                <ul>
                    <li><img src = {x.picture} /></li>
                    <li>{x.fname} {x.lname}</li>
                    <li>{x.email}</li>
                    <li>{x.phone}</li>
                </ul>
          </div>
        ))
        return (
            <div>
                {showGoing}
            </div>
        )
    }
}



function mapStateToProps(appState) {
    return {
      going: appState.goingReducer.going
    }
  }

export default connect(mapStateToProps)(Going)