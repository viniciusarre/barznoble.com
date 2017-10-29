import React, {Component} from 'react';


export default class MapNews extends Component{
    constructor(){
        super();
        this.state = {status:[true]}
    }

    init_status(){
        this.setState({status:[...false]})
    }

    setClass(ind){
        if(ind===0){
            return "article-opener";
        }
        else{
            return "article";
        }
    }

    toggle(num) {
        if (this.state.status.length === 0) {
            this.props.news.forEach(this.init_status.bind(this))
        } else {
            let array = this.state.status;
            if (array[num]) {
                array[num] = !array[num];
                document.getElementById(num).className = "article";
            } else {
                array[num] = true;
                document.getElementById(num).className = "article-opener";
            }
            this.setState({status: array});
        }
    }

    render(){
        return (
            <ul>{this.props.news.map((elem, ind) => <li style={{cursor: 'pointer'}} key={elem.ID} className='close' onClick={() => this.toggle(ind)}>
                <div><span className="label">{elem.title}</span> <span className="date">{elem.date}</span>
                    <div dangerouslySetInnerHTML={{__html:elem.content}} id={ind} className={this.setClass(ind)}></div>
                </div>
            </li>)}</ul>

        )

    }
}
