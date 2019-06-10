import React,{Component} from 'react';
import profile from './assets/profile.png';
import axios from 'axios';
import Header from './Header';
import Button from '@material-ui/core/Button';

class Contents extends Component{
    constructor(props){
        super(props);
        this.state={
            list1:[],
            emailId:props.match.params.mail
        }
    }

    componentDidMount(){
        const{list1}=this.state;
        const{emailId}=this.state;
        var s=this;
        axios.get('http://13.233.166.249:9090/matrimonyapp/matrimony/getAllProfiles/?emailId='+emailId).then(function(response){
            console.log(response);
            s.setState({list1:response.data.profilesList})
            console.log(list1,'///////////////////');
        }).catch(function(err){
            console.log(err);
        })
    }

    viewDetails=(id)=>{
        console.log(this, id)
        //this.props.history.push('/viewDetails/'+ id.profileId,this.state.emailId);
        this.props.history.push('/viewDetails/'+id.profileId+'/'+this.state.emailId);
    }

    my=()=>{
        this.props.history.push('/myProfile/'+this.state.emailId);
    }

    render(){
        console.log(this.state.list1);
        return(
            <div className="contents">
                <Header/>
            <Button onClick={this.my}>VIEW MY PROFILE</Button>
                  <div className="row">
            {this.state.list1.map((list,i)=>{
              return(
                <div  key={i} className="col-md-4 mt-5" onClick={() => this.viewDetails(list)}>
                  
                    <div className="row">
                      <div className="col-sm-12">
                        <button ><img src={profile} width="300px" height="300px" alt="picture"/></button>
                      </div>
                      <div className="col-sm-12"> 
                        <b>Title:{list.name}</b><br/>
                        <b>language:{list.language}</b><br/>
                        <b>occupation:{list.occupation}</b><br/>
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
export default Contents;