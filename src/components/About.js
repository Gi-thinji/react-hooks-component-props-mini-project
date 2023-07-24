import React from "react";

function About({image,text}){
    return (
      <div className="App-about">
        <aside>
          <img src={image}/>
          <p>{text}</p>
        </aside>
      </div>
    );
  }

  export default About;