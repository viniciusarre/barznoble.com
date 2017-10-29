import React, {Component} from 'react';
import axios from 'axios';
import MapNews from "./MapNews";
import '../css/_news.scss';

export default class FetchNews extends Component {

    constructor() {
        super();
        this.state = {news: []}
    }
    fetchNews() {
        let url = 'https://public-api.wordpress.com/rest/v1/sites/barznoble.wordpress.com/posts/?context=display';
        axios.get(url)
            .then(response => {
                this.setState({news: response.data.posts});
            })
            .catch(error => {
                console.log("An error ocurred!" + error);
            });
    }
    render() {
        if (this.state.news.length === 0) {
            this.fetchNews()
        }
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