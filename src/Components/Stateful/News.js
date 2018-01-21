import React, {Component} from 'react';
import cachios from 'cachios';
import MapNews from "../Stateful/MapNews";
import '../../css/style.css';
import '../../css/transitions.css';
import '../../css/transitions.css';

export default class FetchNews extends Component {
    constructor() {
        super();
        this.state = {news: [], class: "default"}
    }

    componentWillUnmount(){
        this.setState({class:"unmount"});
    }
    fetchNews() {
        let url = 'https://public-api.wordpress.com/rest/v1/sites/barznoble.wordpress.com/posts/?context=display';
        cachios.get(url,{ttl:900})
            .then(response => {
                this.setState({news: response.data.posts});
            })
            .catch(error => {
                console.log("An error ocurred!" + error);
            });
    }
    componentDidMount(){
        document.title = "Barz Noble - News";
        this.fetchNews();
    }
    render() {
        return (
            <div>

                <section className={"js-visible "+this.state.class}>

                    <div id="content">
                        <h1>News</h1>
                        <div id="news-area">
                            <MapNews news={this.state.news}/>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
