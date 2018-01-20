import React, {Component} from 'react';

import Img from 'react-image';

// import * as Medium from '../gallery/medium/*';


 export default class Gallery extends Component {
    constructor() {
        super();
        this.state = { img:["/3.jpg'", "/4.jpg'", "/5.jpg'", "/6.jpg'", "/7.jpg'", "/8.jpg'", "/9.jpg'", "/10.jpg'", "/11.jpg'", "/12.jpg'",
            "/13.jpg'", "/14.jpg'", "/15.jpg'", "/16.jpg'", "/17.jpg'", "/18.jpg'", "/5009dc3dd2261.jpg'", "/5009dd0a585b7.jpg'", "/5009dd0e48d9c.jpg'",
            "/5009dd6b34e94.jpg'", "/5009dd06b66ac.jpg'", "/5009dd7c442bf.jpg'", "/5009dd121f81c.jpg'", "/5009dd710df62.jpg'", "/5009dd764a44d.jpg'",
            "/5009dd06403c5.jpg'", "/5009dd6585672.jpg'", "/5009ddfc154c2.jpg'", "/5009de023c0a2.jpg'", "/5009de5017972.jpg'", "/5009df9be3cb7.jpg'",
            "/5009df69ea440.jpg'", "/5009df645bda4.jpg'", "/5009df7513fde.jpg'", "/5009dfa6ab08e.jpg'", "/5009dfa16e7f7.jpg'", "/5009dfaa3d8c5.jpg'",
            "/5009dfadc670b.jpg'", "/5009ec9967c21.jpg'"], src: "'../gallery/", size:{medium:"medium",large:"large",thumb:"thumb"}

        }


    }


    componentWillMount(){
        document.title = "Barz Noble - Photos";
    }

   // renderImage = ()=>{
   //     let tagElement = <div></div>
   //      this.state.imagens.forEach((elem,ind)=>{
   //          console.log("P"+ind)
   //          tagElement+=<img src={"P"+ind} className="wide square tooNarrow tooShort"/>
   //      });
   //  };



    render(){
        // this.renderImage();
        console.log(String(this.state.src+this.state.size.thumb+this.state.img[0]))
        return(
            <div>
                <Img src={this.state.src+this.state.size.thumb+this.state.img[0]}/>

            </div>
        )
    }

};