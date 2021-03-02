import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chat from './Chat';
import Login from './Login';
import Header from './Header'
import './App.css';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import styled from 'styled-components';


const lightTheme = {
  headerFG: 'white',
  headerBG: '#2a0b2a',
  sidebarFG: 'white',
  sidebarBG: '#3d0e3e',
  chatFG: 'black',
  chatBG: 'white'
}

const darkTheme = {
  headerFG: 'white',
  headerBG: '#1b1b16',
  sidebarFG: 'white',
  sidebarBG: '#0e0e0e',
  chatFG: '#3d0e3e',
  chatBG: 'black'
}


function App() {

  const [currentTheme, setCurrentTheme] = useState('light');

  const switchTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
  }

  return (
    <AppContainer>
      <Router> 
       <Switch>
         <Route path='/chat'>
            <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme} >
              <Header username='nick' themeCallback={switchTheme} />
              <Chat/>
            </ThemeProvider>
         </Route>
          
         <Route path='/'>
          <Login/>
         </Route>
       </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
