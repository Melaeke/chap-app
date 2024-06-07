import { useState } from "react";
import i18n from "@dhis2/d2-i18n";
import { Button, NoticeBox, SingleSelectField, SingleSelectOption } from "@dhis2/ui";
import styles from "./styles/ModelConfigurationPage.module.css";
import React from "react";
import Input from "./InputField";
import DataInput from "./DataInput";
import InputFieldCustom from "../prediction/InputFieldCustom";
import SingleSelectCustom from "../prediction/SingleSelectCustom";


const ModelConfigurationForm = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [dataInputs, setDataInputs] = useState([])
  const [paramitersName, setparamitersName] = useState("")
  const [paramitersDescription, setparamitersDescription] = useState("")
  const [paramitersResourceType, setparamitersResourceType] = useState("")

  return (
    <div className={styles.container}>
      <InputFieldCustom
        title={i18n.t("Model name")}
        label={i18n.t("Name")}
        value={name}
        onChange={e => { setName(e.value) }}
      />

      <InputFieldCustom
        title={i18n.t("Model description")}
        label={i18n.t("Description")}
        value={description}
        onChange={e => setDescription(e.value)} />

      <div className={styles.notice}>
        <NoticeBox warning title={`The fields bellow is related to the model paramiters`}>
          Fill the fields bellow to configure the paramiters
        </NoticeBox>
      </div>

      <InputFieldCustom
        title={i18n.t("Name")}
        label={i18n.t("Name")}
        value={paramitersName}
        onChange={setparamitersName} />

      <InputFieldCustom
        title={i18n.t("Description")}
        label={i18n.t("Description")}
        value={paramitersDescription}
        onChange={setparamitersDescription} />

      <SingleSelectCustom
        onChange={setparamitersResourceType}
        label={"Resource Type"}
        title={"Resource Type"}
        selected={paramitersResourceType}
        values= {[
          {
            id: "DATAELEMENT",
            value: "DataElement"
          }
        ]}
      />

      <div style={{ marginTop: 10 }}>
        <Button secondary
          onClick={() => {
            const a = [...dataInputs, { name: paramitersName, description: paramitersDescription, resouceType: paramitersResourceType }]
            setDataInputs(a)
          }}
        >{i18n.t("Add New")}</Button>
      </div>

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

export default ModelConfigurationForm;
