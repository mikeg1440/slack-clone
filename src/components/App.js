import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chat from './Chat';
import Login from './Login';
import Header from './Header'
import './App.css';

function App() {
  return (
    <div>
      <Router> 
       <Switch>
         <Route path='/chat'>
          <Header username='nick' />
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
