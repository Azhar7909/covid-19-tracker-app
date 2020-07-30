import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';


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
        textAlign: 'center',
        marginBottom: 70,
    },
    InfoLogo: {
        height: 230,
        width: 250,
    },
    heading: {
        color: 'cadetblue',
        marginBottom: -15,
        textTransform: 'uppercase'
    },
}));

export default function AllCountries() {
    const classes = useStyles();
    const [covidInfo, setCovidInfo] = useState([{}])

    async function getData() {
        const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
        let data = await response.json();
        delete data.countryitems[0]["1"].source;
        // console.log("countryitems",data.countryitems[0]["1"]);
        setCovidInfo(Object.values(data.countryitems[0]))
        
    }
    console.log("covidInfo",covidInfo );

    useEffect(() => {
        getData()

    }, [])

    return (
        <div className={classes.root}>
            <Paper elevation={4} className={classes.manPaper}>
                <Typography className={classes.heading} variant="h2" gutterBottom>
                    {covidInfo[0].title}
                </Typography>
                <Grid container spacing={2}>
                { Object.keys(covidInfo[0]).map((key,ind)=>(
                    <Grid item xs={12} sm={4} key={ind+1} >
                        <Paper className={classes.paper}  elevation={4}>
                            <h3 style={{color:'#3f51b5'}}>{key.replace(/_/g,' ').toUpperCase()}</h3>
                            {covidInfo[0][key]}
                        </Paper>
                    </Grid>
                ))}
                </Grid>
            </Paper>
        </div>
    );
}
