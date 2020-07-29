import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from '../assets/logo/logo.png';
import { Typography } from '@material-ui/core';
import { contextData } from '../global/GlobalData';

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
//  Destructure Data to Use 
    const {data} = useContext(contextData);
    console.log(data);

    return (
        <div className={classes.root}>
            <Paper elevation={4} className={classes.manPaper}>
                <Typography className={classes.heading} variant="h2" gutterBottom>
                    COVID-19
                </Typography>
                <img className={classes.InfoLogo} alt="Info Pannel Logo" src={logo} elevation={4} />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper} elevation={4}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper} elevation={4}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper} elevation={4}>xs=3</Paper>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
