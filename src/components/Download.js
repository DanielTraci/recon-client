import React from 'react';
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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    sectionOne: {
        height: "600px",
/*         backgroundImage: `url('./covers/largelogo.png')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "320px",
        position: "relative", */
    },

    appbar: {
        backgroundColor: "#FFFFFF",

    },

    terminal: {
        backgroundColor: "#2D2D2D",
    },
    terminalIcons: {
        margin: "0px",
        padding: "0px",
    },
    buttons: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    tabsText: {
        textColor: "#FFFFFF"
    }

}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className={classes.root}>

{/* ---<div className={classes.sectionOne}>-------delete--------- */}

            <Grid item xs={12} sm={6} >
                <Card className={classes.terminal} >
                    <CardContent >
                        <CardHeader className={classes.terminalIcons}
                            avatar={[
                                <FiberManualRecordIcon color="error" />,
                                <FiberManualRecordIcon color="error" />,
                                <FiberManualRecordIcon color="error" />,
                            ]}
                        />
                        <Typography color='primary'><TypeWriterEffect text="~CSI Linux is a focused Linux distribution for digital forensics. We developed an open-source 'theme park' for our industry, where we included tons of capabilities for investigations, an open-source 'theme park' for our industry, where we included tons of capabilities for investigationan open-source 'theme park' for our industry, where we included tons of capabilities for investigationan open-source 'theme park' for our industry, where we included tons of capabilities for investigationan open-source 'theme park' for our industry, where we included tons of capabilities for investigationanalysis and response!" textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1.5rem" }} typeSpeed={1} cursorColor="#FFFFFF" /></Typography>
                    </CardContent>
                </Card>
            </Grid>

