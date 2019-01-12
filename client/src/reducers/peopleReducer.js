const initialState = {
  people: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    // add actions here
    case 'EXAMPLE':
      return {...state, people: action.people}
    default:
      return state
  }
}