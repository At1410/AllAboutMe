import React, { useRef } from 'react';

import { handleLogin } from './Login';

import { Box, Typography, TextField, Button, styled, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginForm() {
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

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const result = await handleLogin(email, password);

        if (result.success) {
            localStorage.setItem('token', result.token);

            toast.success(result.message);
            navigate('/navbar');
        } else {
            toast.error(result.message);
        }

    };

    const handleGoToRegister = () => {
        navigate('/register');
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
                        Đăng Nhập
                    </Typography>

                    <StyledForm onSubmit={handleSubmit}>
                        <TextField
                            autoComplete="off"
                            label="Email đăng nhập"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="email"
                            size='small'
                            inputRef={emailRef}
                        />
                        <TextField
                            autoComplete="off"
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
                            Đăng Nhập
                        </Button>

                        <Typography
                            variant='body'
                            sx={{
                                marginTop: 1,
                                color: "#023e8a",
                                cursor: "pointer",
                                '&:hover': {
                                    color: "#0077b6",
                                },
                            }}
                            onClick={handleGoToRegister}
                        >Bạn chưa có tài khoản?</Typography>

                    </StyledForm>
                </StyledPaper>

            </Box>
        </div>
    );
};

