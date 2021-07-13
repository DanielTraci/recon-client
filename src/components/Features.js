import React from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import CardActionArea from '@material-ui/core/CardActionArea';
import ReactPlayer from 'react-player/youtube'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  header: {
    position: "relative",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  subheader: {
    marginBottom: theme.spacing(10),
},
  accordionRack: {
    width: 'auto',
    background: "#2D2D2D",
    marginBottom: theme.spacing(1),
    borderColor: "#0000ff"
  },
  cardProps: {
    backgroundColor: "#2D2D2D",
    maxWidth: 560,
  },
  input: {
    color: "#FFFFFF"
  },
  button: {
    marginTop: theme.spacing(2)
  },
  searchBar: {
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
}));


export default function Features(props) {
  const classes = useStyles();
  const { allFeatures, customFeatures, onSearch } = props
  const { history } = props
  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  //goes to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div >
      <Grid container spacing={4}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className={classes.header}>

        {/* Header text */}
        <Grid item xs={12} sm={6} >
          <Typography variant="h3" color="primary" gutterBottom>
            CSI Linux features
          </Typography>
          <Typography variant="h5" color="primary" paragraph>
            "We've integrated over 175 tools in CSI Linux. It's a DFIR 'theme park' for the cyber security industry"
          </Typography>
          <Button variant="outlined" size="large" color="primary" onClick={() => handleButtonClick("/contact")} className={classes.button} >Send your feedback</Button>
        </Grid>

        {/* Video */}
        <Grid item xs={12} sm={6}>
          <Card className={classes.cardProps}>
            <CardActionArea>
              <div className='player-wrapper'>
                <ReactPlayer controls className='react-player' width='100%'
                  height='100%' url='https://www.youtube.com/watch?v=EvvN1xFJGvg' />
              </div>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={4} className={classes.subheader}
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid item xs={12} sm={8}>
                    <Box display="flex" justifyContent="center" >
                        <Typography variant="h4" color="primary" >
                        Get the latest news about CSI Linux products
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box display="flex" justifyContent="center">                        
                        <Button variant="outlined" size="large" color="primary" href="https://comms.informationwarfarecenter.com/?p=subscribe&id=1">Subscribe to newsletter</Button>
                    </Box>
                </Grid>
            </Grid>

      {/* Tools accordion */}
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center">
        <Grid item xs={12} sm={6}>
          {/* All tools */}
          <Accordion className={classes.accordionRack} variant="outlined">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="secondary" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography color="primary" variant="h6">All integrated tools</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography color="primary" variant="body1">
                  Search for a specific tool...
                </Typography>
                <TextField onChange={onSearch} className={classes.searchBar} id="outlined-basic" variant="outlined" fullWidth InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="error" />
                    </InputAdornment>
                  ), className: classes.input
                }} />
                <Typography variant="body1" color="primary">
                  {
                    allFeatures.map((feature, index) => {
                      return (
                        <List key={index}>
                          <ListItem >
                            <ListItemIcon>
                              <SettingsApplicationsIcon color="error" />
                            </ListItemIcon>
                            <ListItemText
                              primary={feature.name}
                            />
                          </ListItem>
                        </List>
                      )
                    })
                  }
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* Custom Features */}
          <Accordion className={classes.accordionRack} variant="outlined">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="secondary" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography color="primary" variant="h6">Custom features</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="primary">
                {
                  customFeatures.map((feature, index) => {
                    return (
                      <List key={index}>
                        <ListItem >
                          <ListItemIcon>
                            <SettingsApplicationsIcon color="error" />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature.name}
                          />
                        </ListItem>
                      </List>
                    )
                  })
                }
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Licensed tools */}
          <Accordion className={classes.accordionRack} variant="outlined">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="secondary" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography color="primary" variant="h6">Licensed tools that you may need to purchase</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="primary">
                <List >
                  <ListItem>
                    <ListItemIcon>
                      <SettingsApplicationsIcon color="error" />
                    </ListItemIcon>
                    <ListItemText
                      primary="CSI Tools"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <SettingsApplicationsIcon color="error" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Hunchly 2"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <SettingsApplicationsIcon color="error" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Maltego"
                    />
                  </ListItem>
                </List>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  );
}
