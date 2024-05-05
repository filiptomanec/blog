import { Link, Outlet } from "react-router-dom";
import packageJson from "../../package.json";

export default function Layout() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header>
        <div className="text-center w-auto mt-4">
          <Link to="/" className="text-decoration-none text-black">
            <h1>Travel Blog</h1>
          </Link>
          <p>This is an example of a travel blog app</p>
        </div>
      </header>
      <div className="px-3 px-lg-5">
        <Outlet />
      </div>
      <footer style={{ marginTop: "auto" }}>
        <div className="border-top w-100 mt-5 p-2">
          <div style={{ width: "50px", marginLeft: "auto" }}>
            V {packageJson.version}
          </div>
        </div>
      </footer>
    </div>
  );
}
