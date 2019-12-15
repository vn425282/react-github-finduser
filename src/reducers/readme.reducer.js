const readmeReducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_README':
      state = [];
      return [
        ...state,
        action.text
      ]
    default:
      return state
  }
}

export default readmeReducers