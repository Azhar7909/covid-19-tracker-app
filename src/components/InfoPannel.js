import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from '../assets/logo/logo.png';
import { Typography, capitalize } from '@material-ui/core';


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
    },
    manPaper: {
        padding: 15,
        textAlign: 'center'
    },
    InfoLogo: {
        height: 230,
        width: 250,
    },
    heading: {
        color: '#008B8B',
        marginBottom: -15,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    const [covidInfo, setCovidInfo] = useState({})

    async function getData() {
        const response = await fetch("https://api.thevirustracker.com/free-api?global=stats");
        let data = await response.json();
        delete data.results[0].source;
        console.log(data.results[0]);
        setCovidInfo(data.results[0])
    }

    useEffect(() => {
        getData()

    }, [])

    return (
        <div className={classes.root}>
            <Paper elevation={4} className={classes.manPaper}>
                <Typography className={classes.heading} variant="h2" gutterBottom>
                    COVID-19
                </Typography>
                <img className={classes.InfoLogo} alt="Info Pannel Logo" src={logo} elevation={4} />
                <Grid container spacing={2}>
                { Object.keys(covidInfo).map((key,ind)=>(
                    <Grid item xs={12} sm={4} key={ind+1} >
                        <Paper className={classes.paper}  elevation={4}>
                            <h3 style={{color:'#3f51b5'}}>{key.replace(/_/g,' ').toUpperCase()}</h3>
                            {covidInfo[key]}
                        </Paper>
                    </Grid>
                ))}
                </Grid>
            </Paper>
        </div>
    );
}
