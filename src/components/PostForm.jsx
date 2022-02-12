import React, { useEffect, useState } from "react";
import moment from "moment";
const PostForm = ({ posts, setPosts,setDisplay }) => {
  const [content, setContent] = useState("");
  const [images, setImages] = useState("");
  const [imageURLs, setImageURLs] = useState("");

  const contentHandler = (e) => {
    setContent(e.target.value);
  };
  const imageHandler = (e) => {
    setImages([...e.target.files]);
  };
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = URL.createObjectURL(images[0]);
    setImageURLs(newImageUrls);
  }, [images]);

  const submitHandler = (e) => {
    e.preventDefault();
    let user = JSON.parse(sessionStorage.getItem("currentUser"));

    setPosts([
      ...posts,
      {
        content: content,
        name: user[0].name,
        date: moment().format("MMMM Do YYYY, h:mm:ss a"),
        id: Math.random() * 1000,
        image: imageURLs,
      },
    ]);
    setContent("");
    setImageURLs(""); 
    setDisplay(false);
  };

  return (
    <React.Fragment>
      <form className="ui form" onSubmit={submitHandler}>
        <div className="field">
          <textarea
            type="text"
            rows="2"
            name="content"
            value={content}
            onChange={contentHandler}
          >
            {content}
          </textarea>
        </div>
        <div className="field">
          <input
            type="file"
            name="file"
            multiple
            accept="image/*"
            id="file"
            value=""
            onChange={imageHandler}
          />
        </div>
        <button className="ui button" type="submit">
          Post
        </button>
      </form>
    </React.Fragment>
  );
};
export default PostForm;
