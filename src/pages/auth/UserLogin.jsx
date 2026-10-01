import { useState } from "react";

import {
  TrainFront,
  UserRound,
  LockKeyhole,
  ArrowRight,
  Eye,
  EyeOff,
  ArrowLeft
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { loginUser } from "../../services/authService";

function UserLogin() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    if (!userId || !password) {
      setError(
        "Please enter User ID and Password."
      );
      return;
    }

    setLoading(true);

    setTimeout(() => {

      const result = loginUser(
        userId,
        password
      );

      if (!result.success) {
        setError(result.message);
        setLoading(false);
        return;
      }

      navigate("/user");

    }, 500);
  };


  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* HEADER */}

        <div className="auth-header">

          <button
            className="auth-back"
            onClick={() => navigate("/login")}
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <div className="auth-brand">

            <div className="auth-logo">
              <TrainFront size={27} />
            </div>

            <div>
              <h2>Railway Block Planner</h2>
              <span>User Portal</span>
            </div>

          </div>

        </div>


        {/* LOGIN */}

        <div className="auth-content">

          <div className="auth-title">

            <div className="auth-title-icon user-icon">
              <UserRound size={26} />
            </div>

            <h1>
              User Login
            </h1>

            <p>
              Sign in to access the railway
              maintenance portal.
            </p>

          </div>


          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}


          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            {/* USER ID */}

            <div className="form-group">

              <label>
                User ID
              </label>

              <div className="input-wrapper">

                <UserRound size={19} />

                <input
                  type="text"
                  placeholder="Enter your User ID"
                  value={userId}
                  onChange={(e) =>
                    setUserId(e.target.value)
                  }
                />

              </div>

            </div>


            {/* PASSWORD */}

            <div className="form-group">

              <label>
                Password
              </label>

              <div className="input-wrapper">

                <LockKeyhole size={19} />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>


            <button
              className="auth-submit"
              type="submit"
              disabled={loading}
            >

              {loading
                ? "Signing in..."
                : "Sign In"}

              {!loading && (
                <ArrowRight size={19} />
              )}

            </button>

          </form>


          {/* DEMO */}

          <div className="demo-credentials">

            <strong>
              Demo User Account
            </strong>

            <div>
              User ID: <b>ENG1024</b>
            </div>

            <div>
              Password: <b>1234</b>
            </div>

          </div>


          <button
            className="switch-login"
            onClick={() =>
              navigate("/login/admin")
            }
          >
            Login as Administrator →
          </button>

        </div>

      </div>

    </div>
  );
}

export default UserLogin;