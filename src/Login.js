import React,{Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './App.css';

class Login extends Component{
     constructor(props){
        super(props);
        this.state={
            loginData:{
                emailId:'',
                password:'',
            },
            notification:''
        }
    }

    handleChange=(event)=>{
        const{loginData}=this.state;
        loginData[event.target.name]=event.target.value;
        console.log(loginData);
    }

    login=()=>{
        const{loginData}=this.state;
        this.props.history.push('./dashboard/'+loginData.emailId);
        // axios.post('http://10.117.189.169:9090',loginData).then(function(response){
        //     console.log(response);
        // }).catch(function(err){
        //     console.log(err);
        // })
    }

    render(){
        return(
            <div>
                <div className="login">
                    <div className="form-group">
                            <label>Email</label><br/>
                            <input type="text" className="form-control col-sm-10" placeholder="enter email" name="emailId" required onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                            <label>Password</label><br/>
                            <input type="password" className="form-control col-sm-10" placeholder="password" name="password" required onChange={this.handleChange}/>
                    </div>
                        <label></label><br/>
                        <button type="button" className="btn btn-info" onClick={this.login}>Login</button>
                </div>
                if registered please <Link to='/signUp'>SignUp</Link>
            </div>
        )
    }
}
export default Login;