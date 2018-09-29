let defaultUser = {
  isAuth: false,
  username: '',
}
const user = (state = defaultUser, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
				...state,
        isAuth: action.isAuth,
				username: action.username,
			}
    default:
      return state
  }
}

export default user