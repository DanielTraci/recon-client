import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "100px",
    height: "200px", 
    paddingLeft: "8px",
    paddingRight: "8px"
  },
  divider: {
    backgroundColor: "#C01F24",
  },
  footer: {
    paddingTop: "50px",
    paddingBottom: "50px",
  }

}));

export default function FullWidthGrid() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Divider variant="middle" className={classes.divider} />
      <Grid container spacing={3} className={classes.footer}>
        <Grid item xs={12} container
          direction="column"
          justify="flex-start"
          alignItems="center">
          <Box>
            <Typography color='primary' variant="h6">Follow us</Typography>
          </Box>
          <Box >
            <Button href="https://www.facebook.com/csilinux"><FacebookIcon color="error" /></Button>
            <Button href="https://www.linkedin.com/company/information-warfare-center/"><LinkedInIcon color="error" /></Button>
            <Button href="https://github.com/Information-Warfare-Center/"><GitHubIcon color="error" /></Button>
            <Button href="https://twitter.com/cyberintel "><TwitterIcon color="error" /></Button>
            <Button href="https://www.youtube.com/c/CyberSecrets"><YouTubeIcon color="error" /></Button>
          </Box>
          <Box>
          <Button href="https://www.informationwarfarecenter.com/"><Typography color='primary' variant="body">Information Warfare Center</Typography></Button>
          <Typography color='primary' variant="body">|</Typography>
          <Button href="https://www.informationwarfarecenter.com/privacy-policy.html"><Typography color='primary' variant="body">Privacy Policy</Typography></Button>
          </Box>
          <Box>
          <Typography color='primary' variant="body">Copyright © CSI LINUX</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}


{/*           <Link to="https://www.informationwarfarecenter.com/privacy-policy.html"><Typography color='primary' variant="body">Privacy Policy</Typography></Link>
          <Link to="https://www.informationwarfarecenter.com/privacy-policy.html"><Typography color='primary' variant="body">Privacy Policy</Typography></Link> */}