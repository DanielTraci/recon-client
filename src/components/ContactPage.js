import React from 'react';
import { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from '@material-ui/core/IconButton';

const CssTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#FFFFFF',
                color: 'white'
            },
            '&:hover fieldset': {
                borderColor: '#FFFFFF',
            },
        },
    },
})(TextField);

const useStyles = makeStyles((theme) => ({
    header: {
        position: "relative",
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    elements: {
        //marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
        '&:hover': {
            color: '#C01F24'
        }
    },
    input: {
        color: "#FFFFFF",
        borderColor: '#FFFFFF'
    },
    logoDesktop: {
        maxWidth: 175,
    },
    followXsubscription: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    subscriptionButtonsSpacing: {
        marginTop: theme.spacing(1),
        '&:hover': {
            color: '#C01F24'
        }
      },
}));

function ContactPage(props) {
    const classes = useStyles();
    const { onSend } = props

    //goes to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (

        <Grid container spacing={4}
            className={classes.header}
        >
            <Grid item xs={12} sm={6}>
                <Typography variant="h3" color="primary" gutterBottom>
                    Contact us
                </Typography>
                <Typography variant="h5" color="primary" paragraph>
                    As soon as we see your message, we'll put a black hoodie on and get back to you asap!
                </Typography>
                <Typography variant="h5" color="primary" paragraph>
                    In the meantime, subscribe to our newsletter to get our publications and the latest news about CSI Linux, and follow us on other channels.
                </Typography>

                <Box className={classes.followXsubscription}>

                    <Button variant="outlined" size="large" color="primary" className={classes.subscriptionButtonsSpacing} href="https://comms.informationwarfarecenter.com/?p=subscribe&id=1">Subscribe to newsletter</Button>
                    <Box className={classes.subscriptionButtonsSpacing}>
                        <IconButton href="https://www.facebook.com/csilinux">
                            <FacebookIcon color="error" />
                        </IconButton>
                        <IconButton href="https://twitter.com/cyberintel">
                            <TwitterIcon color="error" />
                        </IconButton>
                        <IconButton href="https://github.com/Information-Warfare-Center/">
                            <GitHubIcon color="error" />
                        </IconButton>
                        <IconButton href="https://www.youtube.com/c/CyberSecrets">
                            <YouTubeIcon color="error" />
                        </IconButton>
                        <IconButton href="https://www.linkedin.com/company/information-warfare-center/">
                            <LinkedInIcon color="error" />
                        </IconButton>
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Container component="main" maxWidth="xs">
                    <div className={classes.elements}>
                        <CardMedia
                            component="img"
                            alt="CSI LINUX - TUTORIAL"
                            image="./covers/logoCover.png"
                            className={classes.logoDesktop}
                        />
                        <form onSubmit={onSend}>
                            <CssTextField required id="standard-basic" name="name" label="Your name" variant="outlined" fullWidth margin="normal" InputProps={{ className: classes.input }} />
                            <CssTextField required id="standard-basic" name="email" label="Your email" type="email" variant="outlined" fullWidth margin="normal" InputProps={{ className: classes.input }} />
                            <CssTextField required id="standard-basic" name="subject" label="Subject" variant="outlined" fullWidth margin="normal" InputProps={{ className: classes.input }} />
                            <CssTextField required id="outlined-multiline-static" name="message"
                                label="Your message"
                                multiline
                                rows={4}
                                variant="outlined"
                                color="primary"
                                fullWidth margin="normal"
                                InputProps={{ className: classes.input }}
                            />
                            <Button className={classes.submit} fullWidth variant="outlined" color="primary" type="submit">Submit</Button>
                        </form>

                    </div>
                    <Box mt={2}>
                        <Typography variant="body2" color="primary" align="center">
                            By submitting your message, you confirm that you agree with the <Link color="error" href="https://www.informationwarfarecenter.com/privacy-policy.html" >
                                Privacy Policy
                            </Link>
                        </Typography>
                    </Box>
                </Container>
            </Grid>
        </Grid>
    );

}

export default withRouter(ContactPage)
