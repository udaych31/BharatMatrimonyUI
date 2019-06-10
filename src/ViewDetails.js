import React,{Component} from 'react';
import axios from 'axios';
import Header from './Header';
import profile from './assets/profile.png';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class ViewDetails extends Component{
    constructor(props){
        super(props);
       // console.log("hihihi")
        this.state={
            list:[],
            obj:{
                toProfileId:this.props.match.params.idParam,
                emailId:this.props.match.params.mailId,
                status:'request'
            },
            req:[]
        }
    }

    componentDidMount(){
        const{list}=this.state;
        const{id}=this.state;
        axios.get(`http://10.117.189.60:9090/matrimonyapp/matrimony/getProfileDetails/${this.props.match.params.idParam}`).then((response)=>{
            console.log(response.data.person);
            this.setState({list:[response.data.person]})
        }).catch(function(err){
            console.log(err);
        })
    }

    main=()=>{
        this.props.history.push('/contents/'+this.props.match.params.idParam)
    }

    req=(i)=>{
        //console.log(this.state.obj.toProfileId,this.state.obj.emailId,this.state.obj.status,'////////');
        axios.post('http://10.117.189.60:9090/matrimonyapp/matrimony/requestProfile',this.state.obj).then((response)=>{
            console.log(response.data);
            if(response.data.statusCode===201){
                alert(response.data.message);
            }  
        }).catch(function(err){
            console.log(err);
        })
    }

    showReq=()=>{
        const{rep}=this.state;
        axios.get('http://10.117.189.60:9090/matrimonyapp/matrimony/viewStatus/?emailId='+this.state.obj.emailId).then((response)=>{
            console.log(response.data.requestStatus);
            this.setState({req:response.data.requestStatus})
            console.log(this.state.req);
        }).catch(function(err){
            console.log(err);
        })
    }

    sentResponse=(s)=>{
        //alert(s);
        const{status}=this.state.obj;
        this.setState({status:s})
        alert(this.state.status);
        
    }

    render(){
        console.log(this.state.req.name);
        return(
            <div>
                <Header/>
                
               <Button onClick={this.main}>Back</Button>

               <div class="dropdown">
                    <Button onClick={this.showReq}>INBOX</Button>
                    <div class="dropdown-content">
                    <tbody>
                    {this.state.req.map((item,i)=>{
                        return(
                            <div>
                                <tr>
                                <td><p>{item.name} has {item.status} you</p></td><br/>
                                <hr/>
                                <td><Button onClick={()=>this.sentResponse("accept")}>Accept</Button></td>
                                <td><Button onClick={()=>this.sentResponse("reject")}>Reject</Button></td>
                                </tr>
                    </div>
                        )
                    })}
                    </tbody>
             
                    </div>
                </div>

            <ul>
                {this.state.list.map((item,i)=>{
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
                   <li><Button onClick={()=>this.req(item)}>Show Interest</Button></li>
                   </div>
                    )
                })}
                   
                </ul>
            </div>
        )
    }
}
export default ViewDetails;