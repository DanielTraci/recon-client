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

    }

}));

//className="header"   className={classes.sectionOne}
export default function FullWidthGrid() {
    const classes = useStyles();
    /*   const theme = useTheme();
      const isMobile = useMediaQuery(theme.breakpoints.down("xs")); */

    return (
        <div className={classes.root}>

            <Grid container spacing={3} justify="center">
                

                <Grid container className={classes.header}>                
                <Grid item xs={12} sm={6}>
                <Typography variant="h6" color="primary" component="p">
                        As a scum sucking contractor, Jeremy enjoys having fun reverse engineering code and building backdoors to get access to the most sensitive data. Being a Red Team SME and Sr. Cyber Investigator, he looks for a good time analyzing an organization's flaws and identifying their weaknesses.
                    </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                <Typography variant="h6" color="primary" component="p">
                        As a scum sucking contractor, Jeremy enjoys having fun reverse engineering code and building backdoors to get access to the most sensitive data. Being a Red Team SME and Sr. Cyber Investigator, he looks for a good time analyzing an organization's flaws and identifying their weaknesses.
                    </Typography>
                </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h3" color="primary" align="center">
                        Developers
                    </Typography>
                    <Typography variant="h6" color="primary" align="center">
                        "It all started when we saw a black hoodie for the first time"
                    </Typography>
                </Grid>

                <Grid container spacing={3} className={classes.cardPadding} justify="center">

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.cardColor}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        J
                                    </Avatar>
                                }
                                title="Jeremy Martin"
                            />
                            <CardContent>
                                <Typography variant="body2" color="primary" component="p">
                                    As a scum sucking contractor, Jeremy enjoys having fun reverse engineering code and building backdoors to get access to the most sensitive data. Being a Red Team SME and Sr. Cyber Investigator, he looks for a good time analyzing an organization's flaws and identifying their weaknesses.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>

                                <IconButton href="https://www.linkedin.com/in/infosecwriter">
                                    <LinkedIn color="error" />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.cardColor}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        R
                                    </Avatar>
                                }
                                title="Richard K. Medlin"
                            />
                            <CardContent>
                                <Typography variant="body2" color="primary" component="p">
                                    Currently in the Marine Corps, Richard likes long strolls at a breach and reading beautiful code in the moonlight. Actually, he will read any code in any light... His interests include incident response, risk management, system exploitation, coding, fast cars, cigars, and puppies.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>

                                <IconButton href="https://www.linkedin.com/in/richard-medlin1">
                                    <LinkedIn color="error" />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.cardColor}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        M
                                    </Avatar>
                                }
                                title="Matthew Swenson"
                            />
                            <CardContent>
                                <Typography variant="body2" color="primary" component="p">
                                    Matt is looking for a that special suspect that needs some extra attention. Being masterful in the server room and a networking ninja, watch your vulnerable services with this one. If you are into Netflix and kill while streaming on Social media, watch out for this guy. He is a real catch(er).
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>

                                <IconButton href="https://www.linkedin.com/in/maswenson">
                                    <LinkedIn color="error" />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.cardColor}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        N
                                    </Avatar>
                                }
                                title="Nitin Sharma"
                            />
                            <CardContent>
                                <Typography variant="body2" color="primary" component="p">
                                    A passionate infosec practitioner and cloud security enthusiast. Coding and actively researching in Linux, Python, SecOps, OSINT and what not. In his free time, he hits the gym and enjoys a healthy life.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>

                                <IconButton href="https://www.linkedin.com/in/nitinsharma87">
                                    <LinkedIn color="error" />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>



                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.cardColor}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        C
                                    </Avatar>
                                }
                                title="Christopher Perini"
                            />
                            <CardContent>
                                <Typography variant="body2" color="primary" component="p">
                                    Chris has the body of a Geek God and the tenacity of a pit bull that won't let go until the job is done. He is a good listener that catches the most minute detail. You don't have to "suspect" that you have been heard when talking with this one. From sweet sweet OSINT to both forensics and risk assessments, you know you are in safe hands.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>

                                <IconButton href="https://www.linkedin.com/company/information-warfare-center/">
                                    <SearchIcon color="error" />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.cardColor}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        M
                                    </Avatar>
                                }
                                title="Mark Martinez"
                            />
                            <CardContent>
                                <Typography variant="body2" color="primary" component="p">
                                    Mark is a virtual rockstar with a pendency to create magic from the mundane. Looking for a long term distribution for stability, you can count on him to be there for you. If you want to grab some GRUB, give this one a shout.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>

                                <IconButton href="mailto:mmartinez99@gatech.edu">
                                    <MailIcon color="error" />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.cardColor}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        D
                                    </Avatar>
                                }
                                title="Daniel Traci"
                            />
                            <CardContent>
                                <Typography variant="body2" color="primary" component="p">
                                    Daniel is the new kid on the block in programming. He breaks the code until it works. Frankensteining around the code editor and connecting the dots is his new calling. Apart from dreaming about solutions to bugs in his code, Daniel loves snowboarding, kittens, puppies, good wine, Marvel, and Batman.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>

                                <IconButton href="https://www.linkedin.com/in/edanieltraci/">
                                    <LinkedIn color="error" />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}




