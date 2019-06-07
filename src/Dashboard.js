import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import ViewDetails from './ViewDetails';
import MyProfile from './MyProfile';

class Dashboard extends Component{
    componentDidMount(){
        this.props.history.push('./myProfile');
    }
    render(){
        return(
            <div>
                 <BrowserRouter>
                    <div>
                    <Header/>
                    <Route path='/header' component={Header}></Route>
                    <Route path='/viewDetails/:idParam' component={ViewDetails}></Route>
                    <Route path='/myProfile' component={MyProfile}></Route>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
export default Dashboard;