import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import { App3 } from "./app3";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <React.Suspense>
        <App3 />
      </React.Suspense>
    </RecoilRoot>
  </React.StrictMode>
);
