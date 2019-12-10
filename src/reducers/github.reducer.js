const githubReducers = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TOKEN':
        return [
          ...state,
          action.item
        ]
      case 'REMOVE_TOKEN':
        return state.filter((item) => item.id !== action.id);
      default:
        return state
    }
  }
  
  export default githubReducers