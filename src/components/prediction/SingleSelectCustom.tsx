import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { SingleSelectField, SingleSelectOption } from "@dhis2/ui";

const SingleSelectCustom = ({ title, label, selected, onChange, disabled, values }: any) => {
  return (
    <div>
      <h2>{title}</h2>
      <SingleSelectField
        filterable
        disabled={disabled}
        placeholder={label}
        selected={selected}
        onChange={({ selected }) => onChange(selected)}
      >
        {values?.map((d: any) => (
          <SingleSelectOption key={d.id} value={d.id} label={d.value} />
        ))}
      </SingleSelectField>
    </div>
  );
};

SingleSelectCustom.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string,
};

export default SingleSelectCustom;
