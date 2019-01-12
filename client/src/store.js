import { createStore, combineReducers } from 'redux'
import peopleReducer from './reducers/peopleReducer'
import goingReducer from './reducers/goingReducer'
import notgoingReducer from './reducers/notgoingReducer'

const rootReducer = combineReducers({
  peopleReducer,
  goingReducer,
  notgoingReducer
})

const store = createStore(rootReducer)

export default store