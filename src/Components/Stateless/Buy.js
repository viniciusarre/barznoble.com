
import React from 'react';//imports React
//other component
const Buy = () => {
    document.title = "Barz Noble - Buy"; //changes the title...

    //renders the content of the page...
    return(
        <section className="js-visible default">
            <div id="content">
                <h1>Buy Music</h1>
                <div className="col1">
                    <img src="http://barznoble.files.wordpress.com/2013/09/cover.jpg?w=450" alt="Album Cover" style={{width: '100%'}}/>
                </div>
                <div className="col2">
                    <p className="buytext">
                        Barz Noble's new album, <br className="mobile-only"/> Symphonic Signatures,<br className="mobile-only"/> can be purchased at the following locations:
                    </p>
                    <p className="buylink"><a href="http://msclvr.co/barznoblesymphonicsignatures">iTunes</a></p>
                    <p className="buylink"><a href="http://www.amazon.com/s/qid=1378179095/ref=sr_st?keywords=barz+noble&redirect=true&rh=k%3Abarz+noble%2Ci%3Adigital-music&rd=1&sort=albumrank">Amazon</a></p>
                    <p className="buylink"><a href="http://www.emusic.com/album/barz-noble/symphonic-signatures/14374426/">E Music</a></p>
                    <p className="buylink"><a href="http://www.deezer.com/en/album/6889102">Deezer</a></p>
                </div>
            </div>
        </section>
    )
};
export default Buy; //exports it...
