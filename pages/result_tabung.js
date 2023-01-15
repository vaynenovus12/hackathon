import { useRouter } from "next/router"
import { Card, Typography, Grid, CardActionArea, CardContent, Button } from "@mui/material"
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Router from "next/router";


export default function result_tabung() {

    const router = useRouter()

    const {
        query: {
            name, tabung_name, currentValueTarget, target, method, amount, percentage, validator_name, validator_email, validator_acno

        }
    } = router

    const props = {
        name, tabung_name, currentValueTarget, target, method, amount, percentage, validator_name, validator_email, validator_acno
    }

    const transfer = async () => {

        Router.push({
            pathname: "/manual_transfer",
            query: {
                name, tabung_name, currentValueTarget, target, method, amount, percentage, validator_name, validator_email, validator_acno
            }
        })

    }

    return (
        <Grid container direction="column" alignItems="center"
            justifyContent="center">
            <Grid item>
                <Typography style={{ fontSize: 38, fontWeight: 'bold' }}>Goaly Jar {props.tabung_name}</Typography>
            </Grid>
            <Grid container direction="row" alignItems="center"
                justifyContent="center">
                <Grid item>
                    <Card style={{
                        marginTop: 30,
                        width: {
                            sx: 1.0, // 100%
                            sm: 250,
                            md: 350,
                        }, background: 'linear-gradient(to left top, #D96C00, #FFB973)'
                    }}>
                        <CardActionArea href="#">
                            <CardContent>
                                <Grid container
                                    direction="column"
                                    alignItems="center"
                                >
                                    <Grid item>
                                        <Typography style={{ fontSize: 27, fontWeight: 'bold' }}>Current</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography style={{ fontSize: 23 }}>MYR {parseFloat(currentValueTarget).toFixed(2)}</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card style={{
                        marginLeft: 30,
                        marginTop: 30,
                        width: {
                            sx: 1.0, // 100%
                            sm: 250,
                            md: 350,
                        }, background: 'linear-gradient(to left top, #D96C00, #FFB973)'
                    }}>
                        <CardActionArea href="#">
                            <CardContent>
                                <Grid container
                                    direction="column"
                                    alignItems="center"
                                >
                                    <Grid item>
                                        <Typography style={{ fontSize: 27, fontWeight: 'bold' }}>Target</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography style={{ fontSize: 23 }}>MYR {parseFloat(target).toFixed(2)}</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid container direction="row" alignItems="center"
                    justifyContent="center">
                    <Grid item>
                        <Card style={{
                            marginLeft: 30,
                            marginTop: 30,
                            width: {
                                sx: 1.0, // 100%
                                sm: 250,
                                md: 350,
                            }, background: 'linear-gradient(to left top, #D96C00, #FFB973)'
                        }}>
                            <CardActionArea href="#">
                                <CardContent>
                                    <Grid container
                                        direction="column"
                                        alignItems="center"
                                    >
                                        <Grid item>
                                            <Typography style={{ fontSize: 27, fontWeight: 'bold' }}>Forecast</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography style={{ fontSize: 19 }}>There is no data yet, <br></br> come back next week.</Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card style={{
                            marginLeft: 30,
                            marginTop: 30,
                            width: {
                                sx: 1.0, // 100%
                                sm: 250,
                                md: 350,
                            }, background: 'linear-gradient(to left top, #D96C00, #FFB973)'
                        }}>
                            <CardActionArea href="#">
                                <CardContent>
                                    <Grid container
                                        direction="column"
                                        alignItems="center"
                                    >
                                        <Grid item>
                                            <Typography style={{ fontSize: 27, fontWeight: 'bold' }}>Edit</Typography>
                                        </Grid>
                                        <Grid item>
                                            {
                                                method == 1 ?
                                                    <Grid container direction="row">
                                                        <Grid item>
                                                            <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                                                                Auto-deduct
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>
                                                                MYR {parseFloat(amount).toFixed(2)}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    : method == 2 ? <Grid container direction="row">
                                                        <Grid item>
                                                            <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                                                                Self-tax
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>
                                                                {parseFloat(percentage).toFixed(2)}%
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                        : method == 3 ? <Grid container direction="column">
                                                            <Grid item>
                                                                <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                                                                    Whole-up
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                            : method == 4 ? <Grid container direction="column">
                                                                <Grid container direction="row">
                                                                    <Grid item>
                                                                        <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                                                                            Auto-deduct
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item>
                                                                        <Typography style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>
                                                                            MYR {parseFloat(amount).toFixed(2)}
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                                <Grid container direction="row">
                                                                    <Grid item>
                                                                        <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                                                                            Self-tax
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item>
                                                                        <Typography style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>
                                                                            {percentage}%
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                                : method == 5 ? <Grid container direction="column">
                                                                    <Grid container direction="row">
                                                                        <Grid item>
                                                                            <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                                                                                Self-tax
                                                                            </Typography>
                                                                        </Grid>
                                                                        <Grid item>
                                                                            <Typography style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>
                                                                                MYR {parseFloat(percentage).toFixed(2)}
                                                                            </Typography>
                                                                        </Grid>
                                                                    </Grid>
                                                                    <Grid container direction="row">
                                                                        <Grid item>
                                                                            <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                                                                                Whole-up
                                                                            </Typography>
                                                                        </Grid>

                                                                    </Grid>
                                                                </Grid>
                                                                    : method == 6 ? <Grid container direction="column">
                                                                        <Grid container direction="row">
                                                                            <Grid item>
                                                                                <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                                                                                    Auto-deduct
                                                                                </Typography>
                                                                            </Grid>
                                                                            <Grid item>
                                                                                <Typography style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>
                                                                                    MYR {parseFloat(amount).toFixed(2)}
                                                                                </Typography>
                                                                            </Grid>
                                                                        </Grid>

                                                                        <Grid container direction="row">
                                                                            <Grid item>
                                                                                <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                                                                                    Self-tax
                                                                                </Typography>
                                                                            </Grid>
                                                                            <Grid item>
                                                                                <Typography style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>
                                                                                    {percentage}%
                                                                                </Typography>
                                                                            </Grid>
                                                                        </Grid>
                                                                        <Grid item>
                                                                            <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                                                                                Whole-up
                                                                            </Typography>
                                                                        </Grid>
                                                                    </Grid>
                                                                        : null
                                            }
                                        </Grid>

                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>

                </Grid>
                <Grid item>
                    <Button onClick={transfer} style={{ marginTop: 20 }} variant="contained" color="success" endIcon={<CreditCardIcon />}>
                        Manual Deposit
                    </Button>
                </Grid>
            </Grid>
        </Grid >
    )
}