import React from "react";

export default function Header() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <a className="nav-item">
          <p className="title">Multitask Manager</p>
        </a>
      </div>

      <div className="nav-center">
        <a className="nav-item">
          <span className="icon">
            <i className="fa fa-github"></i>
          </span>
        </a>
        <a className="nav-item">
          <span className="icon">
            <i className="fa fa-linkedin"></i>
          </span>
        </a>
      </div>

      <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div className="nav-right nav-menu">
        <a className="nav-item">Home</a>
        <a className="nav-item">Documentation</a>
        <a className="nav-item">Blog</a>
      </div>
    </nav>
  );
}
