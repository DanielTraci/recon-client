import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { LinkedIn } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';



const useStyles = makeStyles((theme) => ({

    cardColor: {
        backgroundColor: "#2D2D2D",
    },
    header: {
        position: "relative",
        paddingBottom: theme.spacing(10),
        paddingTop: theme.spacing(10),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
}));

export default function Team() {
    const classes = useStyles();
    return (
        <div>
            <Grid item xs={12} className={classes.header}>
                <Typography variant="h3" color="primary" gutterBottom>
                    Developers
                </Typography>
                <Typography variant="h5" color="primary" paragraph>
                    "It all started when we saw a black hoodie for the first time"
                </Typography>
            </Grid>

            <Grid container spacing={6} justify="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.cardColor}>
                        <CardContent>
                            <Typography variant="h5" color="error"> Jeremy Martin </Typography>
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
                        <CardContent>
                            <Typography variant="h5" color="error"> Richard Medlin </Typography>
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
                        <CardContent>
                            <Typography variant="h5" color="error"> Matthew Swenson </Typography>
                            <Typography variant="body2" color="primary" component="p">
                                Matt is looking for a that special suspect that needs some extra attention. Being masterful in the server room and a networking ninja, watch your vulnerable services with this one. If you are into Netflix and kill while streaming on Social media, watch out. He is a real catch(er).
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
                        <CardContent>
                            <Typography variant="h5" color="error">Nitin Sharma </Typography>
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
                        <CardContent>
                            <Typography variant="h5" color="error">Christopher Perini </Typography>
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
                        <CardContent>
                            <Typography variant="h5" color="error">Mark Martinez</Typography>
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
                        <CardContent>
                            <Typography variant="h5" color="error">Daniel Traci</Typography>
                            <Typography variant="body2" color="primary" component="p">
                                Daniel is the new kid on the block in programming. He breaks the code until it works. Frankensteining around the code editor is his new calling. Apart from dreaming about solutions to production bugs, Daniel loves kittens, puppies, good wine, and snowboarding.
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
        </div>
    );
}




