import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chat from './Chat';
import Login from './Login';
import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Router> 
       <Switch>
         <Route path='/chat'>
          <Chat/>
         </Route>
          
         <Route path='/'>
          <Login/>
         </Route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
