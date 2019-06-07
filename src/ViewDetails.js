import React,{Component} from 'react';
import axios from 'axios';
import Header from './Header';
import profile from './assets/profile.png';
import Button from '@material-ui/core/Button';

class ViewDetails extends Component{
    constructor(props){
        super(props);
       // console.log("hihihi")
        this.state={
            list:[],
            id:props.match.params.idParam
        }
    }

    componentDidMount(){
        const{list}=this.state;
        const{id}=this.state;
        var g=this;
        axios.get(`http://13.233.166.249:9090/matrimonyapp/matrimony/getProfileDetails/${g.state.id}`).then(function(response){
            console.log(response.data.person);
            g.setState({list:response.data.person})
        }).catch(function(err){
            console.log(err);
        })
    }

    go=()=>{
        this.props.history.push('/myProfile/'+this.state.id);
    }

    render(){
        return(
            <div>
                <Header/>
                <Button onClick={this.my}>VIEW MY PROFILE</Button>
                <ul>
                {this.state.list.map((item,i)=>{
                    return(
                        <div className="list">
                        <li>{item.name}</li><br/>
                   <li>{item.emailId}</li><br/>
                   <li>{item.occupation}</li><br/>
                   <li>{item.height}</li><br/>
                   <li>{item.color}</li><br/>
                   <li>{item.maritalStatus}</li><br/>
                   <li>{item.dob}</li><br/>
                   <li>{item.mobileNo}</li><br/>
                   </div>
                    )
                })}
                   
                </ul>
            </div>
        )
    }
}
export default ViewDetails;