{/* ------ </div>--delete----------- */}

            <div >
                <AppBar position="static" className={classes.appbar}>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered textColor="secondary" >
                        <Tab label="Virtual Appliance" {...a11yProps(0)} />
                        <Tab label="Bootable Image" {...a11yProps(1)} />
                        <Tab label="CSI SIEM" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} >
                    <Typography color='primary' variant="h4" align="center">CSI Linux 2021.2 Virtual Appliance</Typography>
                    <Grid container spacing={4}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start">
                        <Grid item xs={12} sm={6}>
                            <Box>
                                <Typography color='primary' variant="h6" >CSI Linux 2021.2 (last version) has been packaged in a Virtual Appliance OVA. You must install <Link href="https://www.virtualbox.org/wiki/Downloads" color="secondary"> VirtualBox</Link> first, install the VirtualBox Extension Pack, then run the downloaded OVA file. This will take some time to build. Installation document can be found <Link href="https://csilinux.com/Documents/Setting%20up%20the%20CSI%20Linux%202021.1%20Virtual%20Appliance.pdf" color="secondary">here</Link>.
                                </Typography>
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
                                    <TypeWriterEffect text="~CSI Linux 2021.2 Virtual Appliance minimum requirements: 6+ GB of RAM, 64+ GB free disk space (suggest more),
                                                2+ Cores, VirtualBox, internet access" textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1rem", color: "#FFFFFF" }} typeSpeed={1} cursorColor="#FFFFFF" />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Typography color='primary' variant="h4" align="center">Download</Typography>
                    <Typography color='primary' variant="subtitle2" align="center">MD5 (.ova)
                        e9815f65cfd7f99d17f1c3f68b94486c</Typography>
                    <Typography color='primary' variant="body2" align="center">Please consider seeding after downloaded</Typography>

                    <Grid item xs={12} className={classes.buttons} container
                        direction="row"
                        justify="center"
                        alignItems="center">

                        <Button variant="outlined" color="primary" href="https://csilinux.com/downloads/CSI_Linux_2021.2.ova.torrent">Torrent File</Button>
                        <Button variant="outlined" color="primary" href="magnet:?xt=urn:btih:9713DDD8B8B5AEAD0A04D8B79F22C0FB09FEAF1D&dn=CSI%20Linux%202021.2.ova&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=http%3a%2f%2ft.nyaatracker.com%3a80%2fannounce&tr=udp%3a%2f%2fzephir.monocul.us%3a6969%2fannounce&tr=http%3a%2f%2fshare.camoe.cn%3a8080%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2ftracker.mg64.net%3a6881%2fannounce&tr=http%3a%2f%2ftracker.dutchtracking.nl%3a80%2fannounce&tr=http%3a%2f%2ftracker.kicks-ass.net%3a80%2fannounce&tr=http%3a%2f%2ftracker.edoardocolombo.eu%3a6969%2fannounce&tr=http%3a%2f%2ftracker.ex.ua%3a80%2fannounce&tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce">Magnet Link</Button>
                        <Button variant="outlined" color="primary" href="https://www.dropbox.com/s/ua0dgwc7l86r7jf/CSI%20Linux%202021.2.ova?dl=0">DROPBOX</Button>
                        <Button variant="outlined" color="primary" href="https://csilinux.com/downloads/CSI%20Linux%202021.2.ova">Direct Download</Button>

                    </Grid>
                </TabPanel>



                <TabPanel value={value} index={1}>
                    <Typography color='primary' variant="h4" align="center">CSI Linux 2021.2 Bootable Image</Typography>
                    <Grid container spacing={4}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start">
                        <Grid item xs={12} sm={6}>
                            <Box>
                                <Typography color='primary' variant="h6" >CSI Linux 2021.2 (last version) has been packaged as a forensic RAW (.dd) copy and HDDRawCopy to use so you can make a bootable drive. This will take some time to build. This is NOT a .ISO file. It is a forensic copy in DD format. Read the <Link href="https://csilinux.com/Documents/Setting%20up%20the%20CSI%20Linux%202021.1%20Bootable%20Image.pdf" color="secondary">instructions</Link> before you download.
                                </Typography>
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
                                    <TypeWriterEffect text="~CSI Linux 2021.2 Bootable Image minimum requirements: 4+ GB of RAM, 80+ GB Hard drive for download, 64+ GB Hard drive or USB, 2+ Cores, Imaging tool (HDDRawCopy is included), internet access" textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1rem", color: "#FFFFFF" }} typeSpeed={1} cursorColor="#FFFFFF" />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Typography color='primary' variant="h4" align="center">Download</Typography>
                    <Typography color='primary' variant="subtitle2" align="center">MD5 (.7z): 697a960453e9f5c8a850ff2fe33ecde6</Typography>
                    <Typography color='primary' variant="body2" align="center">Please consider seeding after downloaded</Typography>

                    <Grid item xs={12} className={classes.buttons} container
                        direction="row"
                        justify="center"
                        alignItems="center">

                        <Button variant="outlined" color="primary" href="https://csilinux.com/downloads/CSI_Linux_2021.2_Bootable.torrent">Torrent File</Button>
                        <Button variant="outlined" color="primary" href="magnet:?xt=urn:btih:D6DA8DED882C5CF64AAD9EE1E07ACDC5F37F5C89&dn=CSI_Linux_2021.2_Bootable.7z&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=http%3a%2f%2ft.nyaatracker.com%3a80%2fannounce&tr=udp%3a%2f%2fzephir.monocul.us%3a6969%2fannounce&tr=http%3a%2f%2fshare.camoe.cn%3a8080%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2ftracker.kicks-ass.net%3a80%2fannounce&tr=http%3a%2f%2ftracker.ex.ua%3a80%2fannounce&tr=http%3a%2f%2ftracker.mg64.net%3a6881%2fannounce&tr=http%3a%2f%2ftracker.edoardocolombo.eu%3a6969%2fannounce&tr=http%3a%2f%2ftracker.dutchtracking.nl%3a80%2fannounce&tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce">Magnet Link</Button>
                        <Button variant="outlined" color="primary" href="https://www.dropbox.com/s/vntxhbjqidfi31a/CSI_Linux_2021.2_Bootable.7z?dl=0">DROPBOX</Button>
                        <Button variant="outlined" color="primary" href="https://csilinux.com/downloads/CSI_Linux_2021.2_Bootable.7z">Direct Download</Button>
                    </Grid>
                </TabPanel>

                <TabPanel value={value} index={2}>
                    <Typography color='primary' variant="h4" align="center">CSI Linux 2021.1 SIEM</Typography>
                    <Grid container spacing={4}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start">
                        <Grid item xs={12} sm={6}>
                            <Box>
                                <Typography color='primary' variant="h6" >CSI Linux 2021.1 should be able to be installed on CSI Linux or on any other system on the network. CSI SIEM has been separated to allow you to engineer your environment anyway you want. The instructions are <Link href="https://github.com/Information-Warfare-Center/CSI-SIEM/blob/master/README.md" color="secondary">here</Link>.
                                </Typography>
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
                                    <TypeWriterEffect text="~CSI Linux 2021.1 SIEM minimum requirements: 8+ GB of RAM, 200+ GB free space (logs get big), 2+ Cores" textStyle={{ fontFamily: 'Consolas', fontWeight: 400, fontSize: "1rem", color: "#FFFFFF" }} typeSpeed={1} cursorColor="#FFFFFF" />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Typography color='primary' variant="h4" align="center">Download</Typography>
                    <Typography color='primary' variant="body2" align="center">Follow the link and the instructions</Typography>

                    <Grid item xs={12} className={classes.buttons} container
                        direction="row"
                        justify="center"
                        alignItems="center">

                        <Button variant="outlined" color="primary" href="https://github.com/Information-Warfare-Center/CSI-SIEM">Github</Button>
                    </Grid>
                </TabPanel>
            </div>
        </div>
    );
}