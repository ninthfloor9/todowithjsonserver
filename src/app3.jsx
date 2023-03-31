import React from "react";
import { useRecoilValue } from "recoil";
import { fetchPosts } from "./recoil";

/* 
4. render getPosts
5. input form
6. input rendering
7. Render posts fetch Response(title, body)
8. post input posts 
9. 4. error handling */

// Render
export const App3 = () => {
  const data = useRecoilValue(fetchPosts);

  return (
    /*     4. render getPosts */
    <div>
      {data?.map((data) => (
        <div key={data.id}>
          <h4 className="title">{data.id}</h4>
          <p className="body">{data.title}</p>
        </div>
      ))}
    </div>
  );
};
