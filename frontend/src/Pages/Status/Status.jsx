import React, { useState } from "react";
import Grid from '@mui/material/Grid';

import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import profile from '../../Styles/profile.jpg';

import {
    Item,
    StylesTypography
} from '../../Styles/Styles';

export default function Status() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} style={{ position: 'relative' }}>
                    <img src={profile} alt="Profile Pic"
                        style={{
                            width: '100%',
                            borderRadius: 3,
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />

                    <IconButton
                        onClick={handleClick}
                        style={{
                            position: 'absolute',
                            top: '7%',
                            right: '2%',
                            color: '#000',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            padding: 0,
                            borderRadius: '50%',
                        }}
                    >
                        <MoreVertIcon sx={{
                            '&:hover': {
                                color: '#272727',
                            }
                        }} />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: 48 * 4.5,
                                width: '20ch',
                            },
                        }}
                    >
                        {/* Tùy chọn chỉnh sửa */}
                        <MenuItem onClick={handleClose}>
                            <EditNoteIcon sx={{ mr: 1 }} />
                            Chỉnh sửa
                        </MenuItem>

                        {/* Tùy chọn xóa */}
                        <MenuItem onClick={handleClose}>
                            <DeleteOutlineIcon sx={{ mr: 1 }} />
                            Xóa
                        </MenuItem>
                    </Menu>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Item sx={{
                        maxHeight: '70vh',
                        overflowY: 'auto',
                        height: '100%',
                    }}>
                        <StylesTypography variant="h6">Tiêu đề</StylesTypography>
                        <StylesTypography variant="h6">Nội dung</StylesTypography>
                        <StylesTypography>
                            Nội dung Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse lacinia tellus a libero volutpat maximus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse lacinia tellus a libero volutpat maximus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse lacinia tellus a libero volutpat maximus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse lacinia tellus a libero volutpat maximus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse lacinia tellus a libero volutpat maximus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse lacinia tellus a libero volutpat maximus.
                        </StylesTypography>
                    </Item>
                </Grid>
                {/*<Grid item xs={1}>
                    <Item sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}>
                        <EditNoteIcon sx={{
                            color: '#1d8bf8',
                            '&:hover': {
                                color: '#1976d2',
                            }
                        }} />
                        <DeleteOutlineIcon sx={{
                            color: '#d00000',
                            '&:hover': {
                                color: '#d32f2f',
                            }
                        }} />
                    </Item>
                </Grid>*/}
            </Grid>
        </div>
    )
}