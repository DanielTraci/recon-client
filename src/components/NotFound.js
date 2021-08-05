//404 Not Found Page//
import React from 'react';
import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import TypeWriterEffect from 'react-typewriter-effect';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
  terminal: {
    backgroundColor: "#2D2D2D",
    borderColor: "#C01F24"
  },
  terminalIcons: {
    margin: "0px",
    padding: "0px",
  },
  header: {
    position: "relative",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
},
}));

export default function NotFound() {
  const classes = useStyles();

    //goes to the top of the page
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <div>
      <Grid container xs={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.header}>
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
              <Typography color='primary'><TypeWriterEffect text="~404 not found! Hold on, we need to put on a special purpose black hoodie to build this page. We would appreciate your help!" textStyle={{ fontFamily: "'Inconsolata', monospace", fontWeight: 400, fontSize: "1.5rem" }} typeSpeed={20} cursorColor="#FFFFFF" /></Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
