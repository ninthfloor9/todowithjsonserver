import axios from "axios";
import React, { useEffect, useState } from "react";

const postUrl = "https://jsonplaceholder.typicode.com/posts";
export const App = () => {
  const [postList, setPostList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(postUrl);
    setPostList(response.data);
  };

  const onSubmitHandler = async (e) => {
    const title = e.target.title.value;
    const body = e.target.body.value;
    await axios.post(postUrl, { title, body });
    fetchData();
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="title" />
        <input name="body" />
        <input type="submit" value="추가" />
      </form>
      {postList?.map((post, index) => (
        <div key={post.id}>
          {index === postList.length - 1 && <div>{post.body}</div>}
        </div>
      ))}
    </div>
  );
};
