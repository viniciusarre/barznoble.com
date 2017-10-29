import React, {Component} from 'react';

import '../css/style.css'
import '../css/_home.scss';


export default class Home extends Component{

    render(){
        return(
            <section id="sect-home" className="js-visible">
                <div className="home-panel">
                    <title>Welcome</title>
                    <div className="home-content">
                        <p>
                            This is the home page. Should only display the background fingerpoint photo with no dark overlay and with some tex-images positioned on his back.
                        </p>
                        <a className="gotobuy" href="/buy/">click here to go to buy page</a>
                    </div>
                </div>
            </section>

        )
    }
}