// export const updateAuthUser = (user) => {
// 	return {
// 		type: 'update_auth',
// 		payload: user
// 	};
// }

export const updateAuthUser = user => ({
  type: 'UPDATE_USER',
  isAuth: user.isAuth,
  username: user.username,
})


