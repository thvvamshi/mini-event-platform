import { useState } from "react";
import api from "../api/axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async e => {
    e.preventDefault();
    await api.post("/auth/register", form);
    navigate("/login");
  };

  return (
    <form onSubmit={submit} style={{ maxWidth: 300, margin: "40px auto" }}>
      <h3>Signup</h3>

      <input
        placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })}
        style={{ width: "100%", marginBottom: 8 }}
      />

      <input
        placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
        style={{ width: "100%", marginBottom: 8 }}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })}
        style={{ width: "100%", marginBottom: 8 }}
      />

      <button style={{ width: "100%" }}>Create Account</button>

      <p>
        Already have account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
}
