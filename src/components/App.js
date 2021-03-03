import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';
import GoogleLogin from './GoogleLogin';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import db from '../firebase';
import ChatPage from '../containers/ChatPage'


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
  chatFG: '#0a91bb;',
  chatBG: 'black'
}


function App() {

  const [currentTheme, setCurrentTheme] = useState('light');
  const [ rooms, setRooms ] = useState([]);
  const [ user, setUser ] = useState(JSON.stringify(localStorage.getItem('user')));

  useEffect(() => {
    db.collection('rooms')
      .get()
      .then(snapshot => {
        setRooms(snapshot.docs.map(doc => {
          return {id: doc.id, name: doc.data().name}
        }))
      })
      localStorage.setItem('rooms', rooms);
  }, [])

  const switchTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
  }

  const handleSetUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem('user', newUser);
  }

  const handleSignOut = () => {
    localStorage.clear();
    setUser(null);
    setRooms([]);
  }

  return (
    <AppContainer>
      <Router> 
       <Switch>

        {!!user ? (

          <Route path='/room/:channelId'>
            <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme} >
              <ChatPage rooms={rooms} signOutCallback={handleSignOut} themeCallback={switchTheme} />
            </ThemeProvider>
          </Route>
        ) : (
          <Route path='/'>
            <GoogleLogin setUserCallback={handleSetUser} />
         </Route>          
        )}
          
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
`
