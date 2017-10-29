import React,{Component} from 'react';
import axios from 'axios';
import Bio from './bio';

class FetchBio extends Component {
    constructor(){
        super();
        this.state = {data:<div></div>}
    }
     Fetch() {
        let post = 1;
        let url = 'https://public-api.wordpress.com/rest/v1/sites/barznoble.wordpress.com/posts/' + post + '/?context=display';
        axios.get(url)
            .then(result => {
                let content = result.data.content;
                console.log(content);
                this.setState({data:<div dangerouslySetInnerHTML={{ __html:result.data.content}}></div>})
            })
            .catch(error => {
                console.log("Error" + error);

            });
    }

    render() {
        this.Fetch();
        return(<Bio content = {this.state.data}/>)

    }
}

export default FetchBio;