import {Main} from './components/pages/Main';
import themeOverrides from './styles/themeOverrides';
import {ThemeProvider} from '@material-ui/core/styles';
import './styles/App.scss';


function App() {
  return (
    <ThemeProvider theme={themeOverrides}>
      <Main/>
    </ThemeProvider>
  );
}

export default App;
