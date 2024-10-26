import React, { useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button, styled, Paper } from '@mui/material';
import { handleRegister } from './Register';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function RegisterForm() {
    const StyledForm = styled('form')({
        display: 'flex',
        flexDirection: 'column',
    });

    const StyledPaper = styled(Paper)(({ theme }) => ({
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        width: '40%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }));

    const navigate = useNavigate();

    const handleGoToLogin = () => {
        navigate('/');
    };

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event, email, password) => {
        event.preventDefault();
        setMessage('');  // Xóa thông báo cũ
        setError('');    // Xóa lỗi cũ

        const result = await handleRegister(email, password);

        if (result.success) {
            toast.success(result.message);  // Hiển thị thông báo thành công
            navigate('/');  // Điều hướng về trang khác
        } else {
            toast.error(result.message);  // Hiển thị thông báo lỗi cho người dùng
        }
    };


    return (
        <div>
            <Box>
                <StyledPaper>

                    <Typography variant="h4" align="center"
                        sx={{
                            color: "#023e8a",
                            whiteSpace: 'nowrap'
                        }}>
                        Đăng Ký
                    </Typography>

                    <StyledForm onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="email"
                            size='small'
                            inputRef={emailRef}
                        />
                        <TextField
                            label="Mật khẩu"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="password"
                            size='small'
                            inputRef={passwordRef}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth

                            sx={{
                                backgroundColor: "#023e8a",
                                '&:hover': {
                                    backgroundColor: "#0077b6",
                                },
                            }}
                        >
                            Đăng Ký
                        </Button>

                        <Typography
                            variant='body'
                            sx={{
                                marginLeft: 2,
                                marginTop: 1,
                                color: "#023e8a",
                                cursor: "pointer",
                                '&:hover': {
                                    color: "#0077b6",
                                },
                            }}
                            onClick={handleGoToLogin}
                        >Bạn đã có tài khoản?</Typography>
                    </StyledForm>
                </StyledPaper>

                <ToastContainer />

            </Box>
        </div>
    );
};

