import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Popover, Typography, Divider, Button, Container } from '@mui/material';
import { useState, useEffect } from 'react';

const Navbar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [value, setValue] = React.useState('1');
    const [notificationItem, setNotificationItm] = useState([])

    useEffect(() => {
        async function fetchNotification() {
            const response = await fetch('/api/notification')
            const data = await response.json()
            setNotificationItm(data)
        }
        fetchNotification()
    }, [])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: '#5BC0F8' }}>
                <Toolbar>
                    <Grid container direction="row"
                        justifyContent="space-between"
                        alignItems="center">
                        <Grid item>
                            <Image src="/rhb_logo.png" width={100} height={35} />

                        </Grid>
                        <Grid item>
                            <IconButton
                                onClick={handleClick}
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                                edge="end"
                            >
                                <Badge badgeContent={0} color="error">
                                    <NotificationsIcon style={{ fontSize: 33 }} />
                                </Badge>
                            </IconButton>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >

                                <Grid item><Typography sx={{ p: 2, fontSize: 24, fontWeight: 'bold' }}>Notifications</Typography></Grid>
                                <Grid item>
                                    <Box sx={{ width: '100%', typography: 'body1' }}>
                                        <TabContext value={value}>
                                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                                    <Tab label="View All" value="1" />
                                                    <Tab label="Mentions" value="2" />
                                                </TabList>
                                            </Box>
                                            <TabPanel value="1">{notificationItem.map((item) => {
                                                return (
                                                    <Container maxWidth={false} disableGutters>
                                                        <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="black">
                                                            {item.sender}
                                                        </Typography>
                                                        <Typography sx={{ fontSize: 14 }} color="black">
                                                            {item.message}
                                                        </Typography>
                                                        <Grid container direction="row">
                                                            <Grid item><Typography sx={{ fontSize: 14 }} color="black">
                                                                {item.day}
                                                            </Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography sx={{ fontSize: 14, marginLeft: 1 }} color="black">
                                                                    {item.time}
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
                                                    </Container>
                                                )
                                            })}</TabPanel>
                                            <TabPanel value="2"><Typography sx={{ fontSize: 14 }} color="black">
                                                There is no mention here
                                            </Typography></TabPanel>
                                        </TabContext>
                                    </Box>
                                </Grid>

                            </Popover>
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;