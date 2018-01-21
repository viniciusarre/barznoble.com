import React, {Component} from 'react';


export default class Listen extends Component{
    shouldComponentUpdate() {
        return false; //this returns false as a way for react know that the component should not be updated...
        //this is a good practice when using iframes in react
    }
    componentWillMount(){
        document.title = "Barz Noble - Listen"
    //    changes the title...
    }
    render(){
        return(
            <section className="js-visible default">
                <div id="content">
                    <h1>Listen</h1>
                    <iframe scrolling="no" frameBorder="no" title="soundcloud1"
                            src="https://w.soundcloud.com/player/?visual=true&url=http://api.soundcloud.com/playlists/289051104"></iframe>

                    <iframe scrolling="no" frameBorder="no" title="soundcloud2"
                            src="https://w.soundcloud.com/player/?visual=true&url=https://api.soundcloud.com/playlists/287464413"></iframe>
                </div>
            </section>
        );
    }
}