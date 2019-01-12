import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = '/api'

export function makeACall() {
  axios.get('/people').then(resp => {
    store.dispatch({
      type: 'EXAMPLE', 
      people: resp.data.people
    })
  })
}

export function changeStatus(id, status) {
  axios.patch('/people', {
    id: id,
    status: status
  }).then(resp => {
    makeACall()
  })
  
}

export function going() {
  axios.get('/Going').then(resp => {
    store.dispatch({
      type: 'GOING',
      going: resp.data
    })
  })
}

export function notgoing() {
  axios.get('/NotGoing').then(resp => {
    store.dispatch({
      type: 'NOTGOING',
      notgoing: resp.data
    })
  })
}