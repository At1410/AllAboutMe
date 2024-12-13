import React, { useState } from 'react';
import profile from '../../Styles/profile.jpg';
import { Box, Modal } from '@mui/material';
import Grid from '@mui/material/Grid';

import {
    Item,
    StylesTypography,
    StyleBox,
    StyleTextField,
    StyleButton
} from '../../Styles/Styles';

import BorderColorIcon from '@mui/icons-material/BorderColor';

export default function Profile() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setEmployee(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // };

    return (
        <div>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{
                    marginTop: 2,
                }}
            >
                <Grid item xs={12} md={6}>
                    <img src={profile} alt="Profile Pic"
                        style={{
                            width: '100%',
                            borderRadius: 3,
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item sx={{
                        height: '100%',
                    }}>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="flex-start"
                            p={2}>
                            <Grid item xs={10}>
                                <StylesTypography>Biệt danh:</StylesTypography>
                                <StylesTypography>Họ và Tên:</StylesTypography>
                                <StylesTypography>Ngày sinh:</StylesTypography>
                                <StylesTypography>Giới tính:</StylesTypography>
                                <StylesTypography>Công việc:</StylesTypography>
                                <StylesTypography>Sở thích:</StylesTypography>
                                <StylesTypography>Phương châm sống:</StylesTypography>
                                <StylesTypography>Nơi muốn đến:</StylesTypography>
                                <StylesTypography>Lời nhắn:</StylesTypography>
                            </Grid>

                            <Grid
                                container
                                justifyContent="flex-end"
                                item xs={2}>
                                <BorderColorIcon
                                    onClick={handleOpen}
                                    sx={{
                                        color: '#1d8bf8',
                                    }} />
                            </Grid>
                        </Box>
                    </Item>
                </Grid>
            </Grid>

            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}

            >
                <StyleBox>
                    <Grid container>
                        <Grid item xs={12} md={6} p={1}>
                            <StyleTextField
                                fullWidth
                                size="small"
                                label="Biệt danh"
                                variant="outlined"
                            //name="nickname"
                            // value={{}}
                            //onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} md={6} p={1}>
                            <StyleTextField
                                fullWidth
                                size="small"
                                label="Họ và tên*"
                                variant="outlined"
                            //name="nickname"
                            // value={{}}
                            //onChange={handleChange}
                            />
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} md={4} p={1}>
                            <StyleTextField
                                fullWidth
                                size="small"
                                label="Ngày sinh*"
                                variant="outlined"
                            //name="nickname"
                            // value={{}}
                            //onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} md={4} p={1}>
                            <StyleTextField
                                fullWidth
                                size="small"
                                label="Giới tính*"
                                variant="outlined"
                            //name="nickname"
                            // value={{}}
                            //onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} md={4} p={1}>
                            <StyleTextField
                                fullWidth
                                size="small"
                                label="Công việc*"
                                variant="outlined"
                            //name="nickname"
                            // value={{}}
                            //onChange={handleChange}
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} p={1}>
                        <StyleTextField
                            fullWidth
                            size="small"
                            label="Sở thích*"
                            variant="outlined"
                        //name="nickname"
                        // value={{}}
                        //onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} p={1}>
                        <StyleTextField
                            fullWidth
                            size="small"
                            label="Phương châm sống*"
                            variant="outlined"
                        //name="nickname"
                        // value={{}}
                        //onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} p={1}>
                        <StyleTextField
                            fullWidth
                            size="small"
                            label="Nơi muốn đến*"
                            variant="outlined"
                        //name="nickname"
                        // value={{}}
                        //onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} p={1}>
                        <StyleTextField
                            fullWidth
                            size="small"
                            label="Lời nhắn*"
                            variant="outlined"
                        //name="nickname"
                        // value={{}}
                        //onChange={handleChange}
                        />
                    </Grid>

                    <StyleButton variant="contained">
                        Cập nhật
                    </StyleButton>
                </StyleBox>
            </Modal>
        </div >
    );
}