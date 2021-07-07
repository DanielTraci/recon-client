import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



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
        color: "#FFFFFF"
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        minWidth: 165
    },
    cardProps: {
        backgroundColor: "#2D2D2D",
        maxWidth: 300,
        minWidth: 300
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

    }
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>


            <div className={classes.root}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <Tab label="New tools in 2021.2" {...a11yProps(0)} />
                    <Tab label="Tools kept from 2021.1" {...a11yProps(1)} />
                    <Tab label="Tools kept from 2020.3" {...a11yProps(2)} />
                    <Tab label="Open Source Tools" {...a11yProps(3)} />
                    <Tab label="Custom features" {...a11yProps(4)} />
                    <Tab label="Licensed tools" {...a11yProps(5)} />
                </Tabs>


                {/* New tools in 2021.2 */}
                <TabPanel value={value} index={0}>
                    1
                </TabPanel>

                {/* 2021.1*/}
                <TabPanel value={value} index={1}>
                    2
                </TabPanel>


                {/* 2020.3 */}
                <TabPanel value={value} index={2}>
                    3
                </TabPanel>


                {/* Dark Web */}
                <TabPanel value={value} index={3}>
                    4
                </TabPanel>


                {/*    Encryption */}
                <TabPanel value={value} index={4}>
                   5
                </TabPanel>


                {/* Mobile */}
                <TabPanel value={value} index={5}>
                   6
                </TabPanel>
            </div>
        </div>
    );
}
