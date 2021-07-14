import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactPlayer from 'react-player/youtube'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Link from '@material-ui/core/Link';
import TypeWriterEffect from 'react-typewriter-effect';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


// styling
// the page has three sections with content - header, sectionTwo (which is the tab with CSI downloads)
const useStyles = makeStyles((theme) => ({
    header: {
        position: "relative",
        marginTop: theme.spacing(10),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    subheader: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
    },
    appbar: {
        backgroundColor: "#2D2D2D",
        width: "100%",
        marginBottom: theme.spacing(5),
    },
    sectionTitles: {
        display: "flex",
        justifyContent: "center",
        marginBottom: theme.spacing(5),
    },
    supportCSI: {
        marginTop: theme.spacing(5),
    },
    contentMargins: {
        marginBottom: theme.spacing(5),
    },
    terminal: {
        backgroundColor: "#2D2D2D",
        marginTop: theme.spacing(1),
        borderColor: "#C01F24"
    },
    terminalIcons: {
        margin: "0px",
        padding: "0px",
    },
    buttons: {
        '& > *': {
            margin: theme.spacing(1),
            marginTop: theme.spacing(5),
        },
    },
    tabsText: {
        color: "#FFFFFF",
    },
    cardProps: {
        backgroundColor: "#2D2D2D",
        maxWidth: 560,
    },
}));

