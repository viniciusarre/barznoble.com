import React from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter,Switch} from 'react-router-dom';

/*importing CSS*/
import './css/_bio.scss';
import './css/_buy.scss';
import './css/_gallery.scss';
import './css/__style.css';

import './css/_layout.scss';
import './css/_nav.scss';
import './css/_news.scss';
import './css/_video.scss';
import './css/style.scss';

/*Components*/
import Header from "./Components/header";
import Home from "./Components/home";
// import News from "./Components/news";
import Listen from './Components/listen';
import Buy from './Components/buy';
import FetchBio from "./Components/fetchBio";
import About from "./Components/about";
import FetchNews from "./Components/FetchNews";

ReactDOM.render(
            <BrowserRouter>
                <div>
                    <div id="page">
                        <div id="page-bg-overlay"></div>
                        <Header/>
                        <div id="main">
                            <Switch>
                                <Route exact path="/" component={Home}></Route>
                                <Route exact path="/news/" component={FetchNews}></Route>
                                <Route exact path="/listen" component={Listen}></Route>
                                <Route exact path="/buy" component={Buy}></Route>
                                <Route exact path="/bio" component={FetchBio}></Route>
                                <Route exact path="/album" component={About}></Route>
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


