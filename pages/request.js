
import { Button, Card, CardActionArea, CardContent, Typography, Grid } from "@mui/material"
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Router from "next/router";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function request() {
    
    
    const router = useRouter()

    const {
        query: {
            name, tabung_name, currentValueTarget, target, method, amount, percentage, validator_name, validator_email, validator_acno

        }
    } = router

    const props = {
        name, tabung_name, currentValueTarget, target, method, amount, percentage, validator_name, validator_email, validator_acno
    }

    const accept = async () => {

        const response = await fetch('/api/validator_req', {
            method: 'POST',
            body: JSON.stringify({ name, tabung_name, currentValueTarget, target, validator_name, validator_email, validator_acno, method, amount, percentage }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        const data = await response.json()
        console.log(data)

        Router.push({
            pathname: "/validator",
            query: {
                name, tabung_name, currentValueTarget, target, method, amount, percentage, validator_name, validator_email, validator_acno
            }
        })

    }

    return (
        <Grid container
            direction="column"
            alignItems="center">
            <Grid item>
                <Typography style={{ fontSize: 25, fontWeight: 'bold', marginTop: 10, }}>Validator Request</Typography>
            </Grid>
            <Grid item>
            <Typography style={{ textAlign: 'center' }}>
                    Name: {props.name}
                </Typography>
  
            </Grid>
            <Grid item>
                <Typography style={{ textAlign: 'center' }}>
                    Jar's name: {props.tabung_name}
                </Typography>
            </Grid>
            <Grid item>
                <Typography style={{ textAlign: 'center' }}>
                  Target: MYR {parseFloat(props.target).toFixed(2)}
                </Typography>
            </Grid>
            <Grid item>
                <Typography style={{ textAlign: 'center' }}>
                  Bank ID: 1-2345-6789123-4
                </Typography>
            </Grid>
            <Grid item>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <Button style={{ marginTop: 20 }} variant="contained" onClick={accept} color="success" endIcon={<DoneIcon />}>
                            Accept
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button style={{ marginTop: 20, marginLeft: 20 }} variant="contained" href="/validator" color="error" endIcon={<CloseIcon />}>
                            Reject
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}