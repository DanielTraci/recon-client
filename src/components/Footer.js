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
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import iwclogo from './iwclogo.png'
import { Link as RouterLink } from "react-router-dom"
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: "#C01F24",
    marginTop: theme.spacing(10),
  },
  footer: {
    marginTop: theme.spacing(6),
  },
  logoDesktop: {
    maxWidth: 125,
  },
  columnSpacing: {
    marginBottom: theme.spacing(6),
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <div>
      <Divider variant="fullWidth" className={classes.divider} />
      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.footer}>
        <Grid xs={12} sm={6} md={4} className={classes.columnSpacing}>
          <Box display="flex" justifyContent="center" flexDirection="column" >
            <Typography variant="body2" align="center">
              <Link component={RouterLink} to={"/download"} color="error">Download</Link>
            </Typography>
            <Typography variant="body2" align="center">
              <Link component={RouterLink} to={"/tutorials"} color="error">Tutorials</Link>
            </Typography>
            <Typography variant="body2" align="center">
              <Link component={RouterLink} to={"/features"} color="error">Features</Link>
            </Typography>
            <Typography variant="body2" align="center">
              <Link component={RouterLink} to={"/team"} color="error">Team</Link>
            </Typography>
            <Typography variant="body2" align="center">
              <Link href="https://informationwarfarecenter.com/Cyber_Intelligence_Report.php" color="error">Publications</Link>
            </Typography>
            <Typography variant="body2" align="center">
              <Link component={RouterLink} to={"/contact"} color="error">Contact</Link>
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} className={classes.columnSpacing}>
          <Box display="flex" justifyContent="center">
            <Typography color='error' variant="body">Follow us</Typography>
          </Box>
          <Box display="flex" justifyContent="center">

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

          <Box display="flex" justifyContent="center" flexDirection="column" >
            <Typography variant="body2" align="center">
              <Link color="error" href="https://www.informationwarfarecenter.com/" >
                Subscribe to publications
              </Link>
            </Typography>
            <Typography variant="body2" align="center">
              <Link color="error" href="https://csilinux.creator-spring.com/" >
                Support CSI Linux
              </Link>
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} className={classes.columnSpacing}>
          <Box display="flex" justifyContent="center">
            <Link href="https://informationwarfarecenter.com/"><img src={iwclogo} alt="iwc logo" className={classes.logoDesktop} /></Link>
          </Box>
        </Grid>

        <Grid item xs={12} className={classes.columnSpacing}>
          <Box display="flex" justifyContent="center" flexDirection="column" >
            <Typography variant="body2" align="center">
              <Link color="error" href="https://www.informationwarfarecenter.com/" >
                Information Warfare Center
              </Link>
            </Typography>
            <Typography variant="body2" align="center">
              <Link color="error" href="https://www.informationwarfarecenter.com/privacy-policy.html" >
                Privacy Policy
              </Link>
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" >
            <Typography color='error' variant="body" align="center">Copyright © CSI LINUX</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
