import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter,Switch} from 'react-router-dom';

/*importing CSS*/
import './css/_bio.scss';
import './css/_buy.scss';
import './css/_gallery.scss';
import './css/style.scss';
import './css/_layout.scss';
import './css/_nav.scss';
import './css/_news.scss';
import './css/_video.scss';
import './css/transitions.css';


/*Components*/
import Header from "./Components/Stateful/Header";
import Home from "./Components/Stateless/Home";
import Listen from './Components/Stateful/Listen';
import Buy from './Components/Stateless/Buy';
import Bio from "./Components/Stateful/Bio";
import About from "./Components/Stateless/About";
import Gallery from "./Components/Stateful/Gallery";
import Video from "./Components/Stateful/Video";
import News from "./Components/Stateful/News";


ReactDOM.render(
            <BrowserRouter>
                <div>
                    <div id="page">
                        <div id="page-bg-overlay"></div>
                        <Header/>

                            <div id="main">

                                        <Switch>
                                            <Route exact path="/" component={Home}></Route>
                                            <Route exact path="/news/" component={News}></Route>
                                            <Route exact path="/listen" component={Listen}></Route>
                                            <Route exact path="/buy" component={Buy}></Route>
                                            <Route exact path="/bio" component={Bio}></Route>
                                            <Route exact path="/album" component={About}></Route>
                                            <Route exact path="/photos" component={Gallery}></Route>
                                            <Route exact path="/videos" component={Video}></Route>
                                        </Switch>


                            </div>

                        <div id="footer">
                        </div>

                        <ul id="social">
                            <li id="linkFace"><a href="http://www.facebook.com/pages/Barz-Noble/115338145195086">Facebook</a></li>
                            <li id="linkTwit"><a href="https://twitter.com/#!/barznoble">Twitter</a></li>
                            <li id="linkRev" ><a href="http://www.reverbnation.com/barznobleakabnoble">Reverb Nation</a></li>
                        </ul>

                    </div>
                    <div className="bg blurred"></div>
                </div>
            </BrowserRouter>,document.getElementById('root'));


