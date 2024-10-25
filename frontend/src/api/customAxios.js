import axios from 'axios';
import config from '../config';
import qs from 'qs';

// Tạo axios với cấu hình cơ bản
const api = axios.create({
	baseURL: config.END_POINT_API,
	withCredentials: true, // Cho phép gửi cookie trong các request
	// Cấu hình content-type mặc định là x-www-form-urlencoded
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
	},
	// Tự động transform data thành x-www-form-urlencoded format
	transformRequest: [
		function (data) {
			return qs.stringify(data);
		},
	],
});

// Thêm interceptor để xử lý làm mới token
api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;
		if (error.response.status === 403 && !originalRequest._retry) {
			originalRequest._retry = true;

			try {
				await api.post('/users/refresh');
				return api(originalRequest);
			} catch (err) {
				// Refresh token expired - redirect to login
				window.location.location = '/login';
				return Promise.reject(error);
			}
		}
		if (error.response.status === 401) {
			return new Promise(() => {});
		}
		return Promise.reject(error);
	}
);

// Add access token to all requests
api.interceptors.request.use(
	(config) => {
		// Đảm bảo cookie hoặc token được gửi cùng yêu cầu
		config.withCredentials = true; // Sử dụng cookie nếu có
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
export default api;
