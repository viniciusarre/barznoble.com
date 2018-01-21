import React from 'react';

import '../css/style.scss';
import '../css/_bio.scss';
import Img from '../img/biopic.jpg';
import '../css/img_float.css';

const Bio = ({content}) => {

    return (
        <section className="js-visible">
            <div id="content">
                <div className="col1">
                    {typeof(content)==="string" && (<div className={"floatEmbedded"} dangerouslySetInnerHTML={{ __html:content}}></div>)}

                    {/*Renders the props.content*/}


                </div>
            <div className="col2">
               <img src={Img} alt="Profile"/>
            </div>      {/*gets the image link*/}
        </div>
    </section>
        )
};

export default Bio;