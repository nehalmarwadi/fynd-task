import React from "react";
import { useState } from "react";
import avatar from "../assets/images/avatar-icon.png";
import "./SettingsUser.scss"

const SettingsUser = () => {
  // const { authDispatch } = useAuth();
  // const navigate = useNavigate();
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
    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    // const file = event.target.files[0];
    console.log(file);
  };

  const updateUserSetting = () => {};

  return (
    <section className="section-signup">
      <div className="signup-container">
        <div className="signup-custom ">
          <div className="signup-box ">
            <h3 className="heading-signup">Profile Settings</h3>

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
                <button className="signup-signup" onClick={updateUserSetting}>
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsUser;
