import React, {Component} from 'react';

import '../../css/style.css';


export default class Home extends Component{

    componentDidMount() {
        document.title = "Barz Noble - Welcome"; //when the component mounts, the document's title changes
    }

    render(){
        return(
            <section id="sect-home" className="js-visible default">
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