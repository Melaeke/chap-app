import { useState } from "react";
import i18n from "@dhis2/d2-i18n";
import { Button } from "@dhis2/ui";
import styles from "./styles/ModelConfigurationPage.module.css";
import React from "react";
import Input from "./InputField";
import DataInput from "./DataInput";


const ModelConfigurationPage = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [dataInputs, setDataInputs] = useState([])


  return (
    <div className={styles.container}>
      <h1>{i18n.t("Make prediction data")}</h1>
      <Input
        title={i18n.t("Name")}
        label={i18n.t("The name of the configuration")}
        value={name}
        onChange={e => { setName(e.value) }}
      />

      <Input
        title={i18n.t("Description")}
        label={i18n.t("The description of the model")}
        value={description}
        onChange={e => setDescription(e.value)} />

      <DataInput
        title={i18n.t("Data inputs")}
        label={i18n.t("Please provide the inputs for the model")}
        list={dataInputs}
        onChange={(e: any) => setDataInputs(e)}
      />

      <Button onClick={e => {
        let toSave = {
          name: name,
          description: description,
          dataInputs: dataInputs
        }
        console.log(toSave)
      }
      }>Save</Button>
    </div>
  );
};

export default ModelConfigurationPage;
