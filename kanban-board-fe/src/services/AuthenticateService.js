import { LocalStorageService } from './LocalStorageService'

export const AuthenticateService = {
    setAuthenticateUser: (token, user) => {
        LocalStorageService.set('username', user)
        LocalStorageService.set('accesstoken', token)
        window.location.href = '/'
		},
		isAuthenticate: () => {
			const isAuth = LocalStorageService.get('accesstoken');
			if (!isAuth) return false
			return true
		},
    getAuthenticateGmail: () => {
        try {
            let data = JSON.parse(LocalStorageService.get('username'));
            let gmail = data.username;
            return gmail
        } catch (e) {
            // console.log("Error: ", e);
            LocalStorageService.remove('username');
            LocalStorageService.remove('accesstoken');
            // window.location.href = '/';
            return null;
        }
    },
    removeAuthenticate: () => {
        LocalStorageService.remove('username')
        LocalStorageService.remove('accesstoken')
        window.location.href = '/login'
    },
}
