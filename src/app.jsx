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
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    try {
      const response = await axios.post(postUrl, { title, body });
      console.log(response); // 응답 코드 확인
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="title" />
        <input name="body" />
        <input type="submit" value="추가" />
      </form>
      {postList ? (
        <div>
          <h2>Last Post:</h2>
          <h3>{postList[postList.length - 1].title}</h3>
          <p>{postList[postList.length - 1].body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
