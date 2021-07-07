import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
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
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  accordion: {
    width: 'auto',
    background: "#2D2D2D"
  },
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
    paddingTop: "80px"
  },
  cardProps: {
    backgroundColor: "#2D2D2D",
    maxWidth: 550,
    marginTop: theme.spacing(14),
    position: "relative"
  },
  input: {
    color: "#FFFFFF"
  },
  button: {
    marginBottom: theme.spacing(2)
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

  return (
    <div >

      <Container maxWidth className={classes.header}>
        <Grid container spacing={4}
          direction="row"
          justify="center"
          alignItems="flex-start" >

          {/* Header */}
          <Grid item xs={12} sm={6} >
            <div className={classes.headerContent}>
              <Typography variant="h3" color="primary" gutterBottom>
                Features
              </Typography>
              <Typography variant="h5" color="primary" paragraph>
                "We've integrated over 175 tools in CSI Linux. It's a DFIR 'theme park' for the cyber security industry"
              </Typography>
              <Button variant="outlined" size="large" color="primary" onClick={() => handleButtonClick("/contact")} className={classes.button} >Contact Us for suggestions</Button>

              {/* Custom Features */}
              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="primary" />}
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
                          <List >
                            <ListItem>
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

              {/* All tools */}
              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="primary" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography color="primary" variant="h6">All integrated tools</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
           <Typography color="primary">
           Search for a specific tool...
           </Typography>
                  <TextField onChange={onSearch} className={classes.searchBar} id="outlined-basic" variant="outlined" fullWidth InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon color="error"/>
                          </InputAdornment>
                        ), className: classes.input
                      }}/> 
                    <Typography variant="body2" color="primary">
                      {
                        allFeatures.map((feature, index) => {
                          return (
                            <List >
                              <ListItem>
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

              {/* Licensed tools */}
              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="primary" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography color="primary" variant="h6">Licensed tools that you may need to purchase</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body" color="primary">
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
            </div>
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
      </Container>
    </div>
  );
}
