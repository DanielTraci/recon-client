import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    //background color
    overrides: {
        MuiCssBaseline: {
          '@global': {
            body: {
              backgroundColor: '#1A1A1A',
            },
          },
        },
    },
    //colors present on the website
    palette: {
        primary: {
            //white
            main: "#FFFFFF"
        },
        secondary: {
          main: "#0D2481"
        },
        error: {
            //red
            main: "#C01F24"
        },
    },
    typography: {
        fontFamily: "Consolas"
        
    },
    
});

export default theme
