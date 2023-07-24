import React from "react";

function Article ({post}){
    const defaultDate = 'January 1, 1970';
    const { title, date = defaultDate, preview, minutes } = post;
    
    
  
    return (
      <div className="App-article">
        <article>
            <h2>{title}</h2>
            <small>{date ? date : defaultDate}</small>
            <p>{preview}</p>
            <p>{minutes} min read</p>   
        </article>
      </div>
    );
  }
  
  export default Article;