import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ring from './assets/ring.png';
import profile from './assets/profile.png';
import home from './assets/home.png';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }

    // getProfile=()=>{
    //     this.props.history.push('/myProfile/'+this.state.mail);
    // }

    render(){
        return(
            <div className="header">
                <div className="main">
                    <ul>
                        <li><img src={ring} width="100px" height="100px"/></li>
                        <li className="titlespace"><h2 className="title">Bharat Matrimony</h2></li>
                    </ul>
                </div>
                <div className="sub">
                <div className="header-right">
                    <button onClick={this.getProfile}><img src={profile} className="logo" height="30px" width="30px"/></button>
                    <Link to='/contents'><img src={home} className="logo" height="50px" width="50px"/></Link>
                    <Link to='/signUp'><Button><b>SIGNOUT</b></Button></Link>
               </div>
               <div id="mySidenav" className="sidenav">
                    <a href="#" id="about">About</a>
                    <a href="#" id="blog">Blog</a>
                    <a href="#" id="projects">Project</a>
                    <a href="#" id="contact">all</a>
                </div>
               </div>  
            </div>
        )
    }
}
export default Header;