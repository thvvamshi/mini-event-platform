import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const loggedIn = isAuthenticated();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    cursor: "pointer"
  };

  return (
    <div
      style={{
        padding: "12px 20px",
        background: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {/* LOGO */}
      <span
        onClick={() => navigate("/")}
        style={{ fontWeight: "bold", cursor: "pointer" }}
      >
        Mini Event Platform
      </span>

      {/* NAV LINKS */}
      <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
        <span onClick={() => navigate("/")} style={linkStyle}>
          Events
        </span>

        {!loggedIn && (
          <>
            <span onClick={() => navigate("/login")} style={linkStyle}>
              Login
            </span>
            <span onClick={() => navigate("/signup")} style={linkStyle}>
              Signup
            </span>
          </>
        )}

        {loggedIn && (
          <>
            <span onClick={() => navigate("/create")} style={linkStyle}>
              Create
            </span>
            <span onClick={() => navigate("/dashboard")} style={linkStyle}>
              Dashboard
            </span>
            <button
              onClick={logout}
              style={{ cursor: "pointer", padding: "4px 8px" }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
