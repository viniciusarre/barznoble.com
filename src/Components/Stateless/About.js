import React from 'react';//importing react
import '../../css/style.css';//importing css


//another stateless component...
const About = () => {
    //changing de document's title
    document.title = "Barz Noble - Album";

    return(

        <section id="about" className="js-visible default">
            <div id="content">
                <h1>About The Album</h1>
                <div className="col1">
                    {/*rendering the text with JSX... it looks like html, but there are some other differences...
                                    https://jsx.github.io/

                    */}

                    <p>
                        The upcoming freshman solo release “Symphonic Signatures” the debut album
                        from the artist Barz Noble was produced, recorded, and mixed by Zoltan
                        Johnson. The artist Barz Noble emphasizes that both the focus and intent
                        behind the record is to be as a contributing agent of sorts in bridging the gap
                        of spiritually sound lyricism with a myriad but mature palette of audio hip-
                        hop compositions with elements ranging from reggae, rock, classical, r&b,
                        bass, and a world sound in the final versions of the individual tracks submitted
                        respectively to make a quality project. The purpose throughout the recording
                        process of this album was to not overbear but to compliment the artistic
                        approach in executing a clear message of faith and wisdom in tackling a number
                        of issues that are covered on each track for a mature record where both young
                        and old can get something beneficial while bobbing their heads to is the hope
                        of the artist Barz Noble that the album would accomplish.
                    </p>
                </div>

                <div className="col2">
                    <p>
                        The “Symphonic
                        Signatures” project also features collaborations with artist and musical friends
                        alike that include “Warfare Global” featuring U-Turn and Postaboy “What Will It
                        Be” featuring Rudell and “Release Yourself” featuring Peter Runks and the Late
                        Kirk Hall aka Nash Cashes R.I.P the last of a number of tracks Barz Noble got to
                        record with Nash before his passing. “LIFE MUSIC” is the two words that Barz
                        Noble sums up concerning the collection of songs created for this album leaving
                        room to continue a creative progression in the follow-up that other producers
                        will also add so let the journey begin. STAY TUNED
                    </p>
                </div>
            </div>
        </section>
    )
};


export default About; //exporting it for using in other pages as a single component