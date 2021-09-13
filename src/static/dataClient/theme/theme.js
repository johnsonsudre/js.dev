import { makeStyles } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";



const theme = createTheme({
  palette: {
    primary: {
      main: '#eeeddd',
    },
    secondary: {
      main: '#00a4c5',
    }
  },
  typography: {
    fontFamily: 'Nunito',
    h1: { fontFamily: 'Nunito' },
    h2: { fontFamily: 'Nunito' },
    h3: { fontFamily: 'Nunito' },
    h4: { fontFamily: 'Nunito' },
  }
})

export default theme