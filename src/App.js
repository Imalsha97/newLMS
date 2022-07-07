import { ThemeProvider } from "styled-components";
import './App.css';
import {Header , Main , Footer} from './components/Layout';
import {NavBar,NavItem,NavLink} from './components/Navbar';
import {BsBookHalf} from 'react-icons/bs';


import Dashboard from "./containers/Dashboard";


function App() {
  const theme = {
    primary: {
      main: "#29b6f6",
      light: "#73e8ff",
      dark: "#0086c3",
      textColor: "#000",
      danger: "#e91e63",
      dangerDark: "#b0003a",
    },
    secondary: {
      main: "#9e9e9e",
      light: "#cfcfcf",
      dark: "#707070",
      textColor: "#000",
    },

    spacing: (factor) => `${factor * 8}px`,
  };
  return (
    <ThemeProvider theme={theme}>
    <Header>
      <NavBar>
      <NavItem href="#">
          <NavLink>
              <BsBookHalf/>
          </NavLink>
        </NavItem>
        <NavItem href="#">
          <NavLink>
              Catalog
          </NavLink>
        </NavItem>
        <NavItem href="#">
          <NavLink>
            Dashboard
          </NavLink>
        </NavItem>
      </NavBar>
    </Header>
    <Main>
      <Dashboard/>
    </Main>
    <Footer>f</Footer>
    </ThemeProvider>
  );
}

export default App;
