import {createTheme} from '@material-ui/core/styles';

const themeOverrides = createTheme({
    typography: {
      fontFamily: 'Lato',
      button: {
        fontSize: '1rem',
      },
    },
    palette: {
        primary: {
          main: "#2F80ED",
      },
      secondary:{
          main: "#83CC5E"
      }
    }
  });
  themeOverrides.overrides = {
    MuiFilledInput: {
      root: {
        border: "1px solid #A3ABCC",
        overflow: "hidden",
        marginBottom: 15,
        borderRadius: 4,
        backgroundColor: "#FFF",
        "&:hover": {
          backgroundColor: "#fff"
        },
        "&$focused": {
          backgroundColor: "#fff",
          boxShadow: "none",
          borderColor: "#A3ABCC"
        }
      }
    },
    MuiButton: {
        root:{
            padding: 15,
            paddingRight: 35,
            paddingLeft: 35,
            fontSize: 15,
            borderRadius: 8,
            fontWeight: 700
        }
    },
    MuiCheckbox:{
        root: {
            padding:0,
        }
    },
    MuiFormControlLabel: {
        root:{
            color:'#727272'
        }
    },
    MuiInputLabel:{
      root:{
        color: "#A3ABCC",
        "&$focused": {
          color: "#A3ABCC"
        }
      }
    },
    MuiInputBase:{
      root: {
        border: "1px solid #A3ABCC",
        overflow: "hidden",
        marginBottom: 15,
        backgroundColor: "#FFF",
        "&:hover": {
          backgroundColor: "#fff"
        },
        "&$focused": {
          backgroundColor: "#fff",
          boxShadow: "none",
          borderColor: "#A3ABCC"
        }
      }
    },
    MuiSelect: {
      select: {
        marginLeft: 20,
        paddingRight:0,
        "&:focus": {
          backgroundColor: "#FFF"
        }
      }
    },
    MuiFormControl: {
      root:{
        display: 'flex',
      }
    }
  };

export default themeOverrides;