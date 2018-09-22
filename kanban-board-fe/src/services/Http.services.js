import axios from 'axios';

export const instanceAxios = axios.create({
	baseURL: 'http://localhost:3000/'
});

export const sendRequest = async (method, url, data, headers = {}) => {
	return new Promise((resolve) => {
		instanceAxios.request({
			url: url,
			method: method,
			data: data,
			headers: headers
		}).then((res) => {
			resolve({
				data: res.data,
				isError: false
			});
		}).catch((error) => {
			resolve({
        		data: null,
				isError: true,
				err: error
    		});
		});
	});
};
