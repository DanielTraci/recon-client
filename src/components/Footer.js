import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import iwclogo from './iwclogo.png'


const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: "#C01F24",
    marginTop: theme.spacing(10),
  },
  footer: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  logoDesktop: {
    maxWidth: 100,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <Divider variant="fullWidth" className={classes.divider} />


      <div className={classes.footer}>
        <Typography color='primary' variant="h6" align="center">Follow us</Typography>

        <Box display="flex" justifyContent="center">
          <Button href="https://www.facebook.com/csilinux"><FacebookIcon color="error" /></Button>
          <Button href="https://www.linkedin.com/company/information-warfare-center/"><LinkedInIcon color="error" /></Button>
          <Button href="https://github.com/Information-Warfare-Center/"><GitHubIcon color="error" /></Button>
          <Button href="https://twitter.com/cyberintel "><TwitterIcon color="error" /></Button>
          <Button href="https://www.youtube.com/c/CyberSecrets"><YouTubeIcon color="error" /></Button>
        </Box>
        <Box display="flex" justifyContent="center" flexDirection="column" >
          <Typography variant="body2" color="primary" align="center">
            <Link color="secondary" href="https://www.informationwarfarecenter.com/" >
              Information Warfare Center
            </Link>
          </Typography>
          <Typography variant="body2" color="primary" align="center">
            <Link color="secondary" href="https://www.informationwarfarecenter.com/privacy-policy.html" >
              Privacy Policy
            </Link>
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography color='primary' variant="body" align="center">Copyright © CSI LINUX</Typography>
        </Box>

      </div>
      {/* 
      <div>
        <Grid container spacing={4} className={classes.footer}>
          <Grid item xs={12} sm={6} md={4}>

          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography color='primary' variant="h6" align="center">Follow us</Typography>
            <Box display="flex" justifyContent="center">
              <Button href="https://www.facebook.com/csilinux"><FacebookIcon color="error" /></Button>
              <Button href="https://www.linkedin.com/company/information-warfare-center/"><LinkedInIcon color="error" /></Button>
              <Button href="https://github.com/Information-Warfare-Center/"><GitHubIcon color="error" /></Button>
              <Button href="https://twitter.com/cyberintel "><TwitterIcon color="error" /></Button>
              <Button href="https://www.youtube.com/c/CyberSecrets"><YouTubeIcon color="error" /></Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Link to="/"><img src={iwclogo} alt="csilinuxlogo" className={classes.logoDesktop} /></Link>
          </Grid>
        </Grid>
      </div> */}

    </div>
  );
}
