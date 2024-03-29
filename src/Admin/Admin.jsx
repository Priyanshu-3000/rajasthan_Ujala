import { React, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import AddPosts from "./AddPosts";
import AllPosts from "./AllPosts";
import Category from "./Category";
import Epaper from "./Epaper";

export default function Admin() {
  const [isOpen, setIsOpen] = useState(false);
  const [currecttab, setcurrenttab] = useState("Dashboard");

  const toggleSidebar = () => {
    {
      isOpen ? !isOpen : setIsOpen(!isOpen), setIsOpen(!isOpen);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <button className="toggle-button" onClick={toggleSidebar}>
            ☰
          </button>
          <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <h2>Rajasthan Ujala</h2>
            <hr />
            <a href="#" onClick={() => setcurrenttab("Dashboard")}>
              Dashboard
            </a>
            <a href="#" onClick={() => setcurrenttab("Category")}>
              Category
            </a>
            <a href="#" onClick={() => setcurrenttab("AddPosts")}>
              Add Post
            </a>
            <a href="#" onClick={() => setcurrenttab("AllPosts")}>
              All Post
            </a>
            <a href="#" onClick={() => setcurrenttab("Epaper")}>
              E-paper
            </a>
            <a href="#" onClick={() => setcurrenttab("Subscribe")}>
              Subscribe
            </a>
          </div>
        </div>
        {currecttab === "Dashboard" && <Dashboard />}
        {currecttab === "AddPosts" && <AddPosts />}
        {currecttab === "AllPosts" && <AllPosts />}
        {currecttab === "Category" && <Category />}
        {currecttab === "Epaper" && <Epaper />}
      </div>
    </div>
  );
}
