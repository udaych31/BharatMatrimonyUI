import React,{Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
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
       // alert(loginData.emailId);
        var sahi=this;
        //this.props.history.push('./contents/'+loginData.emailId);
        axios.post('http://13.233.166.249:9090/matrimonyapp/matrimony/login',loginData).then(function(response){
            console.log(response);
            if(response.data.statusCode===200){
            sahi.props.history.push('./contents/'+loginData.emailId);
            }
            else{
                alert(response.data.message);
            }
        }).catch(function(err){
            console.log(err);
        })
    }

    my=()=>{
        this.props.history.push('./myProfile/'+this.state.loginData.emailId);
    }

    render(){
        return(
            <div><h3>Login Here</h3>
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
                if registered please <Link to='/signUp'>SignUp</Link><br/>
                
            </div>
        )
    }
}
export default Login;