import React from 'react';
import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { LinkedIn } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
    header: {
        position: "relative",
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    cardColor: {
        backgroundColor: "#2D2D2D",
        borderColor: "#0000ff"
    },
    sectionTitles: {
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(10),
    },
    outlinedbuttons: {
        '&:hover': {
            color: '#C01F24'
        }
    },
}));

export default function Team(props) {
    const classes = useStyles();
    const { history } = props
    const handleButtonClick = pageURL => {
        history.push(pageURL);
    };

    //goes to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Grid container spacing={4} className={classes.header}>
                <Grid item xs={12} >
                    <Typography variant="h3" color="primary" gutterBottom>
                        Developers
                    </Typography>
                    <Typography variant="h5" color="primary" paragraph>
                        "It all started when we saw a black hoodie for the first time"
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={5} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.cardColor} variant="outlined">
                        <CardContent>
                            <Box display="flex" alignItems="center">
                                <IconButton href="https://www.linkedin.com/in/infosecwriter">
                                    <LinkedIn color="error" />
                                </IconButton>
                                <Typography variant="h5" color="error">| Jeremy Martin </Typography>
                            </Box>
                            <Typography variant="body2" color="primary" component="p">
                                As a scum sucking contractor, Jeremy enjoys having fun reverse engineering code and building backdoors to get access to the most sensitive data. Being a Red Team SME and Sr. Cyber Investigator, he looks for a good time analyzing organizations' flaws and identifying their weaknesses.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.cardColor} variant="outlined">
                        <CardContent>
                            <Box display="flex" alignItems="center">
                                <IconButton href="https://www.linkedin.com/in/richard-medlin1">
                                    <LinkedIn color="error" />
                                </IconButton>
                                <Typography variant="h5" color="error"> | Richard Medlin </Typography>
                            </Box>
                            <Typography variant="body2" color="primary" component="p">
                                Currently in the Marine Corps, Richard likes long strolls at a breach and reading beautiful code in the moonlight. Actually, he will read any code in any light... His interests include incident response, risk management, system exploitation, coding, fast cars, cigars, and puppies.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>


                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.cardColor} variant="outlined">
                        <CardContent>
                            <Box display="flex" alignItems="center">
                                <IconButton href="https://www.linkedin.com/in/maswenson">
                                    <LinkedIn color="error" />
                                </IconButton>
                                <Typography variant="h5" color="error">| Matthew Swenson </Typography>
                            </Box>
                            <Typography variant="body2" color="primary" component="p">
                                Matt is looking for a that special suspect that needs some extra attention. Being masterful in the server room and a networking ninja, watch your vulnerable services with this one. If you are into Netflix and kill while streaming on Social media, watch out. He is a real catch(er).
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.cardColor} variant="outlined">
                        <CardContent>
                            <Box display="flex" alignItems="center">
                                <IconButton href="https://www.linkedin.com/in/nitinsharma87">
                                    <LinkedIn color="error" />
                                </IconButton>
                                <Typography variant="h5" color="error">| Nitin Sharma </Typography>
                            </Box>
                              <Typography variant="body2" color="primary" component="p">
                                A passionate infosec practitioner and cloud security enthusiast. Coding and actively researching in Linux, Python, SecOps, OSINT and what not. In his free time, he hits the gym and enjoys a healthy life.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.cardColor} variant="outlined">
                        <CardContent>
                        <Box display="flex" alignItems="center">
                        <IconButton href="https://www.linkedin.com/company/information-warfare-center/">
                                <SearchIcon color="error" />
                            </IconButton>
                        <Typography variant="h5" color="error">| Christopher Perini </Typography>
                        </Box>
                                  <Typography variant="body2" color="primary" component="p">
                                Chris has the body of a Geek God and the tenacity of a pit bull that won't let go until the job is done. He is a good listener that catches the most minute detail. You don't have to "suspect" that you have been heard when talking with this one. From sweet sweet OSINT to both forensics and risk assessments, you know you are in safe hands.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.cardColor} variant="outlined">
                        <CardContent>
                        <Box display="flex" alignItems="center">
                        <IconButton href="mailto:mmartinez99@gatech.edu">
                                <MailIcon color="error" />
                            </IconButton>
                        <Typography variant="h5" color="error">| Mark Martinez</Typography>
                        </Box>
                             <Typography variant="body2" color="primary" component="p">
                                Mark is a virtual rockstar with a pendency to create magic from the mundane. Looking for a long term distribution for stability, you can count on him to be there for you. If you want to grab some GRUB, give this one a shout.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.cardColor} variant="outlined">
                        <CardContent>
                        <Box display="flex" alignItems="center">
                        <IconButton href="https://www.linkedin.com/in/edanieltraci/">
                                <LinkedIn color="error" />
                            </IconButton>
                        <Typography variant="h5" color="error">| Daniel Traci</Typography>
                          
                        </Box>
                              <Typography variant="body2" color="primary" component="p">
                                Daniel is the new kid on the block in programming. He breaks the code until it works. Frankensteining around the code editor is his new calling. Apart from dreaming about solutions to production bugs, Daniel loves kittens, puppies, good wine, and snowboarding.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={4} className={classes.sectionTitles}
                direction="row"
                justifyContent="center"
                alignItems="flex-start">
                <Grid item xs={12} sm={8}>
                    <Box display="flex" justifyContent="center">
                        <Typography variant="h4" color="primary" align="center">
                            Contact us for business inquiries
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box display="flex" justifyContent="center">
                        <Button className={clsx(classes.outlinedbuttons, classes.button)} variant="outlined" size="large" color="primary" onClick={() => handleButtonClick("/contact")} >Get in touch with us</Button>

                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}




