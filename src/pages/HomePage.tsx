import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ paddingInline: 30 }}>
      <div className="text-center w-auto">
        <h1>Travel Blog</h1>
        <p>This is my travel blog</p>
      </div>
      <Outlet />
    </div>
  );
}

export default HomePage;
