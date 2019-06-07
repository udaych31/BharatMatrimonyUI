import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            regData:{
                name:'',
                emailId:'',
                password:'',
                dob:'',
                height:'',
                maritalStatus:'',
                occupation:'',
                mobileNo:'',
                language:'',
                gender:'',
                color:''
            },
            notification:''
        }
    }

    handleChange=(event)=>{
        const{regData}=this.state;
        //console.log(event.target.value);
        regData[event.target.name]=event.target.value;
        this.setState({regData});
        console.log(this.state.regData);
    }

    register=()=>{
        const{regData}=this.state;
        const{notification}=this.state;
        var global=this;
        console.log(regData);
        axios.post('http://10.117.189.169:9090/matrimonyapp/matrimony/registerAccount',regData).then(function(response){
            if(response.data.statusCode===401){
                alert(response.data.message)
            }
            else{
                global.props.history.push('./login')
            }
        }).catch(function(err){
            console.log(err);
        })
    }

    render(){
        return(
            <div className="box">
            <h2 align="center">Bharat Matrimony</h2>
            <h4 align="center">Please Fill Details to Register</h4>
            <div className="sign">
                <div className="form-group">
                        <label>Name</label><br/>
                        <input type="text" className="form-control" placeholder="enter name" name="name" required onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                        <label>Email</label><br/>
                        <input type="text" className="form-control" placeholder="enter email" name="emailId" required onChange={this.handleChange}/>
                </div>
                <div className="form-group">     
                        <label>Password</label><br/>
                        <input type="password" className="form-control" placeholder="password" name="password" required onChange={this.handleChange}/>
                </div>        
                <div className="form-group">       
                        <label>DOB</label><br/>
                        <input type="date" className="form-control" placeholder="Date Of Birth" name="dob" required onChange={this.handleChange}/>
                </div>
                <div className="form-group">       
                        <label>Height</label><br/>
                        <input type="number" className="form-control" placeholder="Height" name="height"  required onChange={this.handleChange}/>
                </div>
                <div className="form-group">     
                    <label>Marital Status</label><br/>
                    <select className="form-control" name="maritalStatus" onChange={this.handleChange}>
                            <option>Married(divorced)</option>
                            <option>Unmarried</option>
                    </select>
                </div>     
                <div className="form-group">
                        <label>Occupation</label><br/>
                        <input type="text" className="form-control" placeholder="Occupation"  name="occupation" required onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                        <label>Phone Number</label><br/>
                        <input type="number" className="form-control" placeholder="Phone Number"  name="mobileNo" required onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                        <label>Mother Tongue</label><br/>
                        <input type="text" className="form-control" placeholder="Mother Tongue"  name="language" required onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                        <label>Gender</label><br/>
                        <select onChange={this.handleChange} name="gender" className="form-control">
                            <option>Male</option>
                            <option>Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Complexion</label><br/>
                        <select onChange={this.handleChange} name="color" className="form-control">
                            <option>Fair</option>
                            <option>Medium</option>
                            <option>Dark</option>
                    </select>
                </div>    
                        <label></label><br/>
                        <button type="button" className="btn btn-info" onClick={this.register}>SignUp</button>
                </div>
            if registered please <Link to='/login'>Login</Link>
        </div>
        )
    }
}
export default SignUp;