import PropTypes from "prop-types";
import styles from "./styles/Input.module.css";
import React from "react";
import { InputField } from "@dhis2/ui";


const Input = ({ label, title, value, onChange }: any) => {


    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <span>{label}</span>
            <InputField
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

Input.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Input;
