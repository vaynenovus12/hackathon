import { Button, Card, CardActionArea, CardContent, Typography, Grid } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from "next/router";

export default function view_tabung() {


    const router = useRouter()

    const {
        query: {
            name, tabung_name, currentValueTarget, target, method, amount, percentage, validator_name, validator_email, validator_acno

        }
    } = router

    const props = {
        name, tabung_name, currentValueTarget, target, method, amount, percentage, validator_name, validator_email, validator_acno
    }


    return (
        <Grid container direction="column" alignItems="center"
            justifyContent="center">
            <Grid item>
                <Typography style={{ fontSize: 38, fontWeight: 'bold' }}>Goaly Jar </Typography>
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
                                        <Typography style={{ fontSize: 23 }}>MYR {parseFloat(props.currentValueTarget).toFixed(2)}</Typography>
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
                                        <Typography style={{ fontSize: 23 }}>MYR {parseFloat(20000).toFixed(2)}</Typography>
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
                                            <Typography style={{ fontSize: 19 }}>There is no data yet, <br></br> come back next week </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>


                </Grid>
                <Grid item>
                    <Button href="/validator" style={{ marginTop: 20 }} variant="contained" color="success" endIcon={<ArrowBackIcon />}>
                        Back
                    </Button>
                </Grid>
            </Grid>
        </Grid >
    )
}