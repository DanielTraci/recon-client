
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ReactPlayer from 'react-player/lazy'
import { Grid } from "@material-ui/core";
import Link from '@material-ui/core/Link';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        color: "#FFFFFF",
    },
    tabs: {
        minWidth: 160,
        marginTop: theme.spacing(1)
    },
    cardProps: {
        backgroundColor: "#2D2D2D",
        maxWidth: 280,
        minWidth: 177,
        marginLeft: "-10px"
    },
}));

export default function Tutorials() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="tutorialsTabs">

            <div className={classes.root}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <Tab label="Walkthrough" {...a11yProps(0)} />
                    <Tab label="Installation" {...a11yProps(1)} />
                    <Tab label="OSINT" {...a11yProps(2)} />
                    <Tab label="Dark Web" {...a11yProps(3)} />
                    <Tab label="Encryption" {...a11yProps(4)} />
                    <Tab label="Mobile" {...a11yProps(5)} />
                </Tabs>

                {/* CSI Linux 2021.2 Walkthrough */}
                <TabPanel value={value} index={0}>
                    <Grid spacing={4}
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item xs={12} >
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <div className='player-wrapper'>
                                        <ReactPlayer controls className='react-player' width='100%'
                                            height='100%' url='https://www.youtube.com/watch?v=EvvN1xFJGvg' />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            CSI Linux 2021.2 Walkthrough
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </TabPanel>

                {/* CSI Linux Installation and Administration */}
                <TabPanel value={value} index={1}>
                    <Grid
                        spacing={4}
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="137"
                                        image="./covers/logoCover.png"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            CSI Linux Virtual Appliance <Link href="https://csilinux.com/Documents/Setting%20up%20the%20CSI%20Linux%202021.1%20Virtual%20Appliance.pdf" color="error">install document</Link>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="137"
                                        image="./covers/logoCover.png"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            CSI Linux Bootable Image <Link href="https://csilinux.com/Documents/Setting%20up%20the%20CSI%20Linux%202021.1%20Bootable%20Image.pdf" color="error">install document</Link>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <div className='player-wrapper'>
                                        <ReactPlayer controls className='react-player' width='100%'
                                            height='100%' url='https://www.youtube.com/watch?v=uFDvxlnFE6w' />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            Bootable Drive Creation
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <div className='player-wrapper'>
                                        <ReactPlayer controls className='react-player' width='100%'
                                            height='100%' url='https://www.youtube.com/watch?v=iTuYtutuL_8' />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            Updating the CSI Linux base
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <div className='player-wrapper'>
                                        <ReactPlayer controls className='react-player' width='100%'
                                            height='100%' url='https://www.youtube.com/watch?v=eAWF5tjojW4' />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            Update CSI Linux Tools
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="137"
                                        image="./covers/logoCover.png"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            <Link href="https://csilinux.com/Documents/CSI_Linux_Using_Tor.pdf" color="error">PDF Guide</Link> to setting up CSI Linux to use Tor
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <div className='player-wrapper'>
                                        <ReactPlayer controls className='react-player' width='100%'
                                            height='100%' url='https://www.youtube.com/watch?v=8iDWIHnnpVI' />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            CSI Linux using CSI_TorVPN
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <div className='player-wrapper'>
                                        <ReactPlayer controls className='react-player' width='100%'
                                            height='100%' url='https://www.youtube.com/watch?v=Wm56DbKIvl8' />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            CSI Linux using CSI_Gateway
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <div className='player-wrapper'>
                                        <ReactPlayer controls className='react-player' width='100%'
                                            height='100%' url='https://www.youtube.com/watch?v=XnNIv7dngUQ' />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            CSI Linux Case Management / <Link href="https://csilinux.com/Documents/CSI_Linux_Case_Management.pdf" color="error">PDF</Link>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <div className='player-wrapper'>
                                        <ReactPlayer controls className='react-player' width='100%'
                                            height='100%' url='https://www.youtube.com/watch?v=nc4Ykc6o8uQ' />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            Add an External USB Device
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <div className='player-wrapper'>
                                        <ReactPlayer controls className='react-player' width='100%'
                                            height='100%' url='https://www.youtube.com/watch?v=Xwwi0FAIMis' />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            Using GParted to Partition and Format the External Drive
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </TabPanel>


                {/* OSINT */}
                <TabPanel value={value} index={2}>
                    <Grid
                        spacing={4}
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <div className='player-wrapper'>
                                        <ReactPlayer controls className='react-player' width='100%'
                                            height='100%' url='https://www.youtube.com/watch?v=n_qJv1Qh6QU' />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            DNS Recon Tools with Case Mangement
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <div className='player-wrapper'>
                                        <ReactPlayer controls className='react-player' width='100%'
                                            height='100%' url='https://www.youtube.com/watch?v=Ffhb2GJnPGA' />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            Starting Recon-NG And Adding Keys
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <div className='player-wrapper'>
                                        <ReactPlayer controls className='react-player' width='100%'
                                            height='100%' url='https://www.youtube.com/watch?v=xt4ZaOBSQ9Q' />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            OSINT GitHub User Scraper
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <div className='player-wrapper'>
                                        <ReactPlayer controls className='react-player' width='100%'
                                            height='100%' url='https://www.youtube.com/watch?v=Us55sLVEtRs' />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            Video Downloader
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <div className='player-wrapper'>
                                        <ReactPlayer controls className='react-player' width='100%'
                                            height='100%' url='https://www.youtube.com/watch?v=E0Xz6w1YXbE' />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            Geolocation tool
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </TabPanel>


                {/* Dark Web */}
                <TabPanel value={value} index={3}>
                    <Grid
                        spacing={4}
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item xs={12} sm={6} >
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <div className='player-wrapper'>
                                        <ReactPlayer controls className='react-player' width='100%'
                                            height='100%' url='https://www.youtube.com/watch?v=aXc29FeZDtE' />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            Bitcoin Wallet Tracing with CSI Linux
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} >
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <div className='player-wrapper'>
                                        <ReactPlayer controls className='react-player' width='100%'
                                            height='100%' url='https://www.youtube.com/watch?v=vpdyMmizMUc' />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            Tor Dark Web OnionSearch w/ CSI Linux
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </TabPanel>


                {/*    Encryption */}
                <TabPanel value={value} index={4}>
                    <Grid
                        spacing={4}
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item xs={12} sm={6} >
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <div className='player-wrapper'>
                                        <ReactPlayer controls className='react-player' width='100%'
                                            height='100%' url='https://www.youtube.com/watch?v=C20sFIkEblM' />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            Cracking Zip Files
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} >
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <div className='player-wrapper'>
                                        <ReactPlayer controls className='react-player' width='100%'
                                            height='100%' url='https://www.youtube.com/watch?v=Ffhb2GJnPGA' />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            Start Recon-NG & Add Keys
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </TabPanel>


                {/* Mobile */}
                <TabPanel value={value} index={5}>
                    <Grid
                        spacing={4}
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item xs={12} sm={6} >
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <div className='player-wrapper'>
                                        <ReactPlayer controls className='react-player' width='100%'
                                            height='100%' url='https://www.youtube.com/watch?v=-UuxFVCEw3c' />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            Anbox - Android in a Box
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        
                        <Grid item xs={12} sm={6}>
                            <Card className={classes.cardProps}>
                                <CardActionArea>
                                    <div className='player-wrapper'>
                                        <ReactPlayer controls className='react-player' width='100%'
                                            height='100%' url='https://www.youtube.com/watch?v=0yPEmXYxhCU' />
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            iDevice Logical Imaging
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                    </Grid>
                </TabPanel>
            </div>
        </div>
    );
}
