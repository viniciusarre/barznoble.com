import React from 'react'; //importing react


//import CSS
import '../../css/style.scss';
import '../../css/_bio.scss';
import '../../css/img_float.css';
import '../../css/transitions.css';

import Img from '../../img/biopic.jpg';
// imports the image's source into Img...
//statelessComponents
const Bio = ({content}) => {

    return (
        <section className="js-visible default">


            <div id="content">

                <div className="col1">

                    {/*Verifies if the type of the props content is string and if so, it sets the inner HTML to
                    the content that was fetched... */}
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

export default Bio; //exports the component...