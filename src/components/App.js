import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
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
  const [ rooms, setRooms ] = useState(undefined);

  useEffect(() => {
    db.collection('rooms')
      .get()
      .then(snapshot => {
        setRooms(snapshot.docs.map(doc => {
          return {id: doc.id, name: doc.data().name}
        }))
      })
  })

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
              <ChatPage rooms={rooms} themeCallback={switchTheme} />
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
