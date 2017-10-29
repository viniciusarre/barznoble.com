import React, {Component} from 'react';


export default class Listen extends Component{
    shouldComponentUpdate() {
        return false;
    }
    render(){
        return(
            <section className="js-visible">
                <div id="content">
                    <iframe scrolling="no" frameborder="no" title="soundcloud1"
                            src="https://w.soundcloud.com/player/?visual=true&url=http://api.soundcloud.com/playlists/289051104"></iframe>

                    <iframe scrolling="no" frameborder="no" title="soundcloud2"
                            src="https://w.soundcloud.com/player/?visual=true&url=https://api.soundcloud.com/playlists/287464413"></iframe>
                </div>
            </section>
        );
    }
}