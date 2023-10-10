import React from "react";
import data from "../data.json";

const PostList = () => {
  return (
    <div>
      <h1>Hi This is a Title</h1>
        {data.map((item => {
             return <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.content}</p>
            </div>
        }))}
      
    </div>
  );
};

export default PostList