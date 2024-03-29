import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import "./App.css";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import Content from "./Content";
import Admin from "./Admin/Admin";
import Login from "./Admin/Login";

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap all components with Router */}
      <>
        {/* <Login /> */}
        <Admin />
        {/* <Navbar />
        <Content />
        <Footer /> */}
      </>
    </Router>
  );
}

export default App;
