const githubReducers = (state = [], action) => {
  console.log(action, state);
  switch (action.type) {
    case 'ADD_TOKEN':
      return [
        ...state,
        action.token
      ]
    case 'REMOVE_TOKEN':
      return state.filter((item) => item.id !== action.id);
    default:
      return state
  }
}

export default githubReducers