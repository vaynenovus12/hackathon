import { Button, Card, CardActionArea, CardContent, Typography, Grid } from "@mui/material"
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useEffect, useState } from "react";
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import Router from "next/router";

export default function validator() {

  
    const [validator_req, setValidatorReq] = useState([])
    const [name, setName] = useState("")
    const [tabung_name, setTabungName] = useState("")
    const [currentValueTarget, setCurrent] = useState(0.00)
    const [target, setTarget] = useState(0.00)
    const [method, setMethod] = useState(0)
    const [amount, setAmount] = useState(0.00)
    const [percentage, setPercentage] = useState(0.00)
    const [validator_name, setValName] = useState("")
    const [validator_email, setEmail] = useState("")
    const [validator_acno, setACNO] = useState()

    useEffect(() => {
        async function fetchReq() {
            const response = await fetch('/api/validator_req')
            const data = await response.json()
            setValidatorReq(data)
        }
        fetchReq()
    }, [])

    const view_tabung = async () => {

        Router.push({
            pathname: "/view_tabung",
            query: {
                name, tabung_name, currentValueTarget, target, method, amount, percentage, validator_name, validator_email, validator_acno
            }
        })

    }

    const valAcNO = '1-1111-3333333-3';
    const money_value = 1000.99;
    return (
        <Grid container
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Grid item>
                <Card style={{
                    marginTop: 30,
                    width: {
                        sx: 1.0, // 100%
                        sm: 250,
                        md: 350,
                    }, background: 'linear-gradient(to right, #457fca, #5691c8)'
                }}>
                    <CardActionArea href="#">
                        <CardContent>
                            <Typography style={{ fontSize: 22, fontWeight: 'bold' }}>Savings Account (Validator)</Typography>
                            <Typography style={{ fontSize: 14 }}>{valAcNO}</Typography>
                            <Grid container
                                direction="row"
                                alignItems="center"
                            >
                                <Grid item>
                                    <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>MYR</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 5 }}>{money_value}</Typography>
                                </Grid>
                                <Grid item>
                                    <CreditCardIcon style={{ fontSize: 40, marginLeft: 10 }} width={100} height={100} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            {
                validator_req.map((req) => {
                    return (
                        <Grid item>
                            <Grid container
                                direction="column"
                                alignItems="center"
                                justify="center"
                            >
                                <Grid item>
                                    <Card style={{
                                        marginTop: 30,
                                        width: {
                                            sx: 1.0, // 100%
                                            sm: 250,
                                            md: 350,
                                        }, background: 'linear-gradient(to right, #457fca, #5691c8)'
                                    }}>
                                        <CardActionArea onClick={view_tabung}>
                                            <CardContent>
                                                <Typography style={{ fontSize: 22, fontWeight: 'bold' }}>{req.name}'s Jar</Typography>
                                                <Typography style={{ fontSize: 22, fontWeight: 'bold' }}>{req.tabung_name}</Typography>
                                                <Grid container
                                                    direction="row"
                                                    alignItems="center"
                                                >
                                                    <Grid item>
                                                        <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>MYR</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 5 }}>{parseFloat(req.target).toFixed(2)}</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <TrackChangesIcon style={{ fontSize: 40, marginLeft: 10 }} width={100} height={100} />
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}