import { InputLabel, Select, MenuItem, FormControl, Typography, Grid, Box, Button } from "@mui/material"
import TextField from '@mui/material/TextField';
import LabelIcon from '@mui/icons-material/Label';
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SaveIcon from '@mui/icons-material/Save';
import { useEffect, useState } from "react";
import Router from "next/router";

export default function create_tabung() {

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
    

    const addTabung = async () => {

        const response = await fetch('/api/tabung', {
            method: 'POST',
            body: JSON.stringify({ name, tabung_name, currentValueTarget, target, validator_name, validator_email, validator_acno, method, amount, percentage }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const data = await response.json()
        console.log(data)

        Router.push({
            pathname: "/result_tabung",
            query: {
                name, tabung_name, currentValueTarget, target, method, amount, percentage, validator_name, validator_email, validator_acno
            }
        })

    }

    return (
        <Grid container
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <Grid item>
                <Typography style={{ fontSize: 38, fontWeight: 'bold' }}>Create Goaly Jar</Typography>
            </Grid>
            <Grid item>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >

                    <TextField value={name} onChange={(e) => setName(e.target.value)} required InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleIcon style={{ color: 'black' }} />
                            </InputAdornment>
                        ),
                    }} sx={{
                        marginBottom: 4,
                        input: { color: 'black' },
                        "& .MuiInputLabel-root": { color: 'black' },//styles the label
                        "& .MuiOutlinedInput-root": {
                            "& > fieldset": { borderColor: "black" },
                        }, ".MuiOutlinedInput-root:hover": {
                            "& > fieldset": {
                                borderColor: "orange"
                            }
                        }
                    }} fullWidth label="Name" id="name" name="name" />
                </Box>
            </Grid>
            <Grid item>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >

                    <TextField value={tabung_name} onChange={(e) => setTabungName(e.target.value)} required InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LabelIcon style={{ color: 'black' }} />
                            </InputAdornment>
                        ),
                    }} sx={{
                        input: { color: 'black' },
                        "& .MuiInputLabel-root": { color: 'black' },//styles the label
                        "& .MuiOutlinedInput-root": {
                            "& > fieldset": { borderColor: "black" },
                        }, ".MuiOutlinedInput-root:hover": {
                            "& > fieldset": {
                                borderColor: "orange"
                            }
                        }
                    }} fullWidth label="Jar's Name" id="tabung_name" name="tabung_name" />
                </Box>
            </Grid>
            <Grid item>
                <Box
                    sx={{
                        marginTop: 4,
                        width: 500,
                        maxWidth: '100%',
                    }}
                >

                    <TextField value={target} onChange={(e) => setTarget(e.target.value)} type="number" required InputProps={{
                        min: 0,
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
                        }} fullWidth label="Target" id="target" name="target" />
                </Box>
            </Grid>
            <Grid item>
                <Typography style={{ fontSize: 38, fontWeight: 'bold' }}>Method</Typography>
            </Grid>
            <Grid item>
                <FormControl fullWidth>
                    <InputLabel>Method</InputLabel>
                    <Select
                        value={method}
                        label="Method"
                        onChange={(e) => setMethod(e.target.value)}
                    >
                        <MenuItem value={1}>1 - Auto-deduct</MenuItem>
                        <MenuItem value={2}>2 - Self-tax</MenuItem>
                        <MenuItem value={3}>3 - Whole-up</MenuItem>
                        <MenuItem value={4}>4 - Auto-deduct & Self-tax</MenuItem>
                        <MenuItem value={5}>5 - Self-tax & Whole-up</MenuItem>
                        <MenuItem value={6}>6 - Auto-deduct & Self-tax & Whole-up</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <Typography style={{ fontSize: 15, textAlign: 'center', marginTop: 20, marginBottom: 20, marginLeft: '30%', marginRight: '30%' }}>Auto Deduct (auto billing) - A fixed amount will be deducted from your savings account to your tabung monthly.</Typography>
            </Grid>
            <Grid item>
                <TextField value={amount} onChange={(e) => setAmount(e.target.value)} type="number" required InputProps={{
                    inputProps: { min: 0 },
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
                    }} fullWidth label="Amount" id="amount" name="amount" />
            </Grid>
            <Grid item>
                <Typography style={{ fontSize: 15, textAlign: 'center', marginTop: 20, marginBottom: 20, marginLeft: '30%', marginRight: '30%' }}>Self Tax - A maximum of 1% from your total spendings is deposited to your tabung.</Typography>
            </Grid>
            <Grid item>
                <TextField value={percentage} onChange={(e) => setPercentage(e.target.value)} type="number" required InputProps={{
                    inputProps: { min: 0, max: 1 },
                    endAdornment: (
                        <InputAdornment position="end">
                            <Typography style={{ color: 'black' }}> %</Typography>
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
                    }} fullWidth label="Percentage" id="percentage" name="percentage" />
            </Grid>
            <Grid item></Grid>
            <Grid item>
                <Typography style={{ fontSize: 15, textAlign: 'center', marginTop: 20, marginLeft: '30%', marginRight: '30%' }}>Whole Up - The total amount from your every purchase is rounded up to the nearest RM 1.00</Typography>
            </Grid>
            <Grid item>
                <Typography style={{ fontSize: 15, textAlign: 'center', marginBottom: 20, marginLeft: '30%', marginRight: '30%' }}>e.g:
                    Food: RM 5.70
                    Round up to: RM 6.70
                    Paid to seller: RM 5.70
                    Deposit from savings account to Goaly Jar: RM 6.70</Typography>
            </Grid>
            <Grid item>
                <Typography style={{ fontSize: 38, fontWeight: 'bold' }}>Validator's Details</Typography>
            </Grid>

            <Grid item>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >

                    <TextField value={validator_name} onChange={(e) => setValName(e.target.value)} type="text" required InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleIcon style={{ color: 'black' }} />
                            </InputAdornment>
                        ),
                    }} sx={{
                        input: { color: 'black' },
                        "& .MuiInputLabel-root": { color: 'black' },//styles the label
                        "& .MuiOutlinedInput-root": {
                            "& > fieldset": { borderColor: "black" },
                        }, ".MuiOutlinedInput-root:hover": {
                            "& > fieldset": {
                                borderColor: "orange"
                            }
                        }
                    }} fullWidth label="Name" id="validator_name" name="validator_name" />
                </Box>
            </Grid>
            <Grid item>
                <Box
                    sx={{
                        marginTop: 4,
                        width: 500,
                        maxWidth: '100%',
                    }}
                >

                    <TextField value={validator_email} onChange={(e) => setEmail(e.target.value)} type="email" required InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon style={{ color: 'black' }} />
                            </InputAdornment>
                        ),
                    }} sx={{
                        input: { color: 'black' },
                        "& .MuiInputLabel-root": { color: 'black' },//styles the label
                        "& .MuiOutlinedInput-root": {
                            "& > fieldset": { borderColor: "black" },
                        }, ".MuiOutlinedInput-root:hover": {
                            "& > fieldset": {
                                borderColor: "orange"
                            }
                        }
                    }} fullWidth label="Email" id="validator_email" name="validator_email" />
                </Box>
            </Grid>
            <Grid item>
                <Box
                    sx={{
                        marginTop: 4,
                        width: 500,
                        maxWidth: '100%',
                    }}
                >

                    <TextField value={validator_acno} onChange={(e) => setACNO(e.target.value)} onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 16)
                    }} type="number" required InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountBalanceWalletIcon style={{ color: 'black' }} />
                            </InputAdornment>
                        ),
                    }} sx={{
                        input: { color: 'black' },
                        "& .MuiInputLabel-root": { color: 'black' },//styles the label
                        "& .MuiOutlinedInput-root": {
                            "& > fieldset": { borderColor: "black" },
                        }, ".MuiOutlinedInput-root:hover": {
                            "& > fieldset": {
                                borderColor: "orange"
                            }
                        }
                    }} fullWidth label="Account Number" id="validator_acno" name="validator_acno" />
                </Box>
            </Grid>
            <Grid item>
                <Button onClick={addTabung} style={{ marginTop: 20 }} variant="contained" color="success" endIcon={<SaveIcon />}>
                    Save
                </Button>
            </Grid>
        </Grid>
    )
}

