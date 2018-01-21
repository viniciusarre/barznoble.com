import React, {Component} from 'react';
import cachios from 'cachios';
import MapNews from "../Containers/MapNews";
import '../css/style.css'

export default class FetchNews extends Component {
    constructor() {
        super();
        this.state = {news: []}
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
            <section className="js-visible">
                <div id="content">
                    <h1>News</h1>
                    <div id="news-area">
                        <MapNews news={this.state.news}/>
                    </div>
                </div>
            </section>
        )
    }
}