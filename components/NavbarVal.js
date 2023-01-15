import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react';
import { Popover, Typography, Card, Button, Container, CardContent } from '@mui/material';
import { useState, useEffect } from 'react';
import Router from 'next/router';

const NavbarVal = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [listTabung, setListTabung] = useState([])
    const name = "Faris"
    const tabung_name = "Kahwin"
    const currentValueTarget = 1730.00
    const target = 20000.00
    const validator_name = "Muhammad Zulhusni Bin Zakaria"
    const validator_email = "zulhresident@gmail.com"
    const validator_acno = 1234567890123456
    const method = 1
    const amount = 10.00
    const percentage = 0.5


    useEffect(() => {
        async function fetchListTabung() {
            const response = await fetch('/api/tabung')
            const data = await response.json()
            setListTabung(data)
        }
        fetchListTabung()
    }, [])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const view = async () => {

        Router.push({
            pathname: "/request",
            query: {
                name, tabung_name, currentValueTarget, target, method, amount, percentage, validator_name, validator_email, validator_acno
            }
        })
    }

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
                                <Badge badgeContent={1} color="error">
                                    <NotificationsIcon style={{fontSize: 33}} />
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

                                {listTabung.map((tabung) => {
                                    return (
                                        <Card style={{ margin: 10 }}>
                                            <CardContent>
                                                <Grid container direction="column" justifyContent="space-between"
                                                    alignItems="center" style={{ marginTop: 10, marginBottom: 10 }}>
                                                    <Grid item>

                                                        <Typography>
                                                            Validator Request
                                                        </Typography>

                                                    </Grid>
                                                    <Grid item>

                                                        <Typography style={{ textAlign: 'center' }}>
                                                            {tabung.name} has request you as their validator.
                                                        </Typography>

                                                    </Grid>
                                                    <Grid item>
                                                        <Button onClick={view} style={{ marginTop: 20 }} variant="contained" color="primary" >
                                                            View
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    )
                                })
                                }

                            </Popover>
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavbarVal;