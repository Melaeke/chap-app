import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { InputField } from "@dhis2/ui";

const InputFieldCustom = ({ title, label, value, onChange }: any) => {
  return (
    <div>
      <h2>{title}</h2>
      <InputField
        placeholder={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

InputFieldCustom.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default InputFieldCustom;
