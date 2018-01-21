import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';

import '../css/object.css';
import '../css/_gallery.scss';


const img  =["3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg",
    "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "5009dc3dd2261.jpg","5009dd0a585b7.jpg",
    "5009dd0e48d9c.jpg", "5009dd6b34e94.jpg", "5009dd06b66ac.jpg", "5009dd7c442bf.jpg", "5009dd121f81c.jpg",
    "5009dd710df62.jpg","5009dd764a44d.jpg","5009dd06403c5.jpg", "5009dd6585672.jpg", "5009ddfc154c2.jpg",
    "5009de023c0a2.jpg", "5009de5017972.jpg", "5009df9be3cb7.jpg", "5009df69ea440.jpg", "5009df645bda4.jpg",
    "5009df7513fde.jpg", "5009dfa6ab08e.jpg", "5009dfa16e7f7.jpg", "5009dfaa3d8c5.jpg", "5009dfadc670b.jpg",
    "5009ec9967c21.jpg"];



 export default class Gallery extends Component {


    constructor() {
        super();
        this.state = { isOpen:false, index:0}
       }

    componentWillMount(){
        document.title = "Barz Noble - Photos";
    }


    openGallery(index){
        this.setState({index});
        this.setState({isOpen:true});
    }

    render(){
        const {isOpen} = this.state;
        return(
        <section id="sect-gallery" className="js-visible">
            <div id={"content"}>
                <ul className="gallery fit">
                    {img.map((elem,ind) =>
                    <li className={"lightbox"}>
                        <div onClick={()=>this.openGallery(ind)}>
                           <img src={"img/gallery/thumb/"+elem} alt={"gallery item"}></img>
                        </div>
                    </li>
                    )}<li></li><li></li><li></li><li></li><li></li><li></li>
                </ul>
                {isOpen && (
                    <Lightbox
                        mainSrc={"img/gallery/medium/"+img[this.state.index]}
                        nextSrc={"img/gallery/medium/"+img[(this.state.index + 1) % img.length]}
                        prevSrc={"img/gallery/medium/"+img[(this.state.index + img.length - 1) % img.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                index: (this.state.index + img.length - 1) % img.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                index: (this.state.index + 1) % img.length,
                            })
                        }
                    />)
                }
            </div>
        </section>
        )
    }

};