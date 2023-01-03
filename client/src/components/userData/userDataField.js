import React from "react";

const userDataField = ({
  input,
  label,
  type,
  compulsory,
  meta: { error, touched },
}) => {
  return (
    <div>
      <label>{label}</label>

      <input {...input} type={type} style={{ marginBottom: "5px" }} />
      {compulsory === true && (
        <div className="red-text" style={{ marginBottom: "20px" }}>
          {touched ? error : ""}
        </div>
      )}
    </div>
  );
};
export default userDataField;
