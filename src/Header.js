import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ring from './assets/ring.png';
import profile from './assets/profile.png';

class Header extends Component{
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
                    <Link to='/myProfile'><img src={profile} className="logo" height="30px" width="30px"/></Link>
                    <Link><Button><b>Inbox</b></Button></Link>
                    <Button><b>Signout</b></Button><hr/>
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