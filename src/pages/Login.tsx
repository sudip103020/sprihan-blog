import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const correctEmail = "admin@gmail.com";
  const correctPassword = "123456";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === correctEmail && password === correctPassword) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/about");
    } else {
      setError("Invalid email or password ❌");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg p-4 position-absolute top-50 start-50 translate-middle "
        style={{ width: "380px" }}
      >
        <div className="p-4 text-warning-emphasis bg-secondary-subtle border border-success-subtle rounded-4 mb-4 text-center">
          Login Panel
        </div>

        {error && <p className="text-danger text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="text-success-emphasis form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="text-success-emphasis form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <p className="text-center mt-3 text-muted" style={{ fontSize: "14px" }}>
          © Sprihan_App
        </p>
      </div>
    </div>
  );
};

export default Login;
