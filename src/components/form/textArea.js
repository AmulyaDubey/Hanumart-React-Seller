import React from "react";

const TextArea = ({ label, required, name, defaultValue }) => {
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
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <textarea
        style={styles.input}
        name={name}
        required={required}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default TextArea;
