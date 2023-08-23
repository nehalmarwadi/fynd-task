import { useState } from "react";
import "../pages/Signup.scss";
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts";
 
const Signup = () => { 
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    console.log(file);
  };

  const signUpClickHandler = async () => {

    try {
      if (formData.role === "patient") {
        const {
          data: { result },
        } = await axios.post("http://localhost:3000/user/signup", {
          email: formData.email,
          name: formData.name,
          password: formData.password,
          photo: formData.photo,
          gender: formData.gender,
          role: formData.role,
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
        } = await axios.post("http://localhost:3000/doctor/signup", {
          email: formData.email,
          name: formData.name,
          password: formData.password,
          photo: formData.photo,
          gender: formData.gender,
          role: formData.role,
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
      console.log(e, "Error Occured");
    }
  };

  return (
    <section className="section-signup">
      <div className="signup-container">
        <div className="signup-custom ">
          <div className="div-signup ">
            <figure>
              <img src={signupImg} alt="" className="image-signup " />
            </figure>
          </div>

          <div className="signup-box ">
            <h3 className="heading-signup">
              Create an <span className="span-signup">account</span>
            </h3>

            <div>
              <div className="submit-signup ">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-signup"
                  required
                />
              </div>

              <div className="submit-signup ">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-signup "
                  required
                />
              </div>

              <div className="submit-signup ">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="input-signup "
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
                    className="role-signup "
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor </option>
                  </select>
                </label>

                <label className="label-signup">
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="role-signup "
                  >
                    <option value="patient">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="op-signup">
                <figure className="figure-signup ">
                  <img src={avatar} className="avatar-signup" alt="" />
                </figure>

                <div className="upload-section ">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                    className="input-upload "
                  />

                  <label htmlFor="customFile" className=" upload-photo ">
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="end-submit mt-7">
                <button className="signup-signup" onClick={signUpClickHandler}>
                  Sign Up
                </button>
              </div>

              <p className="p-signup">
                Already have an account?
                <Link to="/login" className="login-already">
                  Login
                </Link>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Signup;
