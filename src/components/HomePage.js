import React from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import SyncProblemIcon from '@material-ui/icons/SyncProblem';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import Box from '@material-ui/core/Box';
import TypeWriterEffect from 'react-typewriter-effect';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CodeIcon from '@material-ui/icons/Code';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx'

//styling
//the page has three sections with content - header, sectionTwo, sectionThree
const useStyles = makeStyles((theme) => ({
  header: {
    position: "relative",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  sectionTitles: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(8),
  },
  contentMargins: {
    marginBottom: theme.spacing(8),
  },
  terminal: {
    backgroundColor: "#2D2D2D",
    borderColor: "#C01F24"
  },
  terminalIcons: {
    margin: "0px",
    padding: "0px",
  },
  sectionTwoIcons: {
    marginBottom: theme.spacing(4),
  },
  textXiconSpacing: {
    marginTop: theme.spacing(2),
  }
}));


export default function HomePage(props) {
  const classes = useStyles();
  const { history } = props

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  return (
    <div>
      {/*-----------Header
       ---------------------------*/}
      <Grid container spacing={4}
        direction="row"
        justify="flex-start"
        alignItems="center"
        className={classes.header}>
        <Grid item xs={12} sm={6} >
          <div className={classes.headerContent}>
            <Typography variant="h3" color="primary" gutterBottom>
              Welcome to CSI Linux
            </Typography>
            <Typography variant="h6" color="primary" paragraph>
              CSI Linux is a focused Linux distribution for digital forensics. We developed an open-source 'theme park' for the cyber security industry. It has tons of capabilities for investigations, analysis and response! CSI Linux is available in both a Virtual Machine Appliance and Bootable distro to use as a daily driver.
            </Typography>
            <Button variant="outlined" size="large" color="primary" onClick={() => handleButtonClick("/download")} >Download</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} >
          <div className={classes.headerContent}>
            <Card className={classes.terminal} variant="outlined">
              <CardContent >
                <CardHeader className={classes.terminalIcons}
                  avatar={[
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                  ]}
                />
                <Typography color='primary'><TypeWriterEffect text="~CSI Linux 2021.2 has been released!" textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1.5rem" }} typeSpeed={70} cursorColor="#FFFFFF" /></Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>

      {/* section2------Unlock your DFIR superpowers
          --------------------------------------------*/}
      <Grid container>
        <Grid item xs={12} >
          <Typography color='primary' variant="h4" align="center" className={classes.sectionTitles} >
            Unlock your DFIR superpowers</Typography>
        </Grid>
        <Grid container spacing={4} className={classes.contentMargins}>
          <Grid item xs={12} sm={6}>
            <Card className={classes.terminal} variant="outlined">
              <CardContent >
                <CardHeader className={classes.terminalIcons}
                  avatar={[
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                  ]}
                />
                <Typography color='primary'>~We believe that having the right tools to do the job is critical for forensic investigators. That’s why we have created a multi-purpose, all inclusive, investigation environment starting with online investigations (OSINT, social media, domain recon, and dark web) to offline Digital Forensics and Incident Response to Malware Analysis and more. This is an ideal environment for both training and real world investigations. Most of our Dark web/Darknet focus is on Tor, but we also support I2P, Freenet, and Zeronet. CSI Linux SIEM contains the tools you need for identifying local network threats. What makes this different than the hundreds of other options out there? Well... CSI Linux was developed by Computer Forensics, Incident Response, and Competitive Intelligence professionals to meet the current needs for their clients, government agencies, and the industry.<TypeWriterEffect text="~" textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1rem" }} typeSpeed={1} cursorColor="#FFFFFF" /></Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} container
            direction="column"
            justify="space-evenly"
            alignItems="center">
            <Box className={clsx("iconsXtext", classes.sectionTwoIcons)}>
              <FindInPageIcon color="error" style={{ fontSize: 50 }} />
              <Typography color='primary' variant="h6" className={classes.textXiconSpacing}>ONLINE INVESTIGATIONS</Typography>
            </Box>
            <Box className={clsx("iconsXtext", classes.sectionTwoIcons)}>
              <SyncProblemIcon color="error" style={{ fontSize: 50 }} />
              <Typography color='primary' variant="h6" className={classes.textXiconSpacing}>INCIDENT RESPONSE</Typography>
            </Box>
            <Box className="iconsXtext">
              <DeveloperModeIcon color="error" style={{ fontSize: 50 }} />
              <Typography color='primary' variant="h6" className={classes.textXiconSpacing}>MALWARE ANALYSIS</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/* section3----4 DFIR CHALLENGES CSI LINUX SOLVES
          --------------------------------------------------*/}
      <Grid container>
        <Grid item xs={12}>
          <Typography color='primary' variant="h4" align="center" className={classes.sectionTitles} >4 DFIR challenges CSI Linux solves</Typography>
        </Grid>

        {/* MINIMIZE THE TIME AND EFFORT */}
        <Grid container spacing={4} className={classes.contentMargins}>
          <Grid item xs={12} sm={6} container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Box className="iconsXtext">
              <QueryBuilderIcon color="error" style={{ fontSize: 100 }} />
              <Typography color='primary' variant="h5" align="center" className={classes.textXiconSpacing}>MINIMIZE THE TIME AND EFFORT</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} >
            <Card className={classes.terminal} variant="outlined">
              <CardContent >
                <CardHeader className={classes.terminalIcons}
                  avatar={[
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                  ]}
                />
                <Typography color='primary'>~There is a plethora of information on the Internet and a lot of it is useful during the reconnaissance, OSINT, SOCMINT or Dark web analysis. Tracking a suspect? Want to know what an APT will know about you? Need to link user accounts to prove collusion? These are some of the many challenges many of us face every day. CSI Linux is making this easier and, in many cases, cheaper than ever before.<TypeWriterEffect text="~" textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1rem" }} typeSpeed={1} cursorColor="#FFFFFF" /></Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* CYBER CRIME CASE */}
        <Grid container spacing={4} className={classes.contentMargins}>
          <Grid item xs={12} sm={6} container
            direction="column"
            justify="center"
            alignItems="center">
            <Box className="iconsXtext">
              <FindInPageIcon color="error" style={{ fontSize: 100 }} />
              <Typography color='primary' variant="h5" align="center" className={classes.textXiconSpacing}>CYBER CRIME CASE</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card className={classes.terminal} variant="outlined">
              <CardContent >
                <CardHeader className={classes.terminalIcons}
                  avatar={[
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                  ]}
                />
                <Typography color='primary'>~If a hacker or an APT is your target, how do you catch them? What do you do once you identify the threat? With a combination or state of the art technology and good old-fashioned investigative know-how, CSI Linux is a low budget solution for making your cyber triage and emergency response easier and more streamlined.<TypeWriterEffect text="~" textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1rem" }} typeSpeed={1} cursorColor="#FFFFFF" /></Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* MALWARE ANALYSIS */}
        <Grid container spacing={4} className={classes.contentMargins}>
          <Grid item xs={12} sm={6} container
            direction="column"
            justify="center"
            alignItems="center">
            <Box className="iconsXtext">
              <CodeIcon color="error" style={{ fontSize: 100 }} />
              <Typography color='primary' variant="h5" align="center" className={classes.textXiconSpacing}>MALWARE ANALYSIS</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card className={classes.terminal} variant="outlined">
              <CardContent >
                <CardHeader className={classes.terminalIcons}
                  avatar={[
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                  ]}
                />
                <Typography color='primary'>~You may never need this, but if you come across an application or process that seems malicious and none of your security solutions are catching the activity, CSI Linux has you covered with our SIEM that includes Elasticsearch, Kibana, Zeek IDS, and other incident response tools. Once you identify the suspicious code, you can use Radare 2 and the NSA's Ghidra to investigate further.<TypeWriterEffect text="~" textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1rem" }} typeSpeed={1} cursorColor="#FFFFFF" /></Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* FORENSICS */}
        <Grid container spacing={4} className={classes.contentMargins}>
          <Grid item xs={12} sm={6} container
            direction="column"
            justify="center"
            alignItems="center">
            <Box className="iconsXtext" >
              <SearchIcon color="error" style={{ fontSize: 100 }} />
              <Typography color='primary' variant="h5" align="center" className={classes.textXiconSpacing}>FORENSICS</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card className={classes.terminal} variant="outlined">
              <CardContent >
                <CardHeader className={classes.terminalIcons}
                  avatar={[
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                  ]}
                />
                <Typography color='primary'>~The classic computer forensics also known as “Dead Box” or Postmortem” forensics. Of the dead nothing but good is to be said, and CSI Linux helps you with that. <TypeWriterEffect text="~" textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1rem" }} typeSpeed={1} cursorColor="#FFFFFF" /></Typography>
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
              <Button variant="outlined" size="large" color="primary" onClick={() => handleButtonClick("/contact")} className={classes.button} >Get in touch with us</Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
