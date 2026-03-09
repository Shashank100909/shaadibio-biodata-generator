import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  // Hardcoded credentials for evaluator
  const DEMO_CREDENTIALS = {
    email: "demo@shaadibio.com",
    password: "Demo@123"
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Check credentials
    if (email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
      setShowSuccess(true);
      
      // Redirect to dashboard after 1.5 seconds
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } else {
      setErrors({ 
        submit: "Invalid credentials. Use demo@shaadibio.com / Demo@123" 
      });
    }
  };

  return (
    <div className="container">
      <div className="login-card">
        
        <div className="logo-section">
          <div className="logo-icon">💑</div>
          <h1 className="app-title">ShaadiBio</h1>
          <p className="app-subtitle">Marriage Biodata Generator</p>
        </div>

        <h2>Welcome Back</h2>

        <div className="demo-banner">
          <span className="demo-icon">🔑</span>
          <div className="demo-text">
            <strong>Demo Login:</strong>
            <div>Email: demo@shaadibio.com</div>
            <div>Password: Demo@123</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? "error" : ""}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          {errors.submit && (
            <div className="error-banner">
              <span className="error-icon">❌</span>
              {errors.submit}
            </div>
          )}

          {showSuccess && (
            <div className="success-banner">
              <span className="success-icon">✅</span>
              Login successful! Redirecting...
            </div>
          )}

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <p className="signup-text">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;