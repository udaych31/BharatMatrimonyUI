import React from 'react';
import {BrowserRouter,Route,HashRouter} from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import MyProfile from './MyProfile';
import Dashboard from './Dashboard';
import Contents from './Contents';
import ViewDetails from './ViewDetails';
import './App.css';

function App() {
  return (
    <div className="App">
     <HashRouter>
        <div className="middle">
          <Route path='/' component={SignUp} exact></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/signUp' component={SignUp}></Route>
          <Route path='/viewDetails/:idParam/:mailId' component={ViewDetails} exact></Route>
          <Route path='/myProfile/:emailId' component={MyProfile} exact></Route>
          <Route path='/contents/:mail' component={Contents} exact></Route>
          <Route path='/contents' component={Contents} exact></Route>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
