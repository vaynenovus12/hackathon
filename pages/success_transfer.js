import { Typography, Grid, Button, TextField } from "@mui/material"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function success_transfer() {

    return (
        <Grid container direction="column" alignItems="center"
            justifyContent="center">
            <Grid item>
                <CheckCircleOutlineIcon color="success" style={{ fontSize: 90, marginLeft: 10, marginTop: 20 }}/>
            </Grid>
            <Grid item>

                <Typography>
                    Your transfer's was successful
                </Typography>
            </Grid>
        </Grid>
    )
}