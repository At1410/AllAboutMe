import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, CssBaseline, IconButton } from '@mui/material';
import { AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';

import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import YardIcon from '@mui/icons-material/Yard';

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import Profile from './Profile/Profile';
import Status from './Status/Status';
import Plan from './Plan/Plan';
import { handleLogOut } from './Logout';

const NAVIGATION = [
    {
        segment: 'Hồ sơ',
        title: 'Hồ sơ',
        icon: <ContactEmergencyIcon />,
    },
    {
        segment: 'Tâm trạng',
        title: 'Tâm trạng',
        icon: <InsertEmoticonIcon />,
    },
    {
        segment: 'Kế hoạch',
        title: 'Kế hoạch',
        icon: <YardIcon />,
    },
    {
        segment: 'Đăng xuất',
        title: 'Đăng xuất',
        icon: <ExitToAppIcon />,
    },
];

const getTheme = (mode) =>
    createTheme({
        palette: {
            mode,
        },
    });

function DemoPageContent({ pathname }) {
    switch (pathname) {
        case 'Hồ sơ':
            return <Profile />;
        case 'Tâm trạng':
            return <Status />;
        case 'Kế hoạch':
            return <Plan />;
        default:
            return null;
    }
}

DemoPageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic() {

    const [pathname, setPathname] = React.useState('Hồ sơ');
    const [mode, setMode] = React.useState('light');
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(() => getTheme(mode), [mode]);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const navigate = useNavigate();

    const handleNavigationClick = (segment) => {
        if (segment === 'Đăng xuất') {
            handleLogOut(navigate);
        } else {
            setPathname(segment);
        }
        setDrawerOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: 'flex' }}>
                <AppBar
                    position="fixed"
                    sx={{
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                >
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleDrawerToggle}
                        >
                            {drawerOpen ? <MenuOpenIcon /> : <MenuIcon />}
                        </IconButton>

                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            All About Me
                        </Typography>

                        <IconButton
                            sx={{ ml: 1 }}
                            onClick={colorMode.toggleColorMode}
                            color="inherit"
                        >
                            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Drawer
                    variant="temporary"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    sx={{ width: 240, flexShrink: 0 }}
                    PaperProps={{
                        style: { width: 240 },
                    }}
                >
                    <Toolbar />
                    <List>
                        {NAVIGATION.filter(item => item.segment).map((navItem) => (
                            <ListItem
                                key={navItem.segment}
                                onClick={() => handleNavigationClick(navItem.segment)}
                                sx={{
                                    backgroundColor: pathname === navItem.segment ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
                                }}
                            >
                                <ListItemIcon>{navItem.icon}</ListItemIcon>
                                <ListItemText primary={navItem.title} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <DemoPageContent pathname={pathname} />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

DashboardLayoutBasic.propTypes = {
    window: PropTypes.func,
};

export default DashboardLayoutBasic;
