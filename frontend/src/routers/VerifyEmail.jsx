import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const VerifyEmail = () => {
    const [searchParams] = useSearchParams();
    const [message, setMessage] = useState();

    useEffect(() => {
        const token = searchParams.get('token');
        if (token && !message) {  // Gọi API chỉ khi có token và message chưa được đặt
            verifyEmail(token);
        }
    }, [searchParams, message]);

    const verifyEmail = async (token) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/email/verifyEmail?token=${token}`);
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Đã xảy ra lỗi khi xác thực email.');
        }
    };

    return (
        <div style={{
            textAlign: 'center',
            padding: '20px',
            fontSize: '24px',
            color: '#023e8a'
        }}>
            <h1>Xác Thực Email</h1>
            <p>{message}</p>
        </div>
    );
};

export default VerifyEmail;
