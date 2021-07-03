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
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CodeIcon from '@material-ui/icons/Code';
import SearchIcon from '@material-ui/icons/Search';
import CardMedia from '@material-ui/core/CardMedia';
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
  titles: {
    display: "flex",
    justifyContent: "center",
  },
  animatedText: {
    margin: "0px"
  },
  terminal: {
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

  //---------------
  header: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(10),
    
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "600px"
    
    
    
  },
  headerContent: {
    position: "relative",
    padding: theme.spacing(4),
    paddingTop: "100px"

  }


}));

//className="header"   className={classes.sectionOne}
export default function FullWidthGrid() {
  const classes = useStyles();
  /*   const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs")); */

  return (
    <div className={classes.root}>

      <Container maxWidth className={classes.header}>
        <Grid container >
        <Grid item xs={12} sm={6} >
              <Card className={classes.terminal}>
                <CardContent >
                  <CardHeader className={classes.terminalIcons}
                    avatar={[
                      <FiberManualRecordIcon color="error" />,
                      <FiberManualRecordIcon color="error" />,
                      <FiberManualRecordIcon color="error" />,
                    ]}
                  />
                  <Typography color='primary'><TypeWriterEffect text="~CSI Linux is a focused Linux distribution for digital forensics. We developed an open-source 'theme park' for our industry, where we included tons of capabilities for investigations, analysis and response!" textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1.5rem" }} typeSpeed={30} cursorColor="#FFFFFF" /></Typography>
                </CardContent>
              </Card>
              </Grid>



          <Grid item xs={12} sm={6}>
            <div className={classes.headerContent}>
              <Card className={classes.terminal}>
                <CardContent >
                  <CardHeader className={classes.terminalIcons}
                    avatar={[
                      <FiberManualRecordIcon color="error" />,
                      <FiberManualRecordIcon color="error" />,
                      <FiberManualRecordIcon color="error" />,
                    ]}
                  />
                  <Typography color='primary'><TypeWriterEffect text="~new CSI Linux 2021.2 is now available" textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1.5rem" }} typeSpeed={50} cursorColor="#FFFFFF" /></Typography>
                  
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Container>



      {/*       <Grid item xs={12} sm={6} >
        
      </Grid>
 */}
      <Grid className={classes.gridContainer}>
        <Grid container spacing={4}>

           
          {/* section2--------------------- */}

          <Grid item xs={12} >
            <Typography color='primary' variant="h4" align="center" className={classes.titles} >Unlock your DFIR superpowers</Typography>
          </Grid>

          <Grid item xs={12} sm={6} container
            direction="column"
            justify="space-evenly"
            alignItems="center">
            <Box className="iconsXtext">
              <FindInPageIcon color="error" style={{ fontSize: 50 }} />
              <Typography color='primary' variant="h6" >ONLINE INVESTIGATIONS</Typography>
            </Box>
            <Box className="iconsXtext">
              <SyncProblemIcon color="error" style={{ fontSize: 50 }} />
              <Typography color='primary' variant="h6" >INCIDENT RESPONSE</Typography>
            </Box>
            <Box className="iconsXtext">
              <DeveloperModeIcon color="error" style={{ fontSize: 50 }} />
              <Typography color='primary' variant="h6" >MALWARE ANALYSIS</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card className={classes.terminal}>
              <CardContent >
                <CardHeader className={classes.terminalIcons}
                  avatar={[
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                  ]}
                />
                <Typography color='primary'>~We believe that having the right tools to do the job is critical for forensic investigators. That’s why we have created a multi-purpose, all inclusive, investigation environment starting with online investigations (OSINT, social media, domain recon, and dark web) to offline Digital Forensics and Incident Response to Malware Analysis and more. This is an ideal environment for both training and real world investigations. What makes this different than the hundreds of other options out there? Well... CSI Linux was developed by Computer Forensics, Incident Response, and Competitive Intelligence professionals to meet the current needs for their clients, government agencies, and the industry.<TypeWriterEffect text="~" textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1rem" }} typeSpeed={1} cursorColor="#FFFFFF" /></Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* section3---------------------------- */}

          <Grid item xs={12}>
            <Typography color='primary' variant="h4" align="center" className={classes.titles} >4 DFIR CHALLENGES CSI LINUX SOLVES</Typography>
          </Grid>

          <Grid item xs={12} sm={6} container
            direction="column"
            justify="center"
            alignItems="center">
            <Box className="iconsXtext">
              <QueryBuilderIcon color="error" style={{ fontSize: 100 }} />
              <Typography color='primary' variant="h5" align="center">MINIMIZE THE TIME AND EFFORT</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card className={classes.terminal}>
              <CardContent >
                <CardHeader className={classes.terminalIcons}
                  avatar={[
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                  ]}
                />
                <Typography color='primary'>~There is a plethora of information on the Internet and a LOT of it is useful during the reconnaissance and Open Source Intelligence (OSINT) analysis. Tracking a suspect? Want to know what a future hacker will know about you? Need to link user accounts to prove collusion? These are some of the many challenges many of us face every day. We are making this easier and, in many cases, cheaper than ever before.<TypeWriterEffect text="~" textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1rem" }} typeSpeed={1} cursorColor="#FFFFFF" /></Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} container
            direction="column"
            justify="center"
            alignItems="center">
            <Box className="iconsXtext">
              <FindInPageIcon color="error" style={{ fontSize: 100 }} />
              <Typography color='primary' variant="h5" align="center">CYBER CRIME CASE</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card className={classes.terminal}>
              <CardContent >
                <CardHeader className={classes.terminalIcons}
                  avatar={[
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                  ]}
                />
                <Typography color='primary'>~If a hacker or even an Advanced Persistent Threat (APT) is your target, how do you catch them? What do you do once you identify the threat? Welcome to the world of incident response and network forensics. With a combination or state of the art technology and good old-fashioned investigative know-how, we are working on a low budget solution for making your cyber triage and emergency response easier and more streamlined.<TypeWriterEffect text="~" textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1rem" }} typeSpeed={1} cursorColor="#FFFFFF" /></Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} container
            direction="column"
            justify="center"
            alignItems="center">
            <Box className="iconsXtext">
              <CodeIcon color="error" style={{ fontSize: 100 }} />
              <Typography color='primary' variant="h5" align="center">MALWARE ANALYSIS</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.terminal}>
              <CardContent >
                <CardHeader className={classes.terminalIcons}
                  avatar={[
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                  ]}
                />
                <Typography color='primary'>~You may never need this, but if you come across an application or process that seems malicious and none of your security solutions are catching the activity, we have you covered with our SIEM that includes Elasticsearch, Kibana, Zeek IDS, and other incident response tools. Once you identify the suspicious code, you can use Radare 2 and the NSA released tool Ghidra to investigate further.<TypeWriterEffect text="~ " textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1rem" }} typeSpeed={1} cursorColor="#FFFFFF" /></Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} container
            direction="column"
            justify="center"
            alignItems="center">
            <Box className="iconsXtext" >
              <SearchIcon color="error" style={{ fontSize: 100 }} />
              <Typography color='primary' variant="h5" align="center">FORENSICS</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.terminal}>
              <CardContent >
                <CardHeader className={classes.terminalIcons}
                  avatar={[
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                    <FiberManualRecordIcon color="error" />,
                  ]}
                />
                <Typography color='primary'>~The classic computer forensics also known as “Dead Box” or Postmortem” forensics. Of the dead nothing but good is to be said, and CSI Linux helps you with that. <TypeWriterEffect text="~ " textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1rem" }} typeSpeed={1} cursorColor="#FFFFFF" /></Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

    </div>
  );
}