export default function Download(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //goes to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div>
            <Grid container spacing={4}
                direction="row"
                justify="flex-start"
                alignItems="flex-end"
                className={classes.header}>
                <Grid item xs={12} sm={6} >
                    <div>
                        <Typography variant="h3" color="primary" gutterBottom>
                            Download CSI Linux
                        </Typography>
                        <Typography variant="h5" color="primary" >
                            2021.2 has been released!
                        </Typography>
                        <Typography variant="h6" color="primary" paragraph>
                            Default username: csi | Default password: csi
                        </Typography>
                        <Typography variant="h5" color="primary" paragraph>
                            Brief overview
                        </Typography>
                        <Typography variant="body1" color="primary" paragraph>
                            CSI Linux 2021.2 has many updated tools, features, and additions. To install CSI Linux Tools updates type "powerup" in the terminal window and press enter.
                        </Typography>
                        <Typography variant="body1" color="primary" paragraph>
                            When turned on, the CSI_TorVPN encapsulates all traffic through Tor similar to how Tails works. The CSI_Gateway app is now pointing to at a Whonix gateway VM. This gives you two different options when using the Virtual Appliance. If you are using the bootable version, you can only use the CSI_TorVPN.
                        </Typography>
                        <Typography variant="body1" color="primary" paragraph>
                            You can also add a VPN or Tor gateway to your network router for an external network layer of security.
                        </Typography>
                        <Typography variant="body1" color="primary">
                            The CSI Linux SIEM has been separated and is now separate from CSI Linux. MISP, OTX, Malcolm, Moloch, Elasticsearch, Kibana, Logstash, Zeek, and others have been combined into this growing network monitoring and forensic server environment. This will be able to be downloaded onto CSI Linux or used on another system on the network.
                        </Typography>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Card className={classes.cardProps} >
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
                            Subscribe to our publications and news
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box display="flex" justifyContent="center">
                        <Button variant="outlined" size="large" color="primary" href="https://comms.informationwarfarecenter.com/?p=subscribe&id=1">Subscribe to newsletter</Button>
                    </Box>
                </Grid>
            </Grid>

            <div >
                <AppBar position="static" className={classes.appbar}>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
                        centered className={classes.tabsText} variant="fullWidth">
                        <Tab label="Virtual Appliance" {...a11yProps(0)} />
                        <Tab label="Bootable Image" {...a11yProps(1)} />
                        <Tab label="CSI SIEM" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>


                {/* VIRTUAL */}
                <TabPanel value={value} index={0} >
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography color='primary' variant="h4" align="center" className={classes.sectionTitles}>CSI Linux 2021.2 Virtual Appliance</Typography>
                        </Grid>

                        <Grid container spacing={4} className={classes.contentMargins}>
                            <Grid item xs={12} sm={6}>
                                <Box>
                                    <Typography color='primary' variant="h6" >CSI Linux 2021.2 (last version) has been packaged in a Virtual Appliance OVA. You must install <Link href="https://www.virtualbox.org/wiki/Downloads" color="error"> VirtualBox</Link> first, install the VirtualBox Extension Pack, then run the downloaded OVA file. This will take some time to build. Installation document can be found <Link href="https://csilinux.com/Documents/Setting%20up%20the%20CSI%20Linux%202021.1%20Virtual%20Appliance.pdf" color="error">here</Link>.
                                    </Typography>
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
                                        <TypeWriterEffect text="~CSI Linux 2021.2 Virtual Appliance minimum requirements: 6+ GB of RAM, 64+ GB free disk space (suggest more),
                                                2+ Cores, VirtualBox, internet access" textStyle={{ fontFamily: "'Inconsolata', monospace", fontWeight: 400, fontSize: "1rem", color: "#FFFFFF" }} typeSpeed={1} cursorColor="#FFFFFF" />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography color='primary' variant="h4" align="center" >Download</Typography>
                            <Typography color='primary' variant="subtitle2" align="center">MD5 (.ova)
                                e9815f65cfd7f99d17f1c3f68b94486c</Typography>
                            <Typography color='primary' variant="body2" align="center">Please consider seeding after downloaded</Typography>
                        </Grid>

                        <Grid item xs={12} className={classes.buttons} container
                            direction="row"
                            justify="center"
                            alignItems="center">
                            <Button variant="outlined" color="primary" href="https://csilinux.com/downloads/CSI_Linux_2021.2.ova.torrent">Torrent File</Button>
                            <Button variant="outlined" color="primary" href="magnet:?xt=urn:btih:9713DDD8B8B5AEAD0A04D8B79F22C0FB09FEAF1D&dn=CSI%20Linux%202021.2.ova&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=http%3a%2f%2ft.nyaatracker.com%3a80%2fannounce&tr=udp%3a%2f%2fzephir.monocul.us%3a6969%2fannounce&tr=http%3a%2f%2fshare.camoe.cn%3a8080%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2ftracker.mg64.net%3a6881%2fannounce&tr=http%3a%2f%2ftracker.dutchtracking.nl%3a80%2fannounce&tr=http%3a%2f%2ftracker.kicks-ass.net%3a80%2fannounce&tr=http%3a%2f%2ftracker.edoardocolombo.eu%3a6969%2fannounce&tr=http%3a%2f%2ftracker.ex.ua%3a80%2fannounce&tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce">Magnet Link</Button>
                            <Button variant="outlined" color="primary" href="https://www.dropbox.com/s/ua0dgwc7l86r7jf/CSI%20Linux%202021.2.ova?dl=0">DROPBOX</Button>
                            <Button variant="outlined" color="primary" href="https://csilinux.com/downloads/CSI%20Linux%202021.2.ova">Direct Download</Button>
                        </Grid>

                        <Grid container spacing={4} className={classes.supportCSI}
                            direction="row"
                            justifyContent="center"
                            alignItems="flex-start">
                            <Grid item xs={12} sm={7}>
                                <Box display="flex" justifyContent="center">
                                    <Typography variant="h4" color="primary" align="center">
                                        Support CSI Linux project
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <Box display="flex" justifyContent="center">
                                    <Button variant="outlined" size="large" color="primary" href="https://csilinux.creator-spring.com/">FEATURED PRODUCTS</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </TabPanel>

                {/* BOOTABLE */}
                <TabPanel value={value} index={1}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography color='primary' variant="h4" align="center" className={classes.sectionTitles}>CSI Linux 2021.2 Bootable Image</Typography>
                        </Grid>
                        <Grid container spacing={4} className={classes.contentMargins}>
                            <Grid item xs={12} sm={6}>
                                <Box>
                                    <Typography color='primary' variant="h6" >CSI Linux 2021.2 (last version) has been packaged as a forensic RAW (.dd) copy and HDDRawCopy to use so you can make a bootable drive. This will take some time to build. This is NOT a .ISO file. It is a forensic copy in DD format. Read the <Link href="https://csilinux.com/Documents/Setting%20up%20the%20CSI%20Linux%202021.1%20Bootable%20Image.pdf" color="error">instructions</Link> before you download.
                                    </Typography>
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
                                        <TypeWriterEffect text="~CSI Linux 2021.2 Bootable Image minimum requirements: 4+ GB of RAM, 80+ GB Hard drive for download, 64+ GB Hard drive or USB, 2+ Cores, Imaging tool (HDDRawCopy is included), internet access" textStyle={{ fontFamily: "'Inconsolata', monospace", fontWeight: 400, fontSize: "1rem", color: "#FFFFFF" }} typeSpeed={1} cursorColor="#FFFFFF" />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography color='primary' variant="h4" align="center">Download</Typography>
                            <Typography color='primary' variant="subtitle2" align="center">MD5 (.7z): 697a960453e9f5c8a850ff2fe33ecde6</Typography>
                            <Typography color='primary' variant="body2" align="center">Please consider seeding after downloaded</Typography>
                        </Grid>

                        <Grid xs={12} className={classes.buttons} container
                            direction="row"
                            justify="center"
                            alignItems="center">
                            <Button variant="outlined" color="primary" href="https://csilinux.com/downloads/CSI_Linux_2021.2_Bootable.torrent">Torrent File</Button>
                            <Button variant="outlined" color="primary" href="magnet:?xt=urn:btih:D6DA8DED882C5CF64AAD9EE1E07ACDC5F37F5C89&dn=CSI_Linux_2021.2_Bootable.7z&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=http%3a%2f%2ft.nyaatracker.com%3a80%2fannounce&tr=udp%3a%2f%2fzephir.monocul.us%3a6969%2fannounce&tr=http%3a%2f%2fshare.camoe.cn%3a8080%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2ftracker.kicks-ass.net%3a80%2fannounce&tr=http%3a%2f%2ftracker.ex.ua%3a80%2fannounce&tr=http%3a%2f%2ftracker.mg64.net%3a6881%2fannounce&tr=http%3a%2f%2ftracker.edoardocolombo.eu%3a6969%2fannounce&tr=http%3a%2f%2ftracker.dutchtracking.nl%3a80%2fannounce&tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce">Magnet Link</Button>
                            <Button variant="outlined" color="primary" href="https://www.dropbox.com/s/vntxhbjqidfi31a/CSI_Linux_2021.2_Bootable.7z?dl=0">DROPBOX</Button>
                            <Button variant="outlined" color="primary" href="https://csilinux.com/downloads/CSI_Linux_2021.2_Bootable.7z">Direct Download</Button>
                        </Grid>

                        <Grid container spacing={4} className={classes.supportCSI}
                            direction="row"
                            justifyContent="center"
                            alignItems="flex-start">
                            <Grid item xs={12} sm={7}>
                                <Box display="flex" justifyContent="center">
                                    <Typography variant="h4" color="primary" align="center">
                                        Support CSI Linux project
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <Box display="flex" justifyContent="center">
                                    <Button variant="outlined" size="large" color="primary" href="https://csilinux.creator-spring.com/">FEATURED PRODUCTS</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </TabPanel>

                {/* SIEM */}
                <TabPanel value={value} index={2}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography color='primary' variant="h4" align="center" className={classes.sectionTitles}>CSI Linux 2021.1 SIEM</Typography>
                        </Grid>

                        <Grid container spacing={4} className={classes.contentMargins}>
                            <Grid item xs={12} sm={6}>
                                <Box>
                                    <Typography color='primary' variant="h6" >CSI Linux 2021.1 should be able to be installed on CSI Linux or on any other system on the network. CSI SIEM has been separated to allow you to engineer your environment anyway you want. The instructions are <Link href="https://github.com/Information-Warfare-Center/CSI-SIEM/blob/master/README.md" color="error">here</Link>.
                                    </Typography>
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
                                        <TypeWriterEffect text="~CSI Linux 2021.1 SIEM minimum requirements: 8+ GB of RAM, 200+ GB free space (logs get big), 2+ Cores" textStyle={{ fontFamily: "'Inconsolata', monospace", fontWeight: 400, fontSize: "1rem", color: "#FFFFFF" }} typeSpeed={1} cursorColor="#FFFFFF" />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color='primary' variant="h4" align="center">Download</Typography>
                            <Typography color='primary' variant="body2" align="center">Follow the link and the instructions</Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.buttons} container
                            direction="row"
                            justify="center"
                            alignItems="center">
                            <Button variant="outlined" color="primary" href="https://github.com/Information-Warfare-Center/CSI-SIEM">Github</Button>
                        </Grid>
                        <Grid container spacing={4} className={classes.supportCSI}
                            direction="row"
                            justifyContent="center"
                            alignItems="flex-start">
                            <Grid item xs={12} sm={7}>
                                <Box display="flex" justifyContent="center">
                                    <Typography variant="h4" color="primary" align="center">
                                        Support CSI Linux project
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <Box display="flex" justifyContent="center">
                                    <Button variant="outlined" size="large" color="primary" href="https://csilinux.creator-spring.com/">FEATURED PRODUCTS</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </TabPanel>
            </div>
        </div>
    );
}
