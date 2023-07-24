import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


function App() {
const defaultImg = "https://via.placeholder.com/215"


  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image ? blogData.image : defaultImg} text={blogData.about}/>
      <ArticleList blogData= {blogData.posts}/>
      
    </div>
  );
}

export default App;
