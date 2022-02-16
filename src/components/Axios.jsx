import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      {data.map((post) => (
        <div className="ui card " key={post.id}>
          <div className="content">
            <div className="header">{post.title}</div>
          </div>
          <div className="content">
            <div className="ui small feed">
              <div className="event">
                <div className="content">
                  <div className="summary">{post.body}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};
export default Axios;
