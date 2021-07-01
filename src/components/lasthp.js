import React from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import SyncProblemIcon from '@material-ui/icons/SyncProblem';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import Box from '@material-ui/core/Box';
import { useEffect, useRef } from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    paddingLeft: "50px",
    paddingRight: "50px"
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
    paddingTop: "200px ",
    paddingBottom: "300px"
    /* display: "flex",
    direction: "row",
    alignItems: "center", //wprks
    justifyContent: "space-around" */

  },
  sectionTwo: {
    paddingTop: "350px",
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
  }

}));

//className="header"   className={classes.sectionOne}
export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid className={classes.gridContainer}>
        <Grid container spacing={4}>

          {/* SECTIONONE/}
      
          {/* <Grid container className={classes.sectionOne}> doesnt work*/}
          <Grid container className={classes.sectionOne}>
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
              <Card className={classes.terminal}>
                <CardContent >
                  <CardHeader className={classes.terminalIcons}
                    avatar={[
                      <FiberManualRecordIcon color="error" />,
                      <FiberManualRecordIcon color="error" />,
                      <FiberManualRecordIcon color="error" />,
                    ]}
                  />
                  <Typography color='primary'><TypeWriterEffect text="~new CSI Linux 2021.2 is available" textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1.5rem" }} typeSpeed={50} cursorColor="#FFFFFF" /></Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>




          {/* section2--------------------- */}
          <Grid container className={classes.sectionTwo}>
            <Grid item xs={12} >
              <Typography color='primary' variant="h5" className={classes.titles} >Unlock your DFIR superpowers with CSI LINUX</Typography>
            </Grid>
          </Grid>


          <Grid item xs={12} sm={6}>
            {/* direction="column" justify="space-between" alignItems="center" className={classes.iconsAlign}*/}

            <FindInPageIcon color="error" />
            <Typography color='primary' variant="body" >ONLINE INVESTIGATIONS</Typography>

            <SyncProblemIcon color="error" />
            <Typography color='primary' variant="body" >INCIDENT RESPONSE</Typography>

            <DeveloperModeIcon color="error" />
            <Typography color='primary' variant="body" >MALWARE ANALYSIS</Typography>

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
            <Typography color='primary' variant="h5" className={classes.titles} >4 DFIR CHALLENGES CSI LINUX SOLVES</Typography>
          </Grid>

          <Grid item xs={12} sm={6} >
            <FindInPageIcon />
            <Typography color='primary' variant="body" >MINIMIZE THE TIME AND EFFORT</Typography>
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
          <Grid item xs={12} sm={6}>
            <FindInPageIcon />
            <Typography color='primary' variant="body" >CYBER CRIME CASE</Typography>
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
          <Grid item xs={12} sm={6}>
            <FindInPageIcon />
            <Typography color='primary' variant="body" >MALWARE ANALYSIS</Typography>
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
          <Grid item xs={12} sm={6}>
            <FindInPageIcon />
            <Typography color='primary' variant="body" >FORENSICS</Typography>
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
                <Typography color='primary'>~The classic computer forensics also known as “Dead Box” or Postmortem” forensics. Of the dead nothing but good is to be said, and CSI Linux helps you with that.<TypeWriterEffect text="~ " textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1rem" }} typeSpeed={1} cursorColor="#FFFFFF" /></Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}




