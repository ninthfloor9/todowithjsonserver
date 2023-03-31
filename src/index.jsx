import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import { App } from "./app";
import { App2 } from "./app2";
import { App3 } from "./app3";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <React.Suspense>
        <App />
        <App2 />
        <App3 />
      </React.Suspense>
    </RecoilRoot>
  </React.StrictMode>
);
