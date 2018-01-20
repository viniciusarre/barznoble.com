import React from 'react';

import '../css/link.css';
import '../css/style.scss';
import '../css/_bio.scss';
import Img from '../img/biopic.jpg';


const Bio = ({content}) => {

    return (
        <section className="js-visible">
            <div id="content">
                <div className="col1">
                    <div className={"float"} dangerouslySetInnerHTML={{ __html:content}}></div>

                    {/*Renders the props.content*/}


                </div>
            <div className="col2">
               <img src={Img} alt="Profile"/>

                {/*gets the image link*/}
            </div>
        </div>
    </section>
        )
};

export default Bio;