import { useState } from "react";
import i18n from "@dhis2/d2-i18n";
import { Button, NoticeBox } from "@dhis2/ui";
import styles from "./styles/ModelConfigurationPage.module.css";
import React from "react";
import ModelConfigurationForm from "./ModelConfigurationForm";
import TableModel from "./TableModel";

const ModelConfigurationPage = () => {
  const [state, setstate] = useState(false)

  return (
    <div className={styles.container}>
      <h1>{i18n.t("Models")}</h1>
      <Button
        primary
        onClick={() => setstate(!state)}
      >
        {!state ? "Add New" : "List Models"}
      </Button>
      {!state ?
        <TableModel />
        :
        <ModelConfigurationForm />
      }
    </div>
  );
};

export default ModelConfigurationPage;
