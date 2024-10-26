import axios from 'axios';

export const handleRegister = async (event, email, password, navigate) => {
    event.preventDefault();
    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, { email, password });
        return { success: true, message: 'Đăng ký thành công!' };
    } catch (error) {
        const errorMessage = error.response?.data?.error || 'Có lỗi xảy ra, vui lòng thử lại!';
        return { success: false, message: errorMessage };
    }
};

