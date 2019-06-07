import React,{Component} from 'react';
import axios from 'axios';

class MyProfile extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            emailId:props.match.params.mailId
        }
    }

    componentDidMount(){
        const{list}=this.state;
        const{emailId}=this.state;
        alert(this.state.emailId);
        axios.get(`http://10.117.189.134:9090/matrimonyapp/getProfileByEmail${emailId}`).then(function(response){
            console.log(response);
        }).catch(function(err){
            console.log(err);
        })
    }

    viewDetails=(id)=>{
        //this.props.history.push('./viewDetails/'+"sahi");
    }

    render(){
        console.log(this.state.emailId);
        return(
            <div>
                    <div className="row">
                        {this.state.list.map((item,i)=>{
                        return(
                            <div  key={list.id} className="col-md-4 mt-5">
                            
                                <div className="row">
                                <div className="col-sm-12">
                                    <button onClick={() => this.viewDetails(list)}><img src={list.image} width="300px" height="300px" alt="picture"/></button>
                                </div>
                                <div className="col-sm-12"> 
                                    <b>Title:{list.name}</b><br/>
                                    <b>Price:{list.age}</b><br/>
                                    <b>{list.occupation}</b><br/>
                                </div>
                            
                            </div>
                        </div>
                        )
                        })}
                </div>
   
            </div>
        )
    }
}
export default MyProfile;