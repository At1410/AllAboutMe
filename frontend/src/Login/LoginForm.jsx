import React from 'react';

import { Box, Typography, TextField, Button, styled, Paper } from '@mui/material';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        // try {
        //     const response = await axios.post('http://localhost:5000/users/login', { email, password });
        //     if (response.data.token) {
        //         localStorage.setItem('token', response.data.token);
        //         Swal.fire('Đăng nhập thành công!', '', 'success');
        //         navigate('/navbar');
        //     }
        // } catch (err) {
        //     Swal.fire('Đăng nhập thất bại!', 'Email hoặc mật khẩu sai', 'error');
        // }
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

                    <StyledForm onSubmit={handleLogin}>
                        <TextField
                            autoComplete="off"
                            label="Email đăng nhập"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            name="email"
                            size='small'

                        />
                        <TextField
                            autoComplete="off"
                            label="Mật khẩu"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            name="password"
                            size='small'

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

