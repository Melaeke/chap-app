import React, { useState } from 'react'
import i18n from "@dhis2/d2-i18n";
import { Form } from "react-final-form";
import styles from "./style/ConfigModule.module.css";
import DataElement from '../prediction/DataElement';
import OrgUnits from '../prediction/OrgUnits';
import OrgUnitLevel from '../prediction/OrgUnitLevel';
import { Button, IconArrowRight24, IconDownload24, NoticeBox } from '@dhis2/ui';
import InputFieldCustom from '../prediction/InputFieldCustom';
import MonthlyPeriodSelect from '../prediction/MonthlyPeriodSelect';

const defaultPeriod = {
    startMonth: "2023-04",
    endMonth: "2024-03",
  };

function ConfigurationSettingsForm() {
    const [predictionTarget, setPredictionTarget] = useState(/*{displayName: 'IDSR Malaria', id: 'vq2qO3eTrNi'}*/);
    const [orgUnits, setOrgUnits] = useState([]);
    const [orgUnitLevel, setOrgUnitLevel] = useState<{ id: string, level: number }>();
    const [namePrediction, setnamePrediction] = useState("")
    const [descriptionPrediction, setdescriptionPrediction] = useState("")
    const [model, setmodel] = useState()
    const [period, setPeriod] = useState(defaultPeriod);

    //checks that all selected orgUnits are on the same level
    function orgUnitsSelectedIsValid() {
        if (orgUnits.length === 0) {
            return true;
        }

        const firstElement = (orgUnits[0] as any).path.split("/").length;
        return orgUnits.every(innerArray => (innerArray as any).path.split("/").length === firstElement);
    }

    const isValid = Boolean(
        predictionTarget &&
        (orgUnits.length > 0 || orgUnitLevel == undefined)
    );


    return (
        <div className={styles.container}>
            <InputFieldCustom
                title={i18n.t("Name of the prediction")}
                label={i18n.t("Name")}
                value={namePrediction}
                onChange={setnamePrediction}
            />
            <InputFieldCustom
                title={i18n.t("Description of the prediction")}
                label={i18n.t("Description")}
                value={descriptionPrediction}
                onChange={setdescriptionPrediction}
            />
            <DataElement
                title={i18n.t("Models of the prediction")}
                label={i18n.t("Select the model")}
                selected={model}
                onChange={setmodel}
            />
            <DataElement
                title={i18n.t("Prediction target")}
                label={i18n.t("Select data element")}
                selected={predictionTarget}
                onChange={setPredictionTarget}
            />
            {/* <OrgUnits orgUnits={orgUnits} setOrgUnits={setOrgUnits} />
            {!orgUnitsSelectedIsValid() && <p className={styles.error}>Only select organization units that are one the same level.</p>}
            <OrgUnitLevel
                orgUnitLevels={orgUnitLevel}
                onChange={setOrgUnitLevel}
            />

            <MonthlyPeriodSelect period={period} onChange={setPeriod} />

            <div className={styles.notice}>
                <NoticeBox warning title={`The fields bellow is related to the ${model?.displayName + " model" ?? "model"}`}>
                    Fill the fields bellow to be able to predict
                </NoticeBox>
            </div> */}


            <div className={styles.buttons}>
                <Button
                    primary
                    loading={false}
                    disabled={!isValid || !orgUnitsSelectedIsValid()}
                    onClick={() => { }}
                >
                    Save
                </Button>
            </div>
        </div>
    )
}

export default ConfigurationSettingsForm