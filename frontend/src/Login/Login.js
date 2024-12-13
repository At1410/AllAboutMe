import axios from 'axios';

export const handleLogin = async (email, password) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, { email, password });
        const successMessage = response.data.message;
        return { success: true, message: successMessage };
    } catch (error) {
        const errorMessage = error.response?.data?.error || 'Có lỗi xảy ra, vui lòng thử lại!';
        return { success: false, message: errorMessage };
    }
};

