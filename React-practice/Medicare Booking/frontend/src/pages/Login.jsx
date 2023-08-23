import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts";
import "../pages/Login.scss";

const Login = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "patient",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginCLickHandler = async () => {
    try {
      if (formData.role === "patient") {
        const {
          data: { result },
        } = await axios.post("http://localhost:3000/user/login", {
          email: formData.email,
          password: formData.password,
        });
        localStorage?.setItem(
          "login",
          JSON.stringify({
            isUserLoggedIn: true,
            token: result,
            isDoctor: false,
          })
        );
        authDispatch({
          type: "LOGIN",
          payload: { token: result, isDoctor: false },
        });
      } else {
        const {
          data: { result },
        } = await axios.post("http://localhost:3000/doctor/login", {
          email: formData.email,
          password: formData.password,
        });
        localStorage?.setItem(
          "login",
          JSON.stringify({
            isUserLoggedIn: true,
            token: result,
            isDoctor: true,
          })
        );
        authDispatch({
          type: "LOGIN",
          payload: { token: result, isDoctor: true },
        });
      }
      navigate("/");
    } catch (e) {
      console.log(e, 'Error Occured')
    }
  };

  return (
    <section className="login-container">
      <div className="login-custom">
        <h3 className="login-heading ">
          Hello! <span className="login-span">Welcome</span> Back
        </h3>
        <div className="login-form ">
          <div className="div-login ">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input-login "
              required
            />
          </div>
          <div className="div-login">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="input-login "
              required
            />
          </div>

          <div className="op-signup ">
            <label className="label-signup">
              Are you a:
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="role-signup"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor </option>
              </select>
            </label>
          </div>

          <div className="sub-login ">
            <button
              className="btn-login"
              onClick={loginCLickHandler}
            >
              Login
            </button>
          </div>

          <p className="para-login ">
            Don&apos;t have an account?
            <Link to="/register" className="register-login">
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Login;
