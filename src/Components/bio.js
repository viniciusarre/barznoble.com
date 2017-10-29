import React from 'react';


import '../css/style.scss';
import '../css/_bio.scss';
import Img from '../img/biopic.jpg';

const Bio = ({content}) => {
    return (
        <section className="js-visible">
            <div id="content">
                <div className="col1">
                    {content}
                </div>
            <div className="col2">
               <img src={Img} alt="Profile"/>
            </div>
        </div>
    </section>
        )
}
export default Bio;