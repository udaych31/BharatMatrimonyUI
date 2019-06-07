import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <div className="middle">
          <Route path='/' component={SignUp} exact></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/signUp' component={SignUp}></Route>
          <Route path='/dashboard/:mailId' component={Dashboard}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
