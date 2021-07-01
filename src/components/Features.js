import React from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import SyncProblemIcon from '@material-ui/icons/SyncProblem';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import Box from '@material-ui/core/Box';
import { useEffect, useRef } from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import Card from '@material-ui/core/Card';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import { LinkedIn } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import Container from '@material-ui/core/Container'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    sectionOne: {
        height: "600px",
        backgroundImage: `url('./covers/largelogo.png')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "320px",
        position: "relative",

        /* display: "flex",
        direction: "row",
        alignItems: "center", //wprks
        justifyContent: "space-around" */

    },
    header: {
        height: "400px",
    },
    titles: {
        display: "flex",
        justifyContent: "center",
    },
    animatedText: {
        margin: "0px"
    },
    cardColor: {
        backgroundColor: "#2D2D2D",
    },
    terminalIcons: {
        margin: "0px",
        padding: "0px",
    },
    iconsAlign: {
        direction: "column",
        justify: "center"
    },

    avatar: {
        backgroundColor: "#C01F24",
    },
    cardPadding: {
        paddingLeft: "70px",
        paddingRight: "70px",

    },

    //------------------
    header: {
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",                
    },
    headerContent: {
        position: "relative",
        padding: theme.spacing(9),

    }


}));

//className="header"   className={classes.sectionOne}
export default function FullWidthGrid() {
    const classes = useStyles();
    /*   const theme = useTheme();
      const isMobile = useMediaQuery(theme.breakpoints.down("xs")); */

    return (
        <div >
            <Paper className={classes.header}>
                <Container maxWidth>
                    <Grid container>
                        <Grid item md={6}>

                        <div className={classes.headerContent} style={{backgroundImage:`url(./covers/largelogo.png)`}}>
                           <Typography variant="h1" color="secondary" gutterBottom>
                                    csi linuxxx
                           </Typography>

                           <Typography variant="h5" color="secondary" paragraph>
                                    csi linuxxxskdcsldkmclskmdclksmlkdmcslkmdclksmdcklmslkdsdksldksldksldksldkslmcs
                           </Typography>
                        </div>
                        </Grid>

                    </Grid>
                </Container>
            </Paper>


        </div>
    );
}




