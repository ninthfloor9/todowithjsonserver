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
        <ul>
          {postList.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
