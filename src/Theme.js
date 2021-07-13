import { createMuiTheme } from '@material-ui/core/styles';

const font =  "'Inconsolata', monospace";

const theme = createMuiTheme({
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

  //colors
  palette: {
    primary: {
      //white
      main: "#FFFFFF"
    },
    secondary: {
      //blue
      main: "#0000ff"
    },
    error: {
      //red
      main: "#C01F24"
    },
  },
  typography: {
    fontFamily: font,
  },

});

export default theme


/*   typography: {
    fontFamily: "Arial"
  }, */