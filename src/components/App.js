import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GoogleLogin from './GoogleLogin';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import db from '../firebase';

import Header from '../components/Header';
import Chatroom from './Chatroom'
import Sidebar from './Sidebar'

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

  const [ currentTheme, setCurrentTheme ] = useState('light');
  const [ rooms, setRooms ] = useState([]);
  const [ user, setUser ] = useState(localStorage.getItem('user') && JSON.stringify(localStorage.getItem('user')));


  useEffect(() => {
    db.collection('rooms')
      .get()
      .then(snapshot => {
        setRooms(snapshot.docs.map(doc => {
          return {id: doc.id, name: doc.data().name}
        }))
      })
      localStorage.setItem('rooms', rooms);
      console.info(`App useEffect Ran - ROOMS: \n${JSON.stringify(rooms)}`);
  }, [])

  const switchTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
  }


  const handleSetUser = (newUser) => {
    
    if ( !newUser.photo ){
      newUser.photo = `https://identicon.rmhdev.net/${newUser.name}.png`
    }
    
    setUser(newUser);

    localStorage.setItem('user', JSON.stringify(newUser));
    console.table(newUser);
  }

  const handleSignOut = () => {
    localStorage.clear();
    setUser(null);
    setRooms([]);
  }
  console.log(user);
  return (
    <AppContainer>
      <Router> 
       <Switch>

        {!user ? (
          <Route path='/'>
            <GoogleLogin setUserCallback={handleSetUser} />
         </Route>          
        ) : (
          <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme} >

            <Header user={user} themeCallback={switchTheme} signOutCallback={handleSignOut} />

            <StyledChat>
              <Sidebar rooms={rooms} />
              <Route path='/room/:roomId'>                
                <Chatroom user={user} />
              </Route>
              <Route exact path='/'>
                Create or Select Channel
              </Route>
            </StyledChat>
          </ThemeProvider>
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

const StyledChat = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.chatBG};
    color: ${props => props.theme.chatFG};
    display: grid;
    grid-template-columns: 0.4fr 1.6fr;
    gap: 0px 0px;
    grid-template-areas: ". .";
`

