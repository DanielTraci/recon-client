import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    //background color
    overrides: {
      //background color
        MuiCssBaseline: {
          '@global': {
            body: {
              backgroundColor: '#1A1A1A',
            },
          },
        },
        
        //input label color
        MuiInputLabel: { // Name of the component ⚛️ / style sheet
          root: { // Name of the rule
            color: "#FFFFFF",
            "&$focused": { // increase the specificity for the pseudo class
              color: "#C01F24"
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
          main: "#0000ff"
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
