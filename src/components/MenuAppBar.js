import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter, Link as RouterLink } from 'react-router-dom';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import logo from './logoW.png'
import Button from '@material-ui/core/Button';
import clsx from 'clsx'
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  margin: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navBarFlex: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    marginRight: theme.spacing(6),
  },
  logoDesktop: {
    maxWidth: 50,
  },
  color: {
    backgroundColor: "#2D2D2D"
  },
}));

const MenuAppBar = props => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL)
    setAnchorEl(null);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  return (
    <div>
      <AppBar position="fixed" className={classes.color} >
        <Toolbar>
          <Typography className={classes.title}>
            <RouterLink to="/" className="csiLogo"><img src={logo} alt="csilinuxlogo" className={classes.logoDesktop} /></RouterLink>
          </Typography>
          {
            isMobile ? (
              <>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                  onClick={handleMenu}>
                  <MenuIcon color="primary"/>
                </IconButton>
                <Menu 
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={() => handleMenuClick('/download')}><Typography color="error">DOWNLOAD</Typography></MenuItem>
                  <MenuItem onClick={() => handleMenuClick('/tutorials')}><Typography color="error">TUTORIALS</Typography></MenuItem>
                  <MenuItem onClick={() => handleMenuClick('/features')}><Typography color="error">FEATURES</Typography></MenuItem>
                  <MenuItem onClick={() => handleMenuClick('/team')}><Typography color="error">TEAM</Typography></MenuItem>
                  <MenuItem><Link href="https://informationwarfarecenter.com/Cyber_Intelligence_Report.php"><Typography color="error">PUBLICATIONS</Typography></Link></MenuItem>                   
                  <MenuItem onClick={() => handleMenuClick('/contact')}><Typography color="error">CONTACT</Typography></MenuItem>
                </Menu>
              </>
            ) : (
              <div className={classes.navBarFlex}>
                <Button size="large" color="primary" className={classes.margin} onClick={() => handleButtonClick("/download")}> DOWNLOAD </Button>
                <Button size="large" color="primary" className={classes.margin} onClick={() => handleButtonClick("/tutorials")}> TUTORIALS </Button>
                <Button size="large" color="primary" className={classes.margin} onClick={() => handleButtonClick("/features")}> FEATURES </Button>
                <Button size="large" color="primary" className={classes.margin} onClick={() => handleButtonClick("/team")}> TEAM </Button>
                <Button size="large" color="primary"  className={clsx("navBarPublicationsLink", classes.margin)} href="https://informationwarfarecenter.com/Cyber_Intelligence_Report.php">PUBLICATIONS</Button>
                <Button size="large" color="primary" className={classes.margin} onClick={() => handleButtonClick("/contact")}> CONTACT</Button>
              </div>
            )
          }
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default withRouter(MenuAppBar)
