import React from 'react';
import '../css/news.css';

export const Opened =({content,id})=>{
      return <div dangerouslySetInnerHTML={{__html:content}} id={id} className={"article-opener"}></div>
};

export const Closed =({id})=>{
    return(
        <div id={id} className={"article"}></div>
    );
};