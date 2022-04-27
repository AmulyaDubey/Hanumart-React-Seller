import React from "react";

const Select = ({
  label,
  handleChange,
  name,
  list,
  required,
  defaultValue,
}) => {
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
        &nbsp; {required && <span style={{ color: "red" }}>*</span>}
      </label>

      <select
        style={styles.input}
        onChange={(event) => (handleChange ? handleChange(event, name) : {})}
        required={required}
        name={name}
        value={defaultValue}
      >
        <option value="none" selected disabled hidden>
          Select an Option
        </option>
        {list.map((item) => (
          <option value={item.isoCode || item} dataValue={item}>
            {item.name || item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
