import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "admin@hire8.com" &&
      password === "Hire8@2026"
    ) {
      navigate("/dashboard");
    } else {
      alert("Invalid Login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-3xl shadow-xl w-[400px]"
      >
        <h1 className="text-3xl font-bold mb-6">
          Hire8 Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-orange-500 text-white p-3 rounded"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default AdminLogin;