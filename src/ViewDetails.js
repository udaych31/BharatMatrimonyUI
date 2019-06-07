import React,{Component} from 'react';
import axios from 'axios';

class ViewDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }

    componentDidMount(){
        const{list}=this.state;
        // axios.get('http://10.117.189.169:9090/matrimonyapp/matrimony').then(function(response){
        //     console.log(response);
        // }).catch(function(err){
        //     console.log(err);
        // })
    }

    render(){
        return(
            <div>
                  
   
            </div>
        )
    }
}
export default ViewDetails;