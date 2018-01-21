import React, {Component} from 'react';
import {Close, Open} from "../Stateless/Boxes";
import '../../css/style.css';

export default class MapNews extends Component{
    constructor(){
        super();
        this.state = {status:[true]}
    }
    toggle(num) {
        let array = this.state.status;
        array[num] = !array[num];
        this.setState({status: array}   );
        }
    render(){
        return (
            <div>
                <ul>{this.props.news.map((elem, ind) => <li  key={elem.ID}>
                        <div style={{cursor: 'pointer'}} onClick={() => this.toggle(ind)}>
                            <span className="label">{elem.title}</span>
                            <span className="date">{elem.date}</span>
                        </div>
                        {this.state.status[ind]===true?<Open content={elem.content} id={ind}/>:<Close id={ind}/>}
                </li>)}</ul>
            </div>

        )

    }
}