import React from "react";
import Header from "./header/Header";
import Nav from "./navbar/Navigation";
import MainContent from "./main/MainContent";
import Footer from "./footer/Footer";

export default function index() {
  return (
    <div>
      <div className="container">
        <div className="header">
          {/* menggunakan props */}
          <Header name="header" />
        </div>
        <div className="nav">
          <Nav name="navigation" />
        </div>
        <div className="main-content">
          <MainContent name="main content" />
        </div>
        <div className="footer">
          <Footer name="footer" />
        </div>
      </div>
    </div>
  );
}
