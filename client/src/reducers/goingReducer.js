const initialState = {
    going: []
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case 'GOING':
        return {...state, going: action.going}
      default:
        return state
    }
  }