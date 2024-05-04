import { Link, Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ paddingInline: 30 }}>
      <div className="text-center w-auto">
        <Link to="/" className="text-decoration-none text-black">
          <h1>Travel Blog</h1>
        </Link>
        <p>This is my travel blog</p>
      </div>
      <Outlet />
    </div>
  );
}

export default HomePage;
