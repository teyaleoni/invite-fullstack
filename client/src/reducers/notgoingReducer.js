const initialState = {
    notgoing: []
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case 'NOTGOING':
        return {...state, notgoing: action.notgoing}
      default:
        return state
    }
  }