import React from "react";

const Input = ({ label, type, handleChange, name }) => {
  const styles = {
    inputGroup: {
      display: "flex",
      flexDirection: "column",
    },
    input: {
      border: "none",
      backgroundColor: "rgba(0,0,0,0.05)",
      padding: "10px",
      marginBottom: "20px",
    },
  };

  return (
    <div style={styles.inputGroup} className="full-width">
      <label style={styles.label} className="bold">
        {label}
      </label>
      <input
        style={styles.input}
        type={type}
        onChange={(event) => handleChange(event, name)}
      />
    </div>
  );
};

export default Input;
