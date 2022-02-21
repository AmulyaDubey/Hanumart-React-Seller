import React from "react";

const Select = ({ label, handleChange, name, list }) => {
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

      <select
        style={styles.input}
        onChange={(event) => handleChange(event, name)}
      >
        <option value="none" selected disabled hidden>
          Select an Option
        </option>
        {list.map((item) => (
          <option value={item.isoCode} dataValue={item}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;