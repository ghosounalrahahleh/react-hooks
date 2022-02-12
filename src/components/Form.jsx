import React, { useState } from "react";
import Comment from "./Comment.jsx";
import CommentApproval from "./CommentApproval.jsx";
import faker from "@faker-js/faker";
const Form = ({
  comments,
  setComments,
  approvedComments,
  setApprovedComments,
  display,
  setDisplay,
}) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const commentHandler = (e) => {
    setComment(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setComments([
      ...comments,
      {
        name: name,
        Comment: comment,
        id: Math.random() * 1000,
      },
    ]);
    setName("");
    setComment("");
    setDisplay(false);
  };
  const showHandler = () => {
    setDisplay(true);
  };
  return (
    <React.Fragment>
     
      {display ? (
        <form className="ui form" onSubmit={submitHandler}>
        <div className="field">
          <label>User Name</label>
          <input
            type="text"
            name="user-name"
            onChange={nameHandler}
            value={name}
          />
        </div>
        <div className="field">
          <label>Your Comment</label>
          <input
            type="text"
            name="comment"
            onChange={commentHandler}
            value={comment}
          />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
      ) : (
        <button className="ui button" type="submit" onClick={showHandler}>
          Add comment &nbsp; <i className="plus icon"></i>
        </button>
      )}
      {approvedComments.map((comment) => (
        <div className="card comment" key={comment.id}>
          
          <Comment comment={comment} avatar={faker.image.avatar()} />
        </div>
      ))}
      <CommentApproval
        comments={comments}
        setComments={setComments}
        approvedComments={approvedComments}
        setApprovedComments={setApprovedComments}
      />
    </React.Fragment>
  );
};
export default Form;
