import { Button, Card, CardActionArea, CardContent, Typography, Grid } from "@mui/material"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
export default function Main() {
  const [listTabung, setListTabung] = useState([])


  useEffect(() => {
    async function fetchListTabung() {
      const response = await fetch('/api/tabung')
      const data = await response.json()
      setListTabung(data)
    }
    fetchListTabung()
  }, [])

  const accountNumber = '1-2345-6789123-4';
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
          }, background: 'linear-gradient(to left top, #D96C00, #FFB973)'
        }}>
          <CardActionArea href="#">
            <CardContent>
              <Typography style={{ fontSize: 22, fontWeight: 'bold' }}>Savings Account</Typography>
              <Typography style={{ fontSize: 14 }}>{accountNumber}</Typography>
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
                  <AccountBalanceIcon style={{ fontSize: 40, marginLeft: 10 }} width={100} height={100} />
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid container
        direction="column"
        alignItems="center"
      >
        <Grid item>
          <Typography style={{ fontSize: 22, fontWeight: 'bold', marginTop: 10, }}>List of Goaly Jar</Typography>
        </Grid>
        {listTabung.map((tabung) => {
          return (
            <Grid item>
              <Card style={{
                marginTop: 10,
                width: {
                  sx: 1.0, // 100%
                  sm: 250,
                  md: 350,
                }, background: 'linear-gradient(to right, #1CD8D2, #93EDC7)'
              }}>
                <CardActionArea href="#">
                  <CardContent>
                    <Typography style={{ fontSize: 22, fontWeight: 'bold' }}>{tabung.tabung_name}</Typography>
                    <Grid container
                      direction="row"
                      alignItems="center"
                      justify="center">
                      <Grid item>
                        <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>MYR</Typography>
                      </Grid>
                      <Grid item>
                        <Typography style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 5 }}>{tabung.currentValueTarget.toFixed(2)}</Typography>
                      </Grid>
                      <Grid item>
                        <Typography style={{ fontSize: 22, marginLeft: 5 }}>of</Typography>
                      </Grid>
                      <Grid item>
                        <Typography style={{ marginLeft: 10, fontSize: 16, fontWeight: 'bold' }}>MYR</Typography>
                      </Grid>
                      <Grid item>
                        <Typography style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 5 }}>{parseFloat(tabung.target).toFixed(2)}</Typography>
                      </Grid>
                      <Grid item>
                        <CheckCircleOutlineIcon style={{ fontSize: 50, marginLeft: 10, color: 'white' }} width={100} height={100} />
                      </Grid>
                    </Grid>
                    <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                      {
                        tabung.method == 1 ?
                          <Grid container direction="row">
                            <Grid item>
                              <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                                Auto-deduct
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>
                                MYR {parseFloat(tabung.amount).toFixed(2)}
                              </Typography>
                            </Grid>
                          </Grid>
                          : tabung.method == 2 ? <Grid container direction="row">
                            <Grid item>
                              <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                                Self-tax
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>
                                {parseFloat(tabung.percentage).toFixed(2)}%
                              </Typography>
                            </Grid>
                          </Grid>
                            : tabung.method == 3 ? <Grid container direction="column">
                              <Grid item>
                                <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                                  Whole-up
                                </Typography>
                              </Grid>
                            </Grid>
                              : tabung.method == 4 ? <Grid container direction="column">
                                <Grid container direction="row">
                                  <Grid item>
                                    <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                                      Auto-deduct
                                    </Typography>
                                  </Grid>
                                  <Grid item>
                                    <Typography style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>
                                      MYR {parseFloat(tabung.amount).toFixed(2)}
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
                                      {tabung.percentage}%
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                                : tabung.method == 5 ? <Grid container direction="column">
                                  <Grid container direction="row">
                                    <Grid item>
                                      <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                                        Self-tax
                                      </Typography>
                                    </Grid>
                                    <Grid item>
                                      <Typography style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>
                                        MYR {parseFloat(tabung.percentage).toFixed(2)}
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
                                  : tabung.method == 6 ? <Grid container direction="column">
                                    <Grid container direction="row">
                                      <Grid item>
                                        <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
                                          Auto-deduct
                                        </Typography>
                                      </Grid>
                                      <Grid item>
                                        <Typography style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>
                                          MYR {parseFloat(tabung.amount).toFixed(2)}
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
                                          {tabung.percentage}%
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
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })
        }
      </Grid>
      <Grid item>
        <Button style={{ marginTop: 20 }} variant="contained" href="/create_tabung" color="success" endIcon={<AddIcon />}>
          Create New Goaly Jar
        </Button>
      </Grid>
    </Grid>
  )
}
