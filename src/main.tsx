import "./core/ui/font/_fonts.scss";
import "./core/ui/style/_globals.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

import App from "./core/app/App.tsx";
import {AuthContextProvider} from "./core/context/auth/AuthContext.tsx";
import {CommentContextProvider} from "./core/context/comment/CommentContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CommentContextProvider>
          <App />
        </CommentContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
