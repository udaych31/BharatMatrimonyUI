import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import ViewDetails from './ViewDetails';
import MyProfile from './MyProfile';
import Contents from './Contents';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            emailId:props.match.params.mailId
        }
    }

    componentDidMount(){
        //alert(this.state.emailId);
      
    }

    go=()=>{
          var id=this.state.emailId;
        this.props.history.push('/header/'+id);
    }

    render(){
        return(
            <div>
                 <BrowserRouter>
                    <div>
                    <MyProfile/> 
                    <Route path='/header' component={Header}></Route>
                    <Route path='/viewDetails/:idParam' component={ViewDetails}></Route>
                    <Route path='/myProfile/:emailId' component={MyProfile}></Route>
                    
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
export default Dashboard;