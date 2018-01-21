import React,{Component} from 'react';
import cachios from 'cachios';
import Bio from '../Stateless/Bio';

export default class FetchBio extends Component {
    constructor(){
        super();
        this.state = {data:{}}
    }

     Fetch() {
        let post = 1;
        let url = 'https://public-api.wordpress.com/rest/v1/sites/barznoble.wordpress.com/posts/' + post + '/?context=display';
        cachios.get(url,{ttl:900})
            .then(result =>this.setState({data:result.data.content}))
            .catch(error =>console.log("Error: " + error));
    }
    componentDidMount(){
        document.title = "Barn Noble - Bio";
        this.Fetch();
    }

    render() {
        return(<Bio content = {this.state.data}/>)
    }
}
