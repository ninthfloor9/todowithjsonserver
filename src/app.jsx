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
  const body = e.target.body.value;
  const author = e.target.author.value;
  try {
    const response = await postPosts(title, body, author);
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
          <p className="author">{data.author}</p>
        </div>
      ))}
      {/* input form */}
      <form onSubmit={OnSubmitHandler}>
        <input name="title" />
        <input name="body" />
        <input name="author" />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};
