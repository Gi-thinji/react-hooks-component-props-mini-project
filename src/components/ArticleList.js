import React from "react";

import Article from "./Article";

function ArticleList({blogData}){
    console.log(blogData)

    return (
      <div className="App-article-list">
        <main>
        {blogData.map((post) => (
          <Article key={post.id} post={post} />
        ))} 
        </main>
      </div>
    );
  }

  export default ArticleList;