import React, { Component } from "react";
import "../navbar/navbar.styles.css";
import { withRouter } from "react-router-dom";

class Tab extends Component {
  render() {
    const { options } = this.props;
    const { pathname } = window.location;
    const activeTab = pathname.substr(pathname.lastIndexOf("/") + 1);
    
    return (
      <div className="horizontal__tab">
        {options.map((option) => (
          <div className={`tabName ${activeTab === option.toLowerCase()? "active__tab": ""}`}>
            <a href={`/seller/${option.toLowerCase()}`}>
              {option}
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(Tab);
