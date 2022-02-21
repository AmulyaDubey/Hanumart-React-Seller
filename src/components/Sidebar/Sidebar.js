import React, { useState } from "react";
import "./SidebarStyle.css";

const SideBar = ({ options }) => {
  const [isOpen, setIsOpen] = useState(!isSmallScreen());

  function isSmallScreen() {
    if (window.screen.width <= 489) {
      return true;
    } else return false;
  }

  function openSidebar() {
    setIsOpen(true);
  }

  function closeSidebar() {
    setIsOpen(false);
  }

  return (
    <div className="sidebar">
      <div
        className="w3-bar-block w3-border-right sidebar sidebar-content"
        style={{ display: isOpen ? "block" : "none" }}
        id="mySidebar"
      >
        <button
          onClick={() => {
            closeSidebar();
          }}
          className="sidebar-item p-2 btn-responsive text-right"
        >
          <i class="fa fa-times fa-xl" aria-hidden="true"></i>
        </button>
        {options.map((option) => (
          <a href="/" className="sidebar-item w3-button btn-responsive">
            {option}
          </a>
        ))}
      </div>
      <div
        className="sidebar__toggle__bar"
        style={{ display: isOpen ? "none" : "block" }}
      >
        <button
          className="w3-button w3-xlarge"
          onClick={() => {
            openSidebar();
          }}
        >
          ☰
        </button>
      </div>
    </div>
  );
};

export default SideBar;
