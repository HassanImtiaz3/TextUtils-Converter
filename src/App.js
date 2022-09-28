import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";
import Alert from "./component/Alert";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [darkMode, setdarkMode] = useState("dark");
  const [btnText, setbtnText] = useState("Light Mode");

  const [myAlert, setmyAlert] = useState(null);

  const showAlert = (type, message) => {
    setmyAlert({
      type: type,
      msg: message,
    });

    setTimeout(() => {
      setmyAlert(null);
    }, 800);
  };

  const turnMode = () =>
   {
    if (darkMode === "dark") 
    {
        document.body.style.backgroundColor = "#000000ef";
        document.body.style.color = "white";
        setbtnText("Dark Mode");
        setdarkMode("light");
        showAlert("success", "Dark Mode is Enabled");
        document.title = "Text-Dark Mode";
    } 
    else
    {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setbtnText("Light Mode");
      setdarkMode("dark");
      showAlert("success", "Dark Mode is Disabled");
      document.title = "Text-Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>
       
          <Navbar
            title="HoomanProduction"
            mode={darkMode}
            btn={btnText}
            func={turnMode}
          />
          <Alert alert={myAlert} />
          <Routes>
            <Route path="/about" element={<About mode={darkMode} />} />
            <Route
              path="/"
              element={<TextForm heading="Message Us" mode={darkMode} />}
            />
          </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
