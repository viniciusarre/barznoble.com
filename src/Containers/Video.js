import React, {Component} from 'react';
import cachios from 'cachios';
import YouTube from 'react-youtube';


export default class FetchVideoData extends Component{
    constructor(){
        super();
        this.state = {
            data:{},imageURL:[], vURL:[],text:[],currentID:""
        }
    }

    componentWillMount(){

        document.title="Barz Noble - Videos";
        this.getData();
    }


    getData(){
        cachios.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLLR3cVv55vsn6qxQ3Llsvp_Y4V8B92lwy&key=AIzaSyBImwfn6loeCIEJWi9uJysL9lxaJhS3EzI",{ttl:900})
            .then(result=>{
                this.setState({data:result.data});
                this.sortData()
            })
            .catch(error=>{
                console.log("error "+error);
            });
    }

    sortData(){
        let items = this.state.data.items;
        let imgURL = [], vID = [], txt = [];
        items.forEach(function(elem){
            imgURL.push(elem.snippet.thumbnails.high.url);
            vID.push(elem.snippet.resourceId.videoId);
            txt.push(elem.snippet.title);
        });
        this.setState({imageURL:imgURL});
        this.setState({vURL:vID});
        this.setState({text:txt});
        this.setState({currentID:vID[0]})
    }

    setVideo(index){
        let vid = this.state.vURL[index];
        this.setState({currentID:vid});
    }


    render(){
        return (
            <section id="sect-videos" className="js-visible">
                <div id="content">
                    <ul id="thumbs">{this.state.text.map((elem,ind)=><li key={ind}><img onClick={()=>this.setVideo(ind)} src={this.state.imageURL[ind]} alt={"thumbnail"}/><span>{elem}</span></li>)}</ul>
                    <div>
                        <YouTube videoId={this.state.currentID}/>
                    </div>
                </div>
            </section>
        );
    }
}