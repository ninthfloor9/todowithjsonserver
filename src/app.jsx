import React from "react";
import { useRecoilValue } from "recoil";
import { fetchPosts } from "./recoil";
import { postPosts } from "./fetch";

/* 
4. render getPosts
5. input form
6. input rendering
7. Render posts fetch Response(title, body)
8. post input posts 
9. 4. error handling */

const OnSubmitHandler = async (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  try {
    const response = await postPosts(title);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// Render
export const App3 = () => {
  const data = useRecoilValue(fetchPosts);

  return (
    <div>
      {/* 4. render getPosts */}
      {data?.map((data) => (
        <div key={data._id}>
          <h4 className="title">{data.title}</h4>
          <p className="body">{data.body}</p>
        </div>
      ))}
      {/* input form */}
      <form onSubmit={OnSubmitHandler}>
        <input name="todo" />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};
