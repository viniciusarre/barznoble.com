import React, {Component} from 'react';
import {Closed, Opened} from "../Components/Boxes";


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
            <ul>{this.props.news.map((elem, ind) => <li  key={elem.ID}>
                <div>
                    <div style={{cursor: 'pointer'}} onClick={() => this.toggle(ind)}>
                        <span className="label">{elem.title}</span>
                        <span className="date">{elem.date}</span>
                    </div>
                    {this.state.status[ind]===true?<Opened content={elem.content} id={ind}/>:<Closed id={ind}/>}
                    </div>

            </li>)}</ul>

        )

    }
}