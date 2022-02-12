import React, { useState } from "react";
import PostForm from "./PostForm";
import faker from "@faker-js/faker";

const PostCard = ({ posts, setPosts, display,setDisplay }) => {
  
  const showHandler = () => {
    setDisplay(true);
  };

  return (
    <React.Fragment>
      {display ? <PostForm posts={posts} setPosts={setPosts} display = {display} setDisplay={setDisplay} /> : <button className="ui button" type="submit" onClick={showHandler}>
        Add post &nbsp; <i className="plus icon"></i>
      </button>}
      
      {posts.map((post) => (
        <div className="ui card post" key={post.id}>
          <div className="content">
            <div className="right floated meta">{post.date}</div>
            <img
              className="ui avatar image"
              alt={post.name}
              src={faker.image.avatar()}
            />
            {post.name}
          </div>
          <div className="extra content">
            <div className="ui large transparent left icon input">
              {post.content}
            </div>
          </div>
          <div className="image">
            <img src={post.image} />
          </div>
          <div className="extra content"></div>
        </div>
      ))}
    </React.Fragment>
  );
};
export default PostCard;
