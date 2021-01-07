import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { About } from './Pages/About';
import {Home} from './Pages/Home'
import {Alert} from './components/Alert'
import { AlertState } from './context/Alert/AlertState';
import { FirebaseState } from './context/firebase/FireBaseState';


function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Alert />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path={'/about'} component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
    
    
    
  );
}

export default App;
