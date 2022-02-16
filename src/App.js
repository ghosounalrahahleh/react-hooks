import React, { useImperativeHandle, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form.jsx";
import Nav from "./components/Nav.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import "./main.css";
import PostCard from "./components/PostCard.jsx";
import Axios from "./components/Axios.jsx";
import Fetch from "./components/Fetch.jsx";
import UsingFetch from "./components/Fetch2.jsx";
import ImperativeHandle from "./components/ImperativeHandle.jsx";

function App() {
  const [comments, setComments] = useState([]);
  const [approvedComments, setApprovedComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [LoggedIn, setLoggedIn] = useState(false);
  const [display, setDisplay] = useState(false);
  return (
    <BrowserRouter>
      <Nav LoggedIn={LoggedIn} setLoggedIn={setLoggedIn} />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Register LoggedIn={LoggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route
            path="/login"
            element={<Login LoggedIn={LoggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route
            path="/comments"
            element={
              <Form
                comments={comments}
                setComments={setComments}
                display={display}
                setDisplay={setDisplay}
                approvedComments={approvedComments}
                setApprovedComments={setApprovedComments}
              />
            }
          />
          <Route
            path="/post"
            element={
              <PostCard
                display={display}
                setDisplay={setDisplay}
                posts={posts}
                setPosts={setPosts}
              />
            }
          />
          <Route path="/posts" element={<Axios />} />
          <Route path="/users" element={<Fetch />} />
          <Route path="/toggle" element={<ImperativeHandle />} />
          <Route path="/fetch" element={<UsingFetch  />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
