import React from "react";

const Heading = ({ title, viewAll, size }) => {
  const styles = {
    heading_title: {
      margin: "0",
      fontSize: size === "small" ? "20px" : "28px",
      color: "var(--blue)",
      fontWeight: 700,
    },
    view_all_text: {
      fontSize: "14px",
    },
    horizontal_line: {
      margin: 0,
    },
  };
  return (
    <div className="full-width">
      <div className="d-flex justify-content-between align-items-center full-width heading__flex">
        <p style={styles.heading_title}>{title}</p>
        {viewAll && (
          <a href="/search" style={styles.view_all_text} className="blue-text">
            View All >>
          </a>
        )}
      </div>
      <hr className="blue-text" style={styles.horizontal_line} />
    </div>
  );
};
export default Heading;
