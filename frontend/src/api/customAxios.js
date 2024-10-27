import axios from 'axios';
import qs from 'qs';

// Tạo axios với cấu hình cơ bản
const api = axios.create({
	baseURL: process.env.REACT_APP_END_POINT_API,
	withCredentials: true, // Cho phép gửi cookie trong các request
	// Cấu hình content-type mặc định là x-www-form-urlencoded
	headers: {},
	// Tự động transform data thành x-www-form-urlencoded format
	transformRequest: [
		function (data, headers) {
			// Kiểm tra nếu data là instance của FormData thì không cần stringify
			if (data instanceof FormData) {
				// Khi sử dụng FormData, trình duyệt sẽ tự động thêm header Content-Type là multipart/form-data
				delete headers['Content-Type']; // Để trình duyệt tự thiết lập 'Content-Type'
				return data; // Trả về dữ liệu dạng FormData mà không cần biến đổi
			} else {
				// Mặc định chuyển đổi các object thành x-www-form-urlencoded
				headers['Content-Type'] = 'application/x-www-form-urlencoded';
				return qs.stringify(data);
			}
		},
	],
});

// Thêm interceptor để xử lý làm mới token
api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		// Thêm kiểm tra URL để tránh lặp vô hạn
		if (originalRequest.url === '/users/refresh') {
			document.cookie =
				'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
			document.cookie =
				'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
			// Nếu chính request refresh token bị lỗi 401, chắc chắn logout
			window.location.href = '/login';
			return Promise.reject(error);
		}

		// Kiểm tra nếu là lỗi 401 và chưa thử refresh
		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			try {
				await api.post('/users/refresh');
				return api(originalRequest);
			} catch (refreshError) {
				document.cookie =
					'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
				document.cookie =
					'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
				window.location.href = '/login';
				return Promise.reject(refreshError);
			}
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
