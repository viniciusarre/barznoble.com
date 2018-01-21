import React from 'react'; //imports React
import '../../css/news.css'; //imports CSS

//creates a component called open that is going to receive the content and the id as props...
export const Open =({content,id})=>{//returns the div with the content and its
// respective id and the respective css class to show it has been opened...
      return <div dangerouslySetInnerHTML={{__html:content}} id={id} className={"article-opener animateIn"}></div>
};
//creates a component called closed that only returns the id
export const Close =({id})=>{

    return(//if the box is closed, it only adds its id to it and returns adds the CSS class that shows the closed box...
        <div id={id} className={"article animateOut"}></div>
    );
};