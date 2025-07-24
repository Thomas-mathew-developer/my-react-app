import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, List, ListItemButton, ListItemText, Box } from '@mui/material';

const drawerWidth = 240;

const Layout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* Toolbar */}
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        My Form Builder
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Side Navigation */}
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <List>
                    <ListItemButton component={Link} to="/form-builder">
                        <ListItemText primary="Form Builder" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/form-list">
                        <ListItemText primary="Form List" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/submissions">
                        <ListItemText primary="Submissions" />
                    </ListItemButton>
                </List>
            </Drawer>

            {/* Main Content */}
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar /> {/* adds space equal to AppBar height */}
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;
