import React,{Component} from 'react';
import Header from './Header';
import './App.css'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from './assets/profile.png';

class Contents extends Component{
    constructor(props){
        super(props);
        this.state={
            profile:[]  ,
            mail:props.match.params.emailId
        }
    }

    componentDidMount(){
        const{list}=this.state;
        const{mail}=this.state;
        axios.get(`http://10.117.189.60:9090/matrimonyapp/matrimony/getMyProfile/${this.state.mail}`).then((response) => {
            console.log(response.data.list);
            this.setState({profile:response.data.list[0]})
            // console.log(g.state.profile);
        }).catch(function(err){
            console.log(err);
        })
    }

    main=()=>{
        this.props.history.push('/contents/'+this.state.mail)
    }

    handleUpdate=(event)=>{
        console.log(event.target.name, event.target.value)
         const{profile}=this.state;
        // console.log(event.target.value,'In Chnaging');
        profile[event.target.name]=event.target.value;
         this.setState({profile});
        // console.log(this.state.profile,'IN Handle Update');
    }

    update=()=>{
        const{profile}=this.state;
        console.log(profile,'In Update method');
        var global=this;
        axios.post('http://10.117.189.60:9090/matrimonyapp/matrimony/updateAccount',profile).then(function(response){
            console.log(response,'In axios');
            if(response.data.statusCode===201){
                alert(response.data.message);
            }
            //global.props.history.push('/updateOtp');
        }).catch(function(err){
            console.log(err);
        })
    }

    render(){
        console.log(this.state.profile);
        return(
            <div>
            <div>
            <Header/>
            <Button onClick={this.main}>Back</Button>
                <ul>
                {/* {this.state.profile.map((item,i)=>{
                    return(
                        <div className="list">
                        <li><img src={profile} width="150px" height="210px" alt="picture"/></li><br/>
                        <li><b>Name</b>::{item.name}</li><br/>
                   <li><b>Email</b>::{item.emailId}</li><br/>
                   <li><b>Occupation</b>::{item.occupation}</li><br/>
                   <li><b>Height</b>::{item.height}</li><br/>
                   <li><b>Color</b>::{item.color}</li><br/>
                   <li><b>MaritalStatus</b>::{item.maritalStatus}</li><br/>
                   <li><b>DOB</b>::{item.dob}</li><br/>
                   <li><b>MobileNo</b>::{item.mobileNo}</li><br/>
                   <li><Button>Edit</Button></li>
                   </div>
                    )
                })} */}
                   
                </ul>
                </div>
                <div>
                <table className="table table-striped">
                    <tbody>
                    <div>
                        <tr><td><img src={profile} width="150px" height="210px" alt="picture"/></td></tr><br/>
                        <tr><td><label>ProfileId:</label></td>
                            <td><input type="text" value={this.state.profile.profileId} onChange={this.handleUpdate} name="profileId" disabled/></td>
                        </tr>
                        <tr><td><label>Name:</label></td>
                            <td><input type="text" value={this.state.profile.name} onChange={this.handleUpdate} name="name"/></td>
                        </tr>
                        <tr><td><label>Email:</label></td>
                            <td><input type="text" value={this.state.profile.emailId} onChange={this.handleUpdate} name="emailId"/></td>
                        </tr>
                        <tr><td><label>Occupation:</label></td>
                            <td><input type="text" value={this.state.profile.occupation} onChange={this.handleUpdate} name="occupation"/></td>
                        </tr>
                        <tr><td><label>Height:</label></td>
                            <td><input type="text" value={this.state.profile.height} onChange={this.handleUpdate} name="height"/></td>
                        </tr>
                        <tr><td><label>Color:</label></td>
                            <td><input type="text" value={this.state.profile.colour} onChange={this.handleUpdate} name="color"/></td>
                        </tr>
                        <tr><td><label>MaritalStatus:</label></td>
                            <td><input type="text" value={this.state.profile.maritalStatus} onChange={this.handleUpdate} name="maritalStatus"/></td>
                        </tr>
                        <tr><td><label>DOB:</label></td>
                            <td><input type="text" value={this.state.profile.dob} onChange={this.handleUpdate} name="dob" disabled/></td>
                        </tr>
                        <tr><td><label>MobileNo:</label></td>
                            <td><input type="text" value={this.state.profile.mobileNo} onChange={this.handleUpdate} name="mobileNo"/></td>
                        </tr>
                      </div>  
                    {/* {this.state.profile.map((item,i)=>{
                    return(
                        <div>
                        <tr><td><img src={profile} width="150px" height="210px" alt="picture"/></td></tr><br/>
                        <tr><td><label>Name:</label></td>
                            <td><input type="text" value={item.name} onChange={this.handleUpdate} name="name"/></td>
                        </tr>
                        <tr><td><label>Email:</label></td>
                            <td><input type="text" value={item.emailId} onChange={this.handleUpdate} name="emailId"/></td>
                        </tr>
                        <tr><td><label>Occupation:</label></td>
                            <td><input type="text" value={item.occupation} onChange={this.handleUpdate} name="occupation"/></td>
                        </tr>
                        <tr><td><label>Height:</label></td>
                            <td><input type="text" value={item.height} onChange={this.handleUpdate} name="height"/></td>
                        </tr>
                        <tr><td><label>Color:</label></td>
                            <td><input type="text" value={item.colour} onChange={this.handleUpdate} name="color"/></td>
                        </tr>
                        <tr><td><label>MaritalStatus:</label></td>
                            <td><input type="text" value={item.maritalStatus} onChange={this.handleUpdate} name="maritalStatus"/></td>
                        </tr>
                        <tr><td><label>DOB:</label></td>
                            <td><input type="text" value={item.dob} onChange={this.handleUpdate} name="dob" disabled/></td>
                        </tr>
                        <tr><td><label>MobileNo:</label></td>
                            <td><input type="text" value={item.mobileNo} onChange={this.handleUpdate} name="mobileNo"/></td>
                        </tr>
                        </div>
                    )
                })} */}
                </tbody>
                </table>
                <Button onClick={this.update}>Update</Button>
            </div>
            </div>
        )
    }
}
export default Contents;