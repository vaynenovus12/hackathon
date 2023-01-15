import { useRouter } from "next/router"
import { Typography, Grid, Button, TextField } from "@mui/material"
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import Router from "next/router";

export default function manual_transfer() {

    const router = useRouter()
    const [transferAmount, setTransferAmount] = useState(0.00)

    const {
        query: {
           name, tabung_name, currentValueTarget, target, method, amount, percentage, validator_name, validator_email, validator_acno

        }
    } = router

    const props = {
        name, tabung_name, currentValueTarget, target, method, amount, percentage, validator_name, validator_email, validator_acno
    }

    const maxTransfer = target - currentValueTarget

    const transfer = async () => {


        Router.push({
            pathname: "/success_transfer",
            query: {
                name, tabung_name, currentValueTarget, target, method, amount, percentage, validator_name, validator_email, validator_acno
            }
        })

    }

    return (
        <Grid container direction="column" alignItems="center"
            justifyContent="center">
            <Grid item>
                <Typography style={{ fontSize: 38, fontWeight: 'bold' }}>Transfer</Typography>
            </Grid>
            <Grid item>
                <Typography style={{ fontSize: 20, fontWeight: 'bold' }}>From account: 1-2345-6789123-4</Typography>
            </Grid>
            <Grid container direction="row" alignItems="center"
                justifyContent="center">
                <Grid item>
                    <Typography style={{ fontSize: 20, fontWeight: 'bold' }}>To Goaly Jar: {props.tabung_name}</Typography>
                </Grid>
            </Grid>
            <Grid container direction="row" alignItems="center"
                justifyContent="center" style={{ marginTop: 10 }}>
                <Grid item>
                    <Typography style={{ fontSize: 20, fontWeight: 'bold' }}>Amount: </Typography>

                </Grid>
                <Grid item>
                    <TextField value={transferAmount}
                        onChange={(e) => {
                            setTransferAmount(e.target.value)
                        }} type="number" required InputProps={{
                            inputProps: { min: 0, max: maxTransfer },
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Typography style={{ color: 'black' }}>MYR</Typography>
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            input: { color: 'black' },
                            "& .MuiInputLabel-root": { color: 'black' },//styles the label
                            "& .MuiOutlinedInput-root": {
                                "& > fieldset": { borderColor: "black" },
                            }, ".MuiOutlinedInput-root:hover": {
                                "& > fieldset": {
                                    borderColor: "orange"
                                }
                            }
                        }} fullWidth label="transferAmount" id="transferAmount" name="transferAmount" />
                </Grid>
            </Grid>
            <Grid item>
                <Button onClick={transfer} style={{ marginTop: 20 }} variant="contained" color="primary" endIcon={<CreditScoreIcon />}>
                    Transfer
                </Button>
            </Grid>
        </Grid>
    )
}