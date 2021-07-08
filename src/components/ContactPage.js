import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom'

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
    elements: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
    input: {
        color: "#FFFFFF",
        borderColor: '#FFFFFF'
    },
}));

function ContactPage(props) {
    const classes = useStyles();
    const { onSend, error } = props

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <div className={classes.elements}>
                    <Typography variant="h3" color="primary">
                        Contact us
                    </Typography>
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
                        {
                            error && (<p style={{ color: '#FFFFFF' }}>{error.error}</p>)
                        }
                    </form>
                </div>
                <Box mt={2}>
                   
                    <Typography variant="body2" color="primary" align="center">
            By submitting your message, you confirm that you agree with the <Link color="secondary" href="https://www.informationwarfarecenter.com/privacy-policy.html" >
                Privacy Policy
            </Link>
        </Typography>
                </Box>
            </Container>
        </div>
    );

}

export default withRouter(ContactPage)
