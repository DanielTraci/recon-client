//404 Not Found Page//
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import TypeWriterEffect from 'react-typewriter-effect';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
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
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

  },
  headerContent: {
    position: "relative",
    padding: theme.spacing(4),
    paddingTop: "100px"
  }
}));

export default function NotFound() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth className={classes.header}>
        <Grid container spacing={4}
          direction="row"
          justify="center"
          alignItems="center" >
          <Grid item xs={12} sm={6} >
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
                  <Typography color='primary'><TypeWriterEffect text="~404 not found! Hold on, we need to put on a special purpose black hoodie to build this page. Got one? Contact us asap!" textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1.5rem" }} typeSpeed={20} cursorColor="#FFFFFF" /></Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}




