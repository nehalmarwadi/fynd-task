/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DoctorsDataContext = createContext();

export function DoctorsDataProvider({ children }) {
  const [doctorsData, setDoctorsData] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const {
          data: { result },
        } = await axios.get("http://localhost:3000/doctor/list");
        console.log(result);
        setDoctorsData(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <DoctorsDataContext.Provider value={{ doctorsData, setDoctorsData }}>
      {children}
    </DoctorsDataContext.Provider>
  );
}

export function useDoctorsData() {
  return useContext(DoctorsDataContext);
}
