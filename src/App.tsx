import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostList from "./components/PostList";
import PostPage from "./pages/PostPage";
import { CommentProvider } from "./contexts/CommentProvider";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">
      <CommentProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<HomePage />}>
              <Route path="/" element={<PostList />} />
              <Route path="/post/:id" element={<PostPage />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </CommentProvider>
    </div>
  );
}

export default App;
