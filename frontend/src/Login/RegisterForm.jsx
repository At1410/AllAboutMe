import React, { useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button, styled, Paper } from '@mui/material';
import { handleRegister } from './Register';


import { toast } from 'react-toastify';
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const result = await handleRegister(email, password);

        if (result.success) {
            toast.success(result.message);
            navigate('/');
        } else {
            toast.error(result.message);
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
            </Box>
        </div>
    );
};

