import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from '../assets/logo/logo.png';
import PieChart from '../components/Chart';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 1000,
        margin: '0 auto',
        paddingTop: 15,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: 10,
        marginBottom: 10,
    },
    manPaper: {
        padding: 15,
        marginBottom: 70,
        textAlign: 'center',
    },
    InfoLogo: {
        height: 230,
        width: 250,
    },
    heading: {
        color: 'cadetblue',
        marginBottom: -15,
    },
}));

export default function GlobalStates() {
    const classes = useStyles();
    const [covidInfo, setCovidInfo] = useState({})

    async function getData() {
        const response = await fetch("https://api.thevirustracker.com/free-api?global=stats");
        let data = await response.json();
        delete data.results[0].source;
        // console.log(data.results[0]);
        setCovidInfo(data.results[0])
        localStorage.setItem("DataChar",JSON.stringify(data.results[0]));
    }

    useEffect(() => {
        getData()

    }, [])

    return (
        <div className={classes.root}>
            <Paper elevation={4} className={classes.manPaper}>
                <Grid container style={{ padding: '35px', display: 'flex', justifyContent: 'space-around' }} spacing={2}>
                    <Grid className={classes.heading} variant="h2">
                        GLOBALLY<br />
                        <img className={classes.InfoLogo} alt="Info Pannel Logo" src={logo} elevation={4} />
                    </Grid>
                    <div>
                        <p style={{color:'#FFCE56',textAlign: 'center',marginTop: '50px'}}>TOTAL CASES</p>
                        <p style={{color:'#FF6384',textAlign: 'center'}}>TOTAL DEATHS</p>
                        <p style={{color:'#36A2EB',textAlign: 'center'}}>TOTAL RECOVERED</p>
                    </div>
                    <PieChart />
                </Grid>
                <Grid container spacing={2}>
                    {Object.keys(covidInfo).map((key, ind) => (
                        <Grid item xs={12} sm={4} key={ind + 1} >
                            <Paper className={classes.paper} elevation={4}>
                                <h3 style={{ color: '#3f51b5' }}>{key.replace(/_/g, ' ').toUpperCase()}</h3>
                                {covidInfo[key]}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </div>
    );
}
