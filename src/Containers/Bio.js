import React,{Component} from 'react';
import axios from 'axios';
import Bio from '../Components/Bio';

export default class FetchBio extends Component {
    constructor(){
        super();
        this.state = {data:{}}
    }

     Fetch() {
        let post = 1;
        let url = 'https://public-api.wordpress.com/rest/v1/sites/barznoble.wordpress.com/posts/' + post + '/?context=display';
        axios.get(url)
            .then(result =>this.setState({data:result.data.content}))
            .catch(error =>console.log("Error: " + error));
    }
    componentDidMount(){
        document.title = "Barn Noble - Bio";
        this.Fetch();
    }

    render() {
        {console.log(this.state.data)}
        return(<Bio content = {this.state.data}/>)
    }
}
