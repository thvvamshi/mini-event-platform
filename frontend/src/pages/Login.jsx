import { useState } from "react";
import api from "../api/axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async e => {
    e.preventDefault();
    const res = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    navigate("/");
  };

  return (
    <form onSubmit={submit} style={{ maxWidth: 300, margin: "40px auto" }}>
      <h3>Login</h3>

      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        style={{ width: "100%", marginBottom: 8 }}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        style={{ width: "100%", marginBottom: 8 }}
      />

      <button style={{ width: "100%" }}>Login</button>

      <p>
        No account? <Link to="/signup">Signup</Link>
      </p>
    </form>
  );
}
