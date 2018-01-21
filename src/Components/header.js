import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../css/style.css';

export default class Header extends Component{

    constructor(){
        super();
        this.state = {mobileOpen: false}
    }
    render(){

        return(
            <div id="header">
                <h1><Link to="/">Barz Noble</Link></h1>
                <ul id="nav" className={this.state.mobileOpen?"open":""}>
                    <div onClick={()=>this.setState({mobileOpen:!this.state.mobileOpen})}><li className="mobile-only" id="menutoggle">Menu</li>
                        <li><Link to="/listen">Listen</Link></li>
                        <li><Link to="/bio">Bio</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/album">About the Album</Link></li>
                        <li><Link to="/photos">Photos</Link></li>
                        <li><Link to="/videos">Videos</Link></li>
                        <li><Link to="/buy">Buy Music</Link></li>
                    </div>
                </ul>

            </div>
        )
    }
}