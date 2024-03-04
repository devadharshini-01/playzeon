import { useState } from "react";

const FormCheck = ({ onChange, checked, name, value }) => {
  return (
    <>
      <Form.Check
        type="checkbox"
        onChange={(event) => onChange(event.target.value)}
        name={name}
        value={value}
        checked={checked}
      />
    </>
  );
};
export default FormCheck;
