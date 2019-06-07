import React,{Component} from 'react';
import Header from './Header';
import './App.css'
import axios from 'axios';

class Contents extends Component{
    constructor(props){
        super(props);
        this.state={
            profile:[],
            mail:props.match.params.emailId
        }
    }

    componentDidMount(){
        const{list}=this.state;
        const{mail}=this.state;
        var g=this;
        axios.get(`http://13.233.166.249:9090/matrimonyapp/matrimony/getMyProfile/${g.state.mail}`).then(function(response){
            console.log(response.data);
            g.setState({profile:response.data.list})
            console.log(g.state.profile);
        }).catch(function(err){
            console.log(err);
        })
    }

    // main=()=>{
    //     this.props.history.push('./dashboard/'+this.state.mail)
    // }

    render(){
        console.log(this.state.profile);
        return(
            <div>
            <Header/>
                <ul>
                {this.state.profile.map((item,i)=>{
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
export default Contents;