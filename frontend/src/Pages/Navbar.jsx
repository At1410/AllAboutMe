import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, CssBaseline, IconButton } from '@mui/material';
import { AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';

import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import WorkIcon from '@mui/icons-material/Work';

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import Profile from './Profile/Profile';
import Status from './Status/Status';
import Work from './Work/Work';

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
        segment: 'Công việc',
        title: 'Công việc',
        icon: <WorkIcon />,
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
        case 'Công việc':
            return <Work />;
        default:
            return null;
    }
}

DemoPageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {
    const { window } = props;

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

    const handleNavigationClick = (segment) => {
        setPathname(segment);
        setDrawerOpen(false);
    };

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    const demoWindow = window !== undefined ? window() : undefined;

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
                                button
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
