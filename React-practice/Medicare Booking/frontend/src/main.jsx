import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import 'tailwindcss/tailwind.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter } from "react-router-dom";
import { DoctorsDataProvider, AuthProvider } from "./contexts/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DoctorsDataProvider>
          <App />
        </DoctorsDataProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
