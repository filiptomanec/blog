import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostList from "./components/PostList";
import { comments } from "./data/comments";
import PostPage from "./pages/PostPage";

function App() {
  useEffect(() => {
    sessionStorage.setItem("comments", JSON.stringify(comments));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />}>
            <Route path="/" element={<PostList />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